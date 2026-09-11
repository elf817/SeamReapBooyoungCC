<?php
// Same-origin requests (production: Next.js static export + this backend
// served from the same domain) send no Origin header the browser needs
// enforced, so this only actively does something during local dev where
// `next dev` (port 3000) and Apache are different origins.
function is_allowed_origin(string $origin): bool {
    if ($origin === '') {
        return false;
    }

    $config = get_config();
    if (in_array($origin, $config['allowed_origins'] ?? [], true)) {
        return true;
    }

    // Dev convenience: allow ANY host as long as it's on the known Next.js
    // dev port (e.g. testing from another device via http://<lan-ip>:3000).
    // Still not a wildcard — only a specific, known dev port qualifies, and
    // this never applies to the browser's real Access-Control check unless
    // the request also carries valid session cookies.
    $devPort = $config['dev_frontend_port'] ?? null;
    if ($devPort !== null) {
        $parsed = parse_url($origin);
        if (isset($parsed['port']) && (int)$parsed['port'] === (int)$devPort) {
            return true;
        }
    }

    return false;
}

function apply_cors(): void {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if (is_allowed_origin($origin)) {
        header("Access-Control-Allow-Origin: $origin");
        header('Access-Control-Allow-Credentials: true');
        header('Vary: Origin');
    }

    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }
}

// True if this request is cross-origin from an allowed dev origin
// (used by auth.php to decide session-cookie SameSite/Secure flags).
function is_cross_origin_request(): bool {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    return is_allowed_origin($origin);
}
