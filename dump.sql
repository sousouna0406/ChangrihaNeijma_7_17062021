-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 16, 2022 at 05:03 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `groupomania`
--
CREATE DATABASE IF NOT EXISTS `groupomania` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `groupomania`;

-- --------------------------------------------------------

--
-- Table structure for table `Comments`
--

CREATE TABLE `Comments` (
  `id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Comments`
--

INSERT INTO `Comments` (`id`, `content`, `userId`, `postId`, `createdAt`, `updatedAt`) VALUES
(1, 'Je suis un commentaire', 1, 11, '2022-02-16 09:35:11', '2022-02-16 09:35:11'),
(2, 'Je suis un commentaire', 1, 11, '2022-02-16 09:35:16', '2022-02-16 09:35:16'),
(3, 'hello', 1, 11, '2022-02-16 10:53:54', '2022-02-16 10:53:54'),
(4, 'SALUT', 1, 11, '2022-02-16 15:49:24', '2022-02-16 15:49:24');

-- --------------------------------------------------------

--
-- Table structure for table `Posts`
--

CREATE TABLE `Posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Posts`
--

INSERT INTO `Posts` (`id`, `title`, `description`, `img`, `createdAt`, `updatedAt`, `userId`) VALUES
(11, 'Bienvenue à tous', '', 'http://localhost:3000/images/b_i_e_n_v_e_n_u_e_g_i_f_._g_i_f1644836410102.gif', '2022-02-14 08:43:27', '2022-02-14 11:00:10', 1),
(13, 'PS:', 'Animer vos messages avec des images ou des gif :)', 'http://localhost:3000/images/g_i_f_._g_i_f1644836207109.gif', '2022-02-14 10:56:47', '2022-02-14 11:22:49', 1),
(16, 'Hello !', 'Je m\'appelle loup ', 'http://localhost:3000/images/l_o_u_p_._j_p_e_g1644838057875.jpeg', '2022-02-14 11:27:37', '2022-02-14 11:27:37', 4),
(17, 'Hi !!! :) ', '', 'http://localhost:3000/images/h_e_l_l_o_g_i_f_._g_i_f1644838208295.gif', '2022-02-14 11:30:08', '2022-02-15 17:30:10', 5),
(18, 'Re ', 'Mood :', 'http://localhost:3000/images/w_o_r_k_._g_i_f1644861148805.gif', '2022-02-14 17:52:28', '2022-02-14 17:52:28', 4);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(4) DEFAULT '0',
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'admin@admin.fr', '$2b$10$wlYgekC4bp.ol2LbIcGXcuSIOqFJ9vEpCaaABHhLaiPU8qL/eQ.9q', 1, '2022-02-11 08:45:33', '2022-02-11 08:45:33'),
(4, 'loup@loup.fr', '$2b$10$NRxe7hWeMPJAREfqoB3a1.ha2hRw67M0ODlnCJMgzmbgVMUzjyH2K', 0, '2022-02-14 11:25:30', '2022-02-14 11:25:30'),
(5, 'sousou@sou.fr', '$2b$10$oIgm8Z5kK4KImhkKFFPpSeD9t5WrQcoalPQ/nr05sa3xb0Ps2pMWK', 0, '2022-02-14 11:29:17', '2022-02-14 11:29:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Comments`
--
ALTER TABLE `Comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`userId`),
  ADD KEY `fk_post_id` (`postId`);

--
-- Indexes for table `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_posts_users_idx` (`userId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Comments`
--
ALTER TABLE `Comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Posts`
--
ALTER TABLE `Posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Comments`
--
ALTER TABLE `Comments`
  ADD CONSTRAINT `fk_post_id` FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `Posts`
--
ALTER TABLE `Posts`
  ADD CONSTRAINT `fk_posts_users` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE;
