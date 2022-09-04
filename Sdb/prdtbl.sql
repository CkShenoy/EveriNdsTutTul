-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2022 at 07:01 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `namsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `prdtbl`
--

CREATE TABLE `prdtbl` (
  `UidCol` bigint(20) NOT NULL,
  `TitCol` varchar(100) NOT NULL,
  `DetCol` varchar(1000) NOT NULL,
  `CostCol` int(11) NOT NULL,
  `TymCol` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prdtbl`
--

INSERT INTO `prdtbl` (`UidCol`, `TitCol`, `DetCol`, `CostCol`, `TymCol`) VALUES
(1, 'Shoes', 'Nike Air Jordan', 15000, '2022-08-21 10:19:17'),
(2, 'Watch', 'Apple Watch', 10000, '2022-08-21 10:20:12'),
(3, 'Earphones', 'Airpods', 12000, '2022-08-21 10:20:42'),
(4, 'Bag', 'Sky Bag', 5000, '2022-08-21 10:21:02'),
(5, 'Mobile', 'Apple 11 Pro Max', 100000, '2022-08-21 10:21:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `prdtbl`
--
ALTER TABLE `prdtbl`
  ADD PRIMARY KEY (`UidCol`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `prdtbl`
--
ALTER TABLE `prdtbl`
  MODIFY `UidCol` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
