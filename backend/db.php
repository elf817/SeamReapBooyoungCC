<?php
function get_config(): array {
    static $config = null;
    if ($config === null) {
        $path = __DIR__ . '/config.php';
        if (!file_exists($path)) {
            http_response_code(500);
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode(['ok' => false, 'error' => 'backend/config.php가 없습니다. config.example.php를 복사해 설정해 주세요.']);
            exit;
        }
        $config = require $path;
    }
    return $config;
}

function get_pdo(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        $db = get_config()['db'];
        $dsn = "mysql:host={$db['host']};dbname={$db['name']};charset={$db['charset']}";
        $pdo = new PDO($dsn, $db['user'], $db['pass'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);
    }
    return $pdo;
}
