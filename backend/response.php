<?php
header('Content-Type: application/json; charset=utf-8');

function json_ok($data = null, int $status = 200): void {
    http_response_code($status);
    echo json_encode(['ok' => true, 'data' => $data], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function json_error(string $message, int $status = 400): void {
    http_response_code($status);
    echo json_encode(['ok' => false, 'error' => $message], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function require_method(string $method): void {
    if ($_SERVER['REQUEST_METHOD'] !== $method) {
        json_error('허용되지 않은 요청 방식입니다.', 405);
    }
}

// Reads a field from $_POST — works for both
// application/x-www-form-urlencoded and multipart/form-data bodies.
function body_param(string $key, $default = null) {
    return $_POST[$key] ?? $default;
}
