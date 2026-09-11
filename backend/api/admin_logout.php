<?php
require_once __DIR__ . '/../bootstrap.php';
require_method('POST');

logout_admin();
json_ok(['authenticated' => false]);
