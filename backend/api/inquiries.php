<?php
require_once __DIR__ . '/../bootstrap.php';

$action = $_GET['action'] ?? $_POST['action'] ?? '';

switch ($action) {
    case 'list':
        list_inquiries();
        break;
    case 'create':
        require_method('POST');
        create_inquiry();
        break;
    case 'verify':
        require_method('POST');
        verify_inquiry();
        break;
    case 'reply':
        require_method('POST');
        require_admin();
        reply_inquiry();
        break;
    case 'delete':
        require_method('POST');
        require_admin();
        delete_inquiry();
        break;
    default:
        json_error('알 수 없는 요청입니다.', 400);
}

function list_inquiries(): void {
    $admin = is_admin();
    $stmt = get_pdo()->query('SELECT id, title, writer_name, reply, created_at FROM inquiries ORDER BY created_at DESC');
    $rows = $stmt->fetchAll();
    json_ok(array_map(function ($r) use ($admin) {
        return [
            'id' => (int)$r['id'],
            'title' => $r['title'],
            'writerMasked' => $admin ? $r['writer_name'] : mask_name($r['writer_name']),
            'createdAt' => format_date($r['created_at']),
            'hasReply' => $r['reply'] !== null,
        ];
    }, $rows));
}

function create_inquiry(): void {
    // Honeypot: real users never see/fill this hidden field. If it's
    // filled, silently pretend success without writing anything.
    if (trim((string)body_param('honeypot', '')) !== '') {
        json_ok(['id' => 0]);
    }

    $title = trim((string)body_param('title', ''));
    $writerName = trim((string)body_param('writerName', ''));
    $password = (string)body_param('password', '');
    $content = trim((string)body_param('content', ''));

    if ($title === '' || $writerName === '' || $password === '' || $content === '') {
        json_error('모든 항목을 입력해 주세요.', 400);
    }
    if (mb_strlen($password) < 4) {
        json_error('비밀번호는 4자 이상 입력해 주세요.', 400);
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);
    $pdo = get_pdo();
    $stmt = $pdo->prepare('INSERT INTO inquiries (title, writer_name, password_hash, content) VALUES (?, ?, ?, ?)');
    $stmt->execute([$title, $writerName, $hash, $content]);

    json_ok(['id' => (int)$pdo->lastInsertId()]);
}

function verify_inquiry(): void {
    $id = (int)body_param('id', 0);
    if (!$id) {
        json_error('잘못된 요청입니다.', 400);
    }

    $stmt = get_pdo()->prepare('SELECT * FROM inquiries WHERE id = ?');
    $stmt->execute([$id]);
    $inquiry = $stmt->fetch();
    if (!$inquiry) {
        json_error('문의를 찾을 수 없습니다.', 404);
    }

    // Admin session bypasses the password check entirely — this same
    // endpoint serves both the public password-gated view and the
    // admin detail/reply view.
    if (!is_admin()) {
        $password = (string)body_param('password', '');
        if (!password_verify($password, $inquiry['password_hash'])) {
            json_error('비밀번호가 일치하지 않습니다.', 403);
        }
    }

    json_ok([
        'id' => (int)$inquiry['id'],
        'title' => $inquiry['title'],
        'writerName' => $inquiry['writer_name'],
        'content' => $inquiry['content'],
        'reply' => $inquiry['reply'],
        'repliedAt' => $inquiry['replied_at'] ? format_date($inquiry['replied_at']) : null,
        'createdAt' => format_date($inquiry['created_at']),
    ]);
}

function reply_inquiry(): void {
    $id = (int)body_param('id', 0);
    $reply = trim((string)body_param('reply', ''));
    if (!$id || $reply === '') {
        json_error('잘못된 요청입니다.', 400);
    }

    $stmt = get_pdo()->prepare('UPDATE inquiries SET reply = ?, replied_at = NOW() WHERE id = ?');
    $stmt->execute([$reply, $id]);

    json_ok(['id' => $id]);
}

function delete_inquiry(): void {
    $id = (int)body_param('id', 0);
    if (!$id) {
        json_error('잘못된 요청입니다.', 400);
    }

    $stmt = get_pdo()->prepare('DELETE FROM inquiries WHERE id = ?');
    $stmt->execute([$id]);

    json_ok(['id' => $id]);
}
