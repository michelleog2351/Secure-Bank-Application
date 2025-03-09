-- INIT database
--
-- Database: `myBankSystemDB`
--

DROP DATABASE IF EXISTS `myBankSystemDB`;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `myBankSystemDB` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `myBankSystemDB`;
-- --------------------------------------------------------

--
-- Table structure for table `users`
--
CREATE TABLE users (
    id INT AUTO_INCREMENT KEY,
    email VARCHAR(100),
    password VARCHAR(255)
);

INSERT INTO users(email, password) VALUES ('maria@atu.ie', md5('123abc#'));
INSERT INTO users(email, password) VALUES ('mandy@atu.ie', md5('123def#'));
INSERT INTO users(email, password) VALUES ('pauric@atu.ie', md5('456abc#'));

-- QUERY database
SELECT * FROM users;
-- SELECT * FROM users WHERE email = 'maria@atu.ie' AND password = md5('123abc#');
-- SELECT * FROM users WHERE email = 'maria@atu.ie' OR 1 = 1; -- AND password = md5('123abc#');