<?php
require_once __DIR__ . '/../bootstrap.php';

json_ok(['authenticated' => is_admin()]);
