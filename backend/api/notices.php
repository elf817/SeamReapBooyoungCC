<?php
require_once __DIR__ . '/../bootstrap.php';

$action = $_GET['action'] ?? $_POST['action'] ?? '';

switch ($action) {
    case 'list':
        list_notices();
        break;
    case 'get':
        get_notice_detail();
        break;
    case 'create':
        require_method('POST');
        require_admin();
        create_notice();
        break;
    case 'update':
        require_method('POST');
        require_admin();
        update_notice();
        break;
    case 'delete':
        require_method('POST');
        require_admin();
        delete_notice();
        break;
    default:
        json_error('알 수 없는 요청입니다.', 400);
}

function list_notices(): void {
    $stmt = get_pdo()->query('SELECT id, title, pinned, created_at FROM notices ORDER BY pinned DESC, created_at DESC');
    $rows = $stmt->fetchAll();
    json_ok(array_map(function ($r) {
        return [
            'id' => (int)$r['id'],
            'title' => $r['title'],
            'pinned' => (bool)$r['pinned'],
            'createdAt' => format_date($r['created_at']),
        ];
    }, $rows));
}

function get_notice_detail(): void {
    $id = (int)($_GET['id'] ?? 0);
    if (!$id) {
        json_error('잘못된 요청입니다.', 400);
    }

    $stmt = get_pdo()->prepare('SELECT * FROM notices WHERE id = ?');
    $stmt->execute([$id]);
    $notice = $stmt->fetch();
    if (!$notice) {
        json_error('공지사항을 찾을 수 없습니다.', 404);
    }

    $imgStmt = get_pdo()->prepare('SELECT id, file_path, original_name FROM notice_images WHERE notice_id = ? ORDER BY sort_order, id');
    $imgStmt->execute([$id]);
    $images = array_map(function ($img) {
        return [
            'id' => (int)$img['id'],
            'url' => uploads_url($img['file_path']),
            'originalName' => $img['original_name'],
        ];
    }, $imgStmt->fetchAll());

    json_ok([
        'id' => (int)$notice['id'],
        'title' => $notice['title'],
        'body' => $notice['body'],
        'pinned' => (bool)$notice['pinned'],
        'createdAt' => format_date($notice['created_at']),
        'updatedAt' => format_date($notice['updated_at']),
        'images' => $images,
    ]);
}

function create_notice(): void {
    [$title, $body, $pinned] = read_notice_fields();
    if ($title === '' || $body === '') {
        json_error('필수 항목을 입력해 주세요.', 400);
    }

    $pdo = get_pdo();
    $stmt = $pdo->prepare('INSERT INTO notices (title, body, pinned) VALUES (?, ?, ?)');
    $stmt->execute([$title, $body, $pinned ? 1 : 0]);
    $noticeId = (int)$pdo->lastInsertId();

    save_notice_images($noticeId);

    json_ok(['id' => $noticeId]);
}

function update_notice(): void {
    $id = (int)body_param('id', 0);
    if (!$id) {
        json_error('잘못된 요청입니다.', 400);
    }

    [$title, $body, $pinned] = read_notice_fields();
    if ($title === '' || $body === '') {
        json_error('필수 항목을 입력해 주세요.', 400);
    }

    $stmt = get_pdo()->prepare('UPDATE notices SET title = ?, body = ?, pinned = ? WHERE id = ?');
    $stmt->execute([$title, $body, $pinned ? 1 : 0, $id]);

    $removeIds = $_POST['removeImageIds'] ?? [];
    if (is_array($removeIds) && count($removeIds) > 0) {
        remove_notice_images($id, array_map('intval', $removeIds));
    }

    save_notice_images($id);

    json_ok(['id' => $id]);
}

function delete_notice(): void {
    $id = (int)body_param('id', 0);
    if (!$id) {
        json_error('잘못된 요청입니다.', 400);
    }

    $pdo = get_pdo();
    $stmt = $pdo->prepare('SELECT file_path FROM notice_images WHERE notice_id = ?');
    $stmt->execute([$id]);
    foreach ($stmt->fetchAll() as $img) {
        delete_uploaded_file($img['file_path']);
    }

    // ON DELETE CASCADE removes the notice_images rows.
    $del = $pdo->prepare('DELETE FROM notices WHERE id = ?');
    $del->execute([$id]);

    json_ok(['id' => $id]);
}

function read_notice_fields(): array {
    $title = trim((string)body_param('title', ''));
    $body = trim((string)body_param('body', ''));
    $pinnedRaw = body_param('pinned', '');
    $pinned = $pinnedRaw === '1' || $pinnedRaw === 'true';
    return [$title, $body, $pinned];
}

function save_notice_images(int $noticeId): void {
    $saved = handle_uploaded_images('photos', 'notices');
    if (empty($saved)) {
        return;
    }

    $stmt = get_pdo()->prepare(
        'INSERT INTO notice_images (notice_id, file_path, original_name, mime_type, size_bytes) VALUES (?, ?, ?, ?, ?)'
    );
    foreach ($saved as $file) {
        $stmt->execute([$noticeId, $file['file_path'], $file['original_name'], $file['mime_type'], $file['size_bytes']]);
    }
}

function remove_notice_images(int $noticeId, array $imageIds): void {
    if (empty($imageIds)) {
        return;
    }

    $pdo = get_pdo();
    $placeholders = implode(',', array_fill(0, count($imageIds), '?'));

    $stmt = $pdo->prepare("SELECT id, file_path FROM notice_images WHERE notice_id = ? AND id IN ($placeholders)");
    $stmt->execute(array_merge([$noticeId], $imageIds));
    foreach ($stmt->fetchAll() as $row) {
        delete_uploaded_file($row['file_path']);
    }

    $del = $pdo->prepare("DELETE FROM notice_images WHERE notice_id = ? AND id IN ($placeholders)");
    $del->execute(array_merge([$noticeId], $imageIds));
}
