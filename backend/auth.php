<?php
function start_session(): void {
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    $crossOrigin = is_cross_origin_request();
    $isHttps = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
    // A cookie can only be marked Secure if the connection is genuinely
    // trustworthy: real HTTPS, or the browser's specific exception for the
    // literal hostname "localhost" (not 127.0.0.1, not a bare IP, even on
    // the same machine). SameSite=None additionally REQUIRES Secure, or
    // browsers reject the cookie outright — so a cross-origin admin session
    // is only possible over HTTPS or via "localhost"; a plain-HTTP IP
    // address can never carry it, no matter how this is configured.
    $host = $_SERVER['HTTP_HOST'] ?? '';
    $secureCapable = $isHttps || strpos($host, 'localhost') === 0;

    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'domain' => '',
        'secure' => $crossOrigin ? $secureCapable : $isHttps,
        'httponly' => true,
        'samesite' => ($crossOrigin && $secureCapable) ? 'None' : 'Lax',
    ]);
    session_name('booyoungcc_admin');
    session_start();
}

function login_admin(int $adminId): void {
    start_session();
    session_regenerate_id(true);
    $_SESSION['admin_id'] = $adminId;
}

function logout_admin(): void {
    start_session();
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(
            session_name(),
            '',
            time() - 42000,
            $params['path'],
            $params['domain'],
            $params['secure'],
            $params['httponly']
        );
    }
    session_destroy();
}

function is_admin(): bool {
    start_session();
    return isset($_SESSION['admin_id']);
}

function require_admin(): void {
    if (!is_admin()) {
        json_error('관리자 로그인이 필요합니다.', 401);
    }
}
