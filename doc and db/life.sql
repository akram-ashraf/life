-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 11, 2024 at 01:59 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `life`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `user_id`, `product_id`, `qty`, `createdAt`, `updatedAt`) VALUES
(1, 2, 10, 2, '2024-01-11 13:43:57', '2024-01-11 13:43:57'),
(2, 2, 11, 2, '2024-01-11 13:45:31', '2024-01-11 13:45:31');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `mrp` decimal(10,2) NOT NULL,
  `discount` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `tag` varchar(100) NOT NULL,
  `category` varchar(15) NOT NULL,
  `stock_bal` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `price`, `mrp`, `discount`, `image`, `brand`, `tag`, `category`, `stock_bal`, `createdAt`, `updatedAt`) VALUES
(1, 'iPhone 9', '549.00', '561.96', 13, 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg', 'Apple', 'smartphones', 'smartphones', 94, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(2, 'iPhone X', '899.00', '916.94', 18, 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg', 'Apple', 'smartphones', 'smartphones', 34, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(3, 'Samsung Universe 9', '1249.00', '1264.46', 15, 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg', 'Samsung', 'smartphones', 'smartphones', 36, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(4, 'OPPOF19', '280.00', '297.91', 18, 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg', 'OPPO', 'smartphones', 'smartphones', 123, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(5, 'Huawei P30', '499.00', '509.58', 11, 'https://cdn.dummyjson.com/product-images/5/thumbnail.jpg', 'Huawei', 'smartphones', 'smartphones', 32, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(6, 'MacBook Pro', '1749.00', '1760.02', 11, 'https://cdn.dummyjson.com/product-images/6/thumbnail.png', 'Apple', 'laptops', 'laptops', 83, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(7, 'Samsung Galaxy Book', '1499.00', '1503.15', 4, 'https://cdn.dummyjson.com/product-images/7/thumbnail.jpg', 'Samsung', 'laptops', 'laptops', 50, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(8, 'Microsoft Surface Laptop 4', '1499.00', '1509.23', 10, 'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg', 'Microsoft Surface', 'laptops', 'laptops', 68, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(9, 'Infinix INBOOK', '1099.00', '1110.83', 12, 'https://cdn.dummyjson.com/product-images/9/thumbnail.jpg', 'Infinix', 'laptops', 'laptops', 96, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(10, 'HP Pavilion 15-DK1056WM', '1099.00', '1105.18', 6, 'https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg', 'HP Pavilion', 'laptops', 'laptops', 89, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(11, 'perfume Oil', '13.00', '21.40', 8, 'https://cdn.dummyjson.com/product-images/11/thumbnail.jpg', 'Impression of Acqua Di Gio', 'fragrances', 'fragrances', 65, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(12, 'Brown Perfume', '40.00', '55.66', 16, 'https://cdn.dummyjson.com/product-images/12/thumbnail.jpg', 'Royal_Mirage', 'fragrances', 'fragrances', 52, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(13, 'Fog Scent Xpressio Perfume', '13.00', '21.14', 8, 'https://cdn.dummyjson.com/product-images/13/thumbnail.webp', 'Fog Scent Xpressio', 'fragrances', 'fragrances', 61, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(14, 'Non-Alcoholic Concentrated Perfume Oil', '120.00', '135.60', 16, 'https://cdn.dummyjson.com/product-images/14/thumbnail.jpg', 'Al Munakh', 'fragrances', 'fragrances', 114, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(15, 'Eau De Perfume Spray', '30.00', '40.99', 11, 'https://cdn.dummyjson.com/product-images/15/thumbnail.jpg', 'Lord - Al-Rehab', 'fragrances', 'fragrances', 105, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(16, 'Hyaluronic Acid Serum', '19.00', '32.31', 13, 'https://cdn.dummyjson.com/product-images/16/thumbnail.jpg', 'LOreal Paris', 'skincare', 'skincare', 110, '2024-01-11 12:10:46', '2024-01-11 12:10:46'),
(17, 'Tree Oil 30ml', '12.00', '16.09', 4, 'https://cdn.dummyjson.com/product-images/17/thumbnail.jpg', 'Hemani Tea', 'skincare', 'skincare', 78, '2024-01-11 12:10:46', '2024-01-11 12:10:46');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `email`, `phone`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'akram', 'akrssaasm@gmail.com', '9847257423', '5656ecd9dc62ae1ad18d9d02155e9867', '2024-01-11 11:41:11', '2024-01-11 11:41:11'),
(2, 'akram', 'akram@gmail.com', '9847207231', '5656ecd9dc62ae1ad18d9d02155e9867', '2024-01-11 11:42:45', '2024-01-11 11:42:45');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
