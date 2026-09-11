<?php
// Dev-only utility — do NOT deploy this file to production.
// Generates a bcrypt hash to paste into schema.sql's admin seed row,
// or to UPDATE the admin table directly later when changing the password.
//
// Usage (CLI):     php backend/tools/hash_password.php mypassword
// Usage (browser): http://localhost/backend/tools/hash_password.php?password=mypassword

$password = $argv[1] ?? ($_GET['password'] ?? null);

if (!$password) {
    echo "사용법: php hash_password.php <password>\n";
    exit(1);
}

echo password_hash($password, PASSWORD_DEFAULT) . "\n";
