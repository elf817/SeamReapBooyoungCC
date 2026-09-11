<?php
// Validates and saves uploaded image files. Never trusts the client-supplied
// filename/extension/MIME header — the real MIME is detected server-side via
// getimagesize(), which also rejects anything that isn't actually a decodable
// image (e.g. a renamed .php file). Every accepted image is re-encoded via
// GD — downscaled if it exceeds $maxDimension and always re-compressed as
// JPEG — so large phone photos are automatically shrunk to a reasonable web
// size instead of being rejected. $maxRawBytes is just a sanity cap on the
// raw upload (GD has to decode the whole thing into memory).
function handle_uploaded_images(
    string $fieldName,
    string $subDir,
    int $maxFiles = 6,
    int $maxRawBytes = 20 * 1024 * 1024,
    int $maxDimension = 2000,
    int $jpegQuality = 85
): array {
    if (!isset($_FILES[$fieldName])) {
        return [];
    }

    $files = $_FILES[$fieldName];
    $count = is_array($files['name']) ? count($files['name']) : 1;
    if ($count > $maxFiles) {
        json_error("사진은 최대 {$maxFiles}장까지 첨부할 수 있습니다.", 400);
    }

    $allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

    $config = get_config();
    $targetDir = rtrim($config['uploads_dir'], '/') . '/' . $subDir;
    if (!is_dir($targetDir)) {
        mkdir($targetDir, 0755, true);
    }

    $saved = [];
    for ($i = 0; $i < $count; $i++) {
        $name = is_array($files['name']) ? $files['name'][$i] : $files['name'];
        $tmpName = is_array($files['tmp_name']) ? $files['tmp_name'][$i] : $files['tmp_name'];
        $error = is_array($files['error']) ? $files['error'][$i] : $files['error'];
        $size = is_array($files['size']) ? $files['size'][$i] : $files['size'];

        if ($error === UPLOAD_ERR_NO_FILE) {
            continue;
        }
        if ($error !== UPLOAD_ERR_OK) {
            json_error('파일 업로드 중 오류가 발생했습니다.', 400);
        }
        if ($size > $maxRawBytes) {
            $maxMb = (int)($maxRawBytes / 1024 / 1024);
            json_error("파일 하나의 용량은 {$maxMb}MB를 초과할 수 없습니다.", 400);
        }

        $imageInfo = @getimagesize($tmpName);
        if ($imageInfo === false || !in_array($imageInfo['mime'], $allowedMimes, true)) {
            json_error('이미지 파일(jpg/png/webp/gif)만 업로드할 수 있습니다.', 400);
        }

        $jpegBytes = resize_and_compress_image($tmpName, $imageInfo['mime'], $maxDimension, $jpegQuality);
        if ($jpegBytes === null) {
            json_error('이미지 처리에 실패했습니다.', 500);
        }

        $filename = bin2hex(random_bytes(16)) . '.jpg';
        $destPath = $targetDir . '/' . $filename;
        if (file_put_contents($destPath, $jpegBytes) === false) {
            json_error('파일 저장에 실패했습니다.', 500);
        }

        $saved[] = [
            'file_path' => $subDir . '/' . $filename,
            'original_name' => $name,
            'mime_type' => 'image/jpeg',
            'size_bytes' => strlen($jpegBytes),
        ];
    }

    return $saved;
}

// Decodes, auto-rotates (JPEG EXIF orientation — phone photos are often
// stored upright-but-flagged-rotated, which GD does not apply on its own),
// downscales to fit within $maxDimension if larger, flattens onto white
// (JPEG has no alpha channel) and re-encodes as JPEG. Returns the encoded
// bytes, or null if the image couldn't be decoded.
function resize_and_compress_image(string $tmpPath, string $mime, int $maxDimension, int $quality): ?string {
    $src = match ($mime) {
        'image/jpeg' => @imagecreatefromjpeg($tmpPath),
        'image/png' => @imagecreatefrompng($tmpPath),
        'image/webp' => function_exists('imagecreatefromwebp') ? @imagecreatefromwebp($tmpPath) : false,
        'image/gif' => @imagecreatefromgif($tmpPath),
        default => false,
    };
    if (!$src) {
        return null;
    }

    if ($mime === 'image/jpeg' && function_exists('exif_read_data')) {
        $exif = @exif_read_data($tmpPath);
        $orientation = $exif['Orientation'] ?? 1;
        $angle = match ($orientation) {
            3 => 180,
            6 => -90,
            8 => 90,
            default => 0,
        };
        if ($angle !== 0) {
            $rotated = imagerotate($src, $angle, 0);
            if ($rotated !== false) {
                imagedestroy($src);
                $src = $rotated;
            }
        }
    }

    $width = imagesx($src);
    $height = imagesy($src);
    $scale = min(1, $maxDimension / max($width, $height));
    $newWidth = max(1, (int)round($width * $scale));
    $newHeight = max(1, (int)round($height * $scale));

    $canvas = imagecreatetruecolor($newWidth, $newHeight);
    imagealphablending($canvas, true);
    $white = imagecolorallocate($canvas, 255, 255, 255);
    imagefilledrectangle($canvas, 0, 0, $newWidth, $newHeight, $white);
    imagecopyresampled($canvas, $src, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
    imagedestroy($src);

    ob_start();
    imagejpeg($canvas, null, $quality);
    $bytes = ob_get_clean();
    imagedestroy($canvas);

    return $bytes !== false && $bytes !== '' ? $bytes : null;
}

function delete_uploaded_file(string $relativePath): void {
    $config = get_config();
    $fullPath = rtrim($config['uploads_dir'], '/') . '/' . $relativePath;
    if (is_file($fullPath)) {
        @unlink($fullPath);
    }
}

// Returns an absolute URL (scheme + host) rather than a bare path. This
// matters in local dev, where the Next.js frontend (localhost:3000) and this
// PHP backend (localhost:80 via XAMPP) are different origins — a relative
// "/backend/uploads/..." path would otherwise resolve against the frontend's
// own origin and 404. In production both are the same origin, so this is
// simply harmless there.
function uploads_url(string $relativePath): string {
    $config = get_config();
    $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'] ?? 'localhost';
    return "{$scheme}://{$host}" . rtrim($config['uploads_url'], '/') . '/' . $relativePath;
}
