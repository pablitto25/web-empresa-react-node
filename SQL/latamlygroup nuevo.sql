-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-04-2023 a las 14:49:57
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `latamlygroup`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lg_contents`
--

CREATE TABLE `lg_contents` (
  `id` int(11) NOT NULL,
  `cont_author` varchar(50) NOT NULL DEFAULT '',
  `cont_name` varchar(30) NOT NULL,
  `cont_languaje` varchar(2) DEFAULT NULL,
  `cont_date` datetime NOT NULL,
  `cont_text` longtext NOT NULL,
  `cont_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`cont_json`)),
  `cont_status` varchar(20) DEFAULT NULL,
  `cont_type` varchar(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lg_contents`
--

INSERT INTO `lg_contents` (`id`, `cont_author`, `cont_name`, `cont_languaje`, `cont_date`, `cont_text`, `cont_json`, `cont_status`, `cont_type`, `createdAt`, `updatedAt`) VALUES
(1, 'pablocortes', 'brands', 'en', '0000-00-00 00:00:00', '', '{\r\n    \"items\": [\r\n        {\r\n            \"name\": \"redragon\",\r\n            \"logo\": \"https://latamly.com/wp-content/uploads/2022/09/logo_redragon.png\",\r\n            \"bk-img\": \"https://latamly.com/wp-content/uploads/2022/09/redragon_bk.jpg\",\r\n            \"title\": \"Gaming peripherals\",\r\n            \"desc\": \"A brand that arouses real passion, recognized as the value-for-money leader.\",\r\n            \"cta\": \"https://redragon.es/\"\r\n        }\r\n    ]\r\n}', 'published', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'pablocortes', 'hubs', 'en', '2023-04-04 16:48:57', '', '{\r\n    \"items\": [\r\n        {\r\n            \"name\": \"name\",\r\n            \"linkedin\": \"linkeding-cta\",\r\n            \"logo\": \"logo\",\r\n            \"identification\": \"rut/cuit/lo que sea\",\r\n            \"adress\": \"adress\",\r\n            \"state\": \"state\",\r\n            \"country\": \"country\"\r\n        }\r\n    ]\r\n}', 'published', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lg_media`
--

CREATE TABLE `lg_media` (
  `id` int(11) NOT NULL,
  `media_img_url` varchar(200) DEFAULT NULL,
  `media_vid_url` varchar(200) DEFAULT NULL,
  `media_name` varchar(50) NOT NULL,
  `media_alt` varchar(50) DEFAULT NULL,
  `media_type` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lg_media`
--

INSERT INTO `lg_media` (`id`, `media_img_url`, `media_vid_url`, `media_name`, `media_alt`, `media_type`, `createdAt`, `updatedAt`) VALUES
(25, 'http://localhost:8000/images/Banners Antteq_Banner_Mobile.jpg', 'vacio', 'Banners Antteq_Banner_Mobile.jpg', '', 'jpg', '2023-04-10 15:12:58', '2023-04-10 15:12:58'),
(27, 'http://localhost:8000/images/Banners Antteq_Producto_Desktop.jpg', 'vacio', 'Banners Antteq_Producto_Desktop.jpg', 'ASD', 'jpg', '2023-04-10 15:41:44', '2023-04-10 15:41:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lg_options`
--

CREATE TABLE `lg_options` (
  `id` int(11) NOT NULL,
  `option_name` varchar(50) DEFAULT NULL,
  `option_value` longtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lg_ourteams`
--

CREATE TABLE `lg_ourteams` (
  `id` int(11) NOT NULL,
  `ourteam_img_url` varchar(200) NOT NULL,
  `ourteam_type` varchar(20) NOT NULL,
  `area` varchar(50) DEFAULT NULL,
  `ourteam_fullname` varchar(40) NOT NULL,
  `ourteam_postEn` varchar(50) DEFAULT NULL,
  `ourteam_postEs` varchar(50) DEFAULT NULL,
  `ourteam_mail` varchar(50) NOT NULL,
  `ourteam_linkedinUrl` varchar(200) DEFAULT NULL,
  `ourteam_status` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lg_ourteams`
--

INSERT INTO `lg_ourteams` (`id`, `ourteam_img_url`, `ourteam_type`, `area`, `ourteam_fullname`, `ourteam_postEn`, `ourteam_postEs`, `ourteam_mail`, `ourteam_linkedinUrl`, `ourteam_status`, `createdAt`, `updatedAt`) VALUES
(1, 'https://latamly.com/wp-content/uploads/2022/12/221212-SHIPIN-FOTOS-STAFF-PABLO-CORTES.jpg', 'ourteam', 'Marketing', 'Pablo Cortes', 'Web Development Analyst', 'Analista de desarrollo Web', 'pablocortes@latamly.com', 'https://www.linkedin.com/in/pablo-cortes-007aa5191/', 'active', '2023-04-04 15:12:11', '0000-00-00 00:00:00'),
(2, 'https://latamly.com/wp-content/uploads/2022/12/210722-LATAMLY-FOTOGRAFIAS-WEB-31.jpg', 'ourteam', 'Marketing', 'Mariano Jimenez', 'Digital Project Manager', 'Gerente de Proyectos Digitales', 'marianojimenez@latamly.com', 'https://www.linkedin.com/in/marianojimenezperez-latamly/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lg_users`
--

CREATE TABLE `lg_users` (
  `id` int(11) NOT NULL,
  `user_fullname` varchar(20) NOT NULL,
  `user_login` varchar(20) NOT NULL,
  `user_pass` varchar(20) NOT NULL,
  `user_nickname` varchar(20) NOT NULL,
  `user_mail` varchar(40) NOT NULL,
  `user_lastIP` varchar(32) NOT NULL,
  `user_status` varchar(2) NOT NULL,
  `user_level` varchar(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lg_contents`
--
ALTER TABLE `lg_contents`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lg_media`
--
ALTER TABLE `lg_media`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lg_options`
--
ALTER TABLE `lg_options`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lg_ourteams`
--
ALTER TABLE `lg_ourteams`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lg_users`
--
ALTER TABLE `lg_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lg_contents`
--
ALTER TABLE `lg_contents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `lg_media`
--
ALTER TABLE `lg_media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `lg_options`
--
ALTER TABLE `lg_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lg_ourteams`
--
ALTER TABLE `lg_ourteams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `lg_users`
--
ALTER TABLE `lg_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
