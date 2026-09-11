<?php
require_once __DIR__ . '/../bootstrap.php';
require_method('POST');

$username = trim((string)body_param('username', ''));
$password = (string)body_param('password', '');

if ($username === '' || $password === '') {
    json_error('아이디와 비밀번호를 입력해 주세요.', 400);
}

$stmt = get_pdo()->prepare('SELECT id, password_hash FROM admin WHERE username = ?');
$stmt->execute([$username]);
$admin = $stmt->fetch();

if (!$admin || !password_verify($password, $admin['password_hash'])) {
    json_error('아이디 또는 비밀번호가 올바르지 않습니다.', 401);
}

login_admin((int)$admin['id']);
json_ok(['authenticated' => true]);
