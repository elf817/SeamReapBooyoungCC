<?php
declare(strict_types=1);

date_default_timezone_set('Asia/Phnom_Penh');

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/response.php';
require_once __DIR__ . '/cors.php';
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/upload.php';

apply_cors();

function format_date(string $datetime): string {
    return substr(str_replace('-', '.', $datetime), 0, 10);
}

function mask_name(string $name): string {
    $len = mb_strlen($name);
    if ($len <= 1) return $name;
    if ($len === 2) return mb_substr($name, 0, 1) . '*';
    return mb_substr($name, 0, 1) . str_repeat('*', $len - 2) . mb_substr($name, -1);
}
