SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysecureapplication`
--

DROP DATABASE IF EXISTS `bank_system`;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `bank_system` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `bank_system`;
-- --------------------------------------------------------

--
-- Table structure for table `users`
--

-- admin table
CREATE TABLE `admin` (
  `adminID` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL, 
  `role` ENUM('superadmin') NOT NULL DEFAULT 'superadmin'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `admin` (`username`, `password`, `role`) VALUES
('test.admin1', 'hashed_password_here', 'superadmin');

select * from admin;

-- customer table
CREATE TABLE `customer` (
	  `customerID` INT AUTO_INCREMENT PRIMARY KEY,
	  `accountNo` VARCHAR(25) NOT NULL UNIQUE,
	  `first_name` VARCHAR(50) NOT NULL,
	  `last_name` VARCHAR(50) NOT NULL,
	  `email` VARCHAR(100) NOT NULL UNIQUE,
	  `phone_no` VARCHAR(20) NOT NULL,
	  `username` VARCHAR(50) NOT NULL UNIQUE,
	  `password` VARCHAR(255) NOT NULL,
	  `balance` FLOAT NOT NULL,
	  PRIMARY KEY (`accountNo`)
	) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Dumping data for table `users`
--

INSERT INTO `customer` (`accountNo`, `first_name`, `last_name`, `email`, `phone_no`, `username`, `password`, `balance`) VALUES
('test', 'John', 'Doe', 'johndoe@example.com', '+353 123 4567', 'john.doe', 'test', 100.23),
('BOI16589', 'Jane', 'Smith', 'jane.smith@example.com', '+353 234 5678', 'jane.smith', 'password1', 100.23),
('BOI23658', 'Michael', 'Brown', 'michael.brown@example.com', '+353 345 6789', 'michael.brown', 'password2', 2000.36),
('BOI41235', 'Emily', 'Davis', 'emily.davis@example.com', '+353 456 7890', 'emily.davis', 'password3', 500.99),
('BOI87854', 'Chris', 'Wilson', 'chris.wilson@example.com', '+353 567 8901', 'chris.wilson', 'password4', 123.65),
('BOI11236', 'Emma', 'Johnson', 'emma.johnson@example.com', '+353 678 9012', 'emma.johnson', 'password5', 6587.21),
('BOI65214', 'Daniel', 'Miller', 'daniel.miller@example.com', '+353 789 0123', 'daniel.miller', 'password6', 5000.00),
('BOI66985', 'Sophia', 'Anderson', 'sophia.anderson@example.com', '+353 890 1234', 'sophia.anderson', 'password7', 86.35);


--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--

select * from customer;
ALTER TABLE `customer`
  ADD UNIQUE KEY `accountNo` (`accountNo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;