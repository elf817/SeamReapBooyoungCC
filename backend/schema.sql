CREATE TABLE IF NOT EXISTS admin (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS notices (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  body MEDIUMTEXT NOT NULL,
  pinned TINYINT(1) NOT NULL DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_notices_pinned_created (pinned, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS notice_images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  notice_id INT NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  original_name VARCHAR(255),
  mime_type VARCHAR(100) NOT NULL,
  size_bytes INT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (notice_id) REFERENCES notices(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS inquiries (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  writer_name VARCHAR(50) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  content MEDIUMTEXT NOT NULL,
  reply MEDIUMTEXT NULL,
  replied_at DATETIME NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_inquiries_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed admin account. The placeholder hash below does not correspond to any
-- real password (login will always fail against it) — replace it before use.
-- Generate a real hash locally with: php backend/tools/hash_password.php <password>
INSERT INTO admin (username, password_hash)
VALUES ('admin', '$2y$10$REPLACE.THIS.WITH.A.REAL.BCRYPT.HASH.FROM.hash_password.php')
ON DUPLICATE KEY UPDATE username = username;
