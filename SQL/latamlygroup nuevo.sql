-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.27-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE latamlygroup;
USE latamlygroup;
-- Volcando estructura para tabla latamlygroup.lg_contents
CREATE TABLE IF NOT EXISTS `lg_contents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cont_author` varchar(50) NOT NULL DEFAULT '',
  `cont_name` varchar(30) NOT NULL,
  `cont_languaje` varchar(2) DEFAULT NULL,
  `cont_date` datetime NOT NULL,
  `cont_text` longtext NOT NULL,
  `cont_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`cont_json`)),
  `cont_status` varchar(20) DEFAULT NULL,
  `cont_type` varchar(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla latamlygroup.lg_contents: ~9 rows (aproximadamente)
INSERT INTO `lg_contents` (`id`, `cont_author`, `cont_name`, `cont_languaje`, `cont_date`, `cont_text`, `cont_json`, `cont_status`, `cont_type`, `createdAt`, `updatedAt`) VALUES
	(1, 'pablocortes', 'brands', 'en', '0000-00-00 00:00:00', '', '{\r\n    "items": [\r\n        {\r\n            "name": "redragon",\r\n            "logo": "https://latamly.com/wp-content/uploads/2022/09/logo_redragon.png",\r\n            "bk-img": "https://latamly.com/wp-content/uploads/2022/09/redragon_bk.jpg",\r\n            "title": "Gaming peripherals",\r\n            "desc": "A brand that arouses real passion, recognized as the value-for-money leader.",\r\n            "cta": "https://redragon.es/"\r\n        }\r\n    ]\r\n}', 'published', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(2, 'pablocortes', 'hubs', 'en', '2023-04-04 16:48:57', '', '{\r\n    "items": [\r\n        {\r\n            "name": "name",\r\n            "linkedin": "linkeding-cta",\r\n            "logo": "logo",\r\n            "identification": "rut/cuit/lo que sea",\r\n            "adress": "adress",\r\n            "state": "state",\r\n            "country": "country"\r\n        }\r\n    ]\r\n}', 'published', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(4, 'pablocortes', 'navbar', 'en', '2023-05-16 11:24:18', '', '{\r\n    "en": [\r\n        {\r\n            "home": "HOME",\r\n            "whatwedo": "WHAT WE DO",\r\n            "howwedoit": "HOW WE DO IT",\r\n            "ourbrands": "OUR BRANDS",\r\n            "ourteam": "OUR TEAM",\r\n            "contact": "CONTACT"\r\n        }\r\n    ],\r\n    "sp": [\r\n        {\r\n            "home": "HOME",\r\n            "whatwedo": "QUE HACEMOS",\r\n            "howwedoit": "COMO LO HACEMOS",\r\n            "ourbrands": "NUESTRAS MARCAS",\r\n            "ourteam": "NUESTRO EQUIPO",\r\n            "contact": "CONTACTO"\r\n        }\r\n    ]\r\n}', 'published', 'lang', '2023-05-16 11:24:32', '2023-05-16 11:24:33'),
	(5, 'pablocortes', 'hero', 'en', '2023-05-22 14:37:48', '', '{\r\n    "en": [\r\n        {\r\n            "title": "involve to evolve",\r\n            "subtitle": "We expand your business in",\r\n            "subtitle_text": "LATIN AMERICA"\r\n        }\r\n    ],\r\n    "sp": [\r\n        {\r\n            "title": "involve to evolve",\r\n            "subtitle": "Expandimos tus negocios en",\r\n            "subtitle_text": "Latinoamérica"\r\n        }\r\n    ]\r\n}', 'published', 'lang', '2023-05-22 14:38:04', '2023-05-22 14:38:05'),
	(6, 'pablocortes', 'AddValue', 'en', '2023-05-22 15:09:25', '', '{\r\n    "en": [\r\n        {\r\n            "we_get": "We get involved",\r\n            "to_add": "to add value",\r\n            "we_do": "We do what businesses and brands need to take root in the region and sustain their growth. We get consumers to trust them and choose them over and over.",\r\n            "we_evolved": "We evolved the trade together",\r\n            "optimizing": "optimizing businesses from manufacturing to consumer experience, in the different Latin American markets.",\r\n            "we_build": "We build for the long term growth",\r\n            "with": "with innovative, tailored and highly profitable business models, developing links between businesses and enduring human relations.",\r\n            "we_always": "We always go the extra mile",\r\n            "with_our": "with our specialized, bold, dynamic and higly committed team of professionals."\r\n        }\r\n    ],\r\n    "sp": [\r\n        {\r\n            "we_get": "Nos involucramos",\r\n            "to_add": "para agregar valor",\r\n            "we_do": "Hacemos lo que los negocios y las marcas necesitan para arraigarse en la región y sostener su crecimiento.",\r\n            "we_evolved": "Evolucionando el trade",\r\n            "optimizing": "Potenciar los negocios desde la fabricación hasta los consumidores, en los distintos mercados de Latinoamérica.",\r\n            "we_build": "Construyendo a largo plazo",\r\n            "with": "Desarrollando el mercado con modelos de negocios innovadores,a medida y de alta rentabilidad, desarrollando vínculos comercialesy humanos perdurables, sostenidos por marcas posicionadas con productos de calidad.",\r\n            "we_always": "Superándonos",\r\n            "with_our": "Con procesos flexibles, dinámicos y con nuestro equipo deprofesionales especializados, proactivos, audaces,comprometidos, voluntad de transformación y persiguiendo resultados"\r\n        }\r\n    ]\r\n}', 'published', 'lang', '2023-05-22 15:09:37', '2023-05-22 15:09:37'),
	(7, 'pablocortes', 'WhatWeDo', 'en', '2023-05-22 16:35:08', '', '{\r\n    "en": [\r\n        {   \r\n            "what_we": "What we do",\r\n            "img_1": "/assets/img/30_territories_latamly.png",\r\n            "then_we": "Then we develop a business model",\r\n            "distribution": "Distribution network",\r\n            "sell_in": "Sell-in shares",\r\n            "sell_through": "Sell-through activities",\r\n            "sell_out": "Sell-out activities",\r\n            "direct": "Direct",\r\n            "marketplaces": "Marketplaces",\r\n            "ecommerces": "E-commerces",\r\n            "we_detect": "We detect a new opportunity",\r\n            "research": "Research",\r\n            "insights": "Insights",\r\n            "sorcing": "Sourcing",\r\n            "validation": "Validation matrix",\r\n            "landing": "Landing strategies OFF/ ON",\r\n            "purchases": "Purchase and contract",\r\n            "implementation": "Implementation"\r\n        }\r\n    ],\r\n    "sp": [\r\n        {\r\n            "what_we": "Que hacemos",\r\n            "img_1": "/assets/img/Grupo124.png",\r\n            "then_we": "Desarrollamos un modelo de negocios a medida",\r\n            "distribution": "Red de distribución",\r\n            "sell_in": "Acciones de Sell-in",\r\n            "sell_through": "Acciones de Sell-through",\r\n            "sell_out": "Acciones de Sell-ou",\r\n            "direct": "Direct",\r\n            "marketplaces": "Mercados",\r\n            "ecommerces": "Comercio electrónico",\r\n            "we_detect": "Detectamos oportunidades",\r\n            "research": "Investigación",\r\n            "insights": "Insights",\r\n            "sorcing": "Sourcing",\r\n            "validation": "Matriz de validación",\r\n            "landing": "Estrategias de desembarco OFF/ ON",\r\n            "purchases": "Contrato y compra",\r\n            "implementation": "Implementaciones"\r\n        }\r\n    ]\r\n}', 'published', 'lang', '2023-05-22 16:35:19', '2023-05-22 16:35:19'),
	(8, 'pablocortes', 'RedFlag', 'en', '2023-05-30 12:16:44', '', '{\r\n    "en": [\r\n        {\r\n            "title": "We synergize cultures and create",\r\n            "title_sub": "closeness",\r\n            "description": "We are a dynamic market development agency with the spirit and the strategy to help our partners make an impact. We care deeply about our partners and treat their businesses as our own."\r\n        }\r\n    ],\r\n    "sp": [\r\n        {\r\n            "title": "Sinergizamos culturas y creamos",\r\n            "title_sub": "cercanía",\r\n            "description": "Entendemos los valores de la región y los aplicamos a cada marca, para hacerlas reconocidas, relevantes y diferentes. Así es cómo transformamos una compra en una verdadera experiencia para los consumidores."\r\n        }\r\n    ]\r\n}', 'published', 'lang', '2023-05-30 12:16:55', '2023-05-30 12:16:56'),
	(9, 'pablocortes', 'HowWeDoIt', 'en', '2023-05-30 14:04:41', '', '{\r\n    "en": [\r\n        {\r\n            "title": "How we do it",\r\n            "subtitle_1": "We operate tailored",\r\n            "subtitle_2": "Push strategies",\r\n            "business_models": "Business models",\r\n            "on_of_channels": "On/off channels",\r\n            "branding": "Branding",\r\n            "communication": "Communication and press",\r\n            "customer_service": "Customer service",\r\n            "foreign": "Foreign trade",\r\n            "storage": "Storage and logistics",\r\n            "business_intelligence": "Business intelligence",\r\n            "warrantly": "Warranty and RMA",\r\n            "title_2": "We guarantee the purchase",\r\n            "subtitle_3": "Pull strategies",\r\n            "production": "Production",\r\n            "business": "Business",\r\n            "experience": "Experience and quality control",\r\n            "brand": "Brand"\r\n        }\r\n    ],\r\n    "sp": [\r\n        {\r\n            "title": "Como lo hacemos",\r\n            "subtitle_1": "Operamos a medida",\r\n            "subtitle_2": "Push strategies",\r\n            "business_models": "Modelos de negocio",\r\n            "on_of_channels": "Canales on/off",\r\n            "branding": "Branding",\r\n            "communication": "Comunicación y prensa",\r\n            "customer_service": "Servicio al cliente",\r\n            "foreign": "Comercio exterior",\r\n            "storage": "Almacenamiento y logística",\r\n            "business_intelligence": "Inteligencia de negocios",\r\n            "warrantly": "Garantía y RMA",\r\n            "title_2": "Garantizamos la compra",\r\n            "subtitle_3": "Pull strategies",\r\n            "production": "Producción",\r\n            "business": "Negocio",\r\n            "experience": "Experiencia y control de calidad",\r\n            "brand": "Marca"\r\n        }\r\n    ]\r\n}', 'published', 'lang', '2023-05-30 14:04:51', '2023-05-30 14:04:52'),
	(10, 'pablocortes', 'Brands', 'en', '2023-05-30 16:05:00', '', '{\r\n    "en": [\r\n        {\r\n            "title": "Empowering",\r\n            "title_2": "businesses and brands",\r\n            "see_more": "See more...",\r\n            "marcas": [\r\n                {\r\n                    "link": "https://redragon.es/",\r\n                    "background": "url(\'/assets/dev/redragon_bk.jpg\')",\r\n                    "logo": "assets/dev/logo_redragon.png",\r\n                    "alt_logo": "Logo redragon",\r\n                    "subtitle": "Gaming peripherals",\r\n                    "description": "A brand that arouses real passion, recognized as the value-for-money leader."\r\n                },\r\n                {\r\n                    "link": "https://t-daggerla.com/",\r\n                    "background": "url(\'/assets/dev/t-dagger_bk.jpg\')",\r\n                    "logo": "assets/dev/t-dagger_logo.png",\r\n                    "alt_logo": "Logo tdagger",\r\n                    "subtitle": "Gaming peripherals",\r\n                    "description": "Daring, attractive and with a lot of character, the great gateway to gaming."\r\n                }\r\n            ]\r\n        }\r\n    ],\r\n    "sp": [\r\n        {\r\n            "title": "Empoderando",\r\n            "title_2": "negocios y marcas",\r\n            "see_more": "Ver más...",\r\n            "marcas": [\r\n                {\r\n                    "link": "https://redragon.es/",\r\n                    "background": "url(\'/assets/dev/redragon_bk.jpg\')",\r\n                    "logo": "assets/dev/logo_redragon.png",\r\n                    "alt_logo": "Logo redragon",\r\n                    "subtitle": "Periféricos Gamers",\r\n                    "description": "Una marca que despierta pasión real, reconocida como la líder en precio/calidad."\r\n                },\r\n                {\r\n                    "link": "https://t-daggerla.com/",\r\n                    "background": "url(\'/assets/dev/t-dagger_bk.jpg\')",\r\n                    "logo": "assets/dev/t-dagger_logo.png",\r\n                    "alt_logo": "Logo tdagger",\r\n                    "subtitle": "Periféricos Gamers",\r\n                    "description": "Atrevida, atractiva y con mucho carácter; la gran puerta de entrada al gaming."\r\n                }\r\n            ]\r\n        }\r\n    ]\r\n}', 'published', 'lang', '2023-05-30 14:04:51', '2023-05-30 14:04:52');

-- Volcando estructura para tabla latamlygroup.lg_media
CREATE TABLE IF NOT EXISTS `lg_media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `media_img_url` varchar(200) DEFAULT NULL,
  `media_vid_url` varchar(200) DEFAULT NULL,
  `media_name` varchar(50) NOT NULL,
  `media_alt` varchar(50) DEFAULT NULL,
  `media_type` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla latamlygroup.lg_media: ~2 rows (aproximadamente)
INSERT INTO `lg_media` (`id`, `media_img_url`, `media_vid_url`, `media_name`, `media_alt`, `media_type`, `createdAt`, `updatedAt`) VALUES
	(25, 'http://localhost:8000/images/Banners Antteq_Banner_Mobile.jpg', 'vacio', 'Banners Antteq_Banner_Mobile.jpg', '', 'jpg', '2023-04-10 15:12:58', '2023-04-10 15:12:58'),
	(27, 'http://localhost:8000/images/Banners Antteq_Producto_Desktop.jpg', 'vacio', 'Banners Antteq_Producto_Desktop.jpg', 'ASD', 'jpg', '2023-04-10 15:41:44', '2023-04-10 15:41:44');

-- Volcando estructura para tabla latamlygroup.lg_options
CREATE TABLE IF NOT EXISTS `lg_options` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `option_name` varchar(50) DEFAULT NULL,
  `option_value` longtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla latamlygroup.lg_options: ~0 rows (aproximadamente)

-- Volcando estructura para tabla latamlygroup.lg_ourteams
CREATE TABLE IF NOT EXISTS `lg_ourteams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla latamlygroup.lg_ourteams: ~95 rows (aproximadamente)
INSERT INTO `lg_ourteams` (`id`, `ourteam_img_url`, `ourteam_type`, `area`, `ourteam_fullname`, `ourteam_postEn`, `ourteam_postEs`, `ourteam_mail`, `ourteam_linkedinUrl`, `ourteam_status`, `createdAt`, `updatedAt`) VALUES
	(4, 'luis-casanegra.jpg', 'ourteam', 'administration', 'Luis Casanegra', 'Chief Executive Officer – Founder', 'Chief Executive Officer – Founder', 'luiscasanegra@latamly.com', 'https://www.linkedin.com/in/luis-casanegra-6608787a/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(5, 'federico-casanegra.jpg', 'ourteam', 'administration', 'Federico Casanegra', 'President – Founder', 'President – Founder', 'fede@latamly.com', 'https://www.linkedin.com/in/federicocasanegra/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(6, 'sebastian-olmedo.jpg', 'ourteam', 'administration', 'Sebastián Olmedo', 'Chief Financial Officer', 'Chief Financial Officer', 'sebastianolmedo@latamly.com', 'https://www.linkedin.com/in/sebastianolmedo/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(7, 'daniel-mandrile.jpg', 'ourteam', 'administration', 'Daniel Mandrile', 'Accounting Manager', 'Accounting Manager', 'danielmandrile@mundofix.com', 'https://www.linkedin.com/in/daniel-mandrile-718569145/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(8, 'dai-kowalczuk.jpg', 'ourteam', 'administration', 'Dayana Kowalczuk', 'Account Receivable Analyst', 'Account Receivable Analyst', 'dayanakowalczuk@shipin.com', 'https://www.linkedin.com/in/dayana-kowalczuk-41b70599/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(9, 'eliana-rocci.jpg', 'ourteam', 'administration', 'Eliana Rocci', 'Accounting Analyst', 'Accounting Analyst', 'elianarocci@latamly.com', 'https://www.linkedin.com/in/eliana-rocci-131543169/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(10, 'pau-romero.jpg', 'ourteam', 'administration', 'Paula Rome', 'Accounts Payable Analyst', 'Accounts Payable Analyst', 'paularome@latamly.com', 'https://www.linkedin.com/in/paula-rom%C3%A9/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(11, 'yesica-amaranto.jpg', 'ourteam', 'administration', 'Yésica Amaranto', 'Head of Account Receivable', 'Head of Account Receivable', 'yesicaamaranto@latamly.com', 'https://www.linkedin.com/in/yesica-romina-amaranto/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(12, 'agustin-lopez.jpg', 'ourteam', 'administration', 'Agustin Lopez', 'Account Receivable Analyst', 'Account Receivable Analyst', 'agustinlopez@latamly.com', 'https://www.linkedin.com/in/agustin-l%C3%B3pez-hern%C3%A1ndez-1963a7210/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(13, 'florencia-luchessi.jpg', 'ourteam', 'administration', 'Florencia Luchessi', 'Head of Tresaury', 'Head of Tresaury', 'florencialuchessi@latamly.com', 'https://www.linkedin.com/in/florencia-luchessi-2b2606b6/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(14, 'facundo-molina.jpg', 'ourteam', 'administration', 'Facundo Molina', 'Treasury Analyst', 'Treasury Analyst', 'facundomolina@mundofix.com', 'https://www.linkedin.com/in/juan-facundo-molina/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(15, 'daniela-asan.jpg', 'ourteam', 'strategic', 'Daniela Asan', 'Controller & Project Manager', 'Controller & Project Manager', 'danielaasan@mundofix.com', 'https://www.linkedin.com/in/daniela-asan/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(16, 'agustin-del-tredici.png', 'ourteam', 'commercial-b2b', 'Agustin Del Tredici', 'Bussines Growth Director', 'Bussines Growth Director', 'agustindeltredici@latamly.com', 'https://www.linkedin.com/in/agustin-del-tredici-b1a82730/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(17, 'federico-malvido.png', 'ourteam', 'commercial-b2b', 'Federico Malvido', 'B2B Sales Coordinator', 'B2B Sales Coordinator', 'federicomalvido@latamly.com', 'https://www.linkedin.com/in/federico-malvido-9853b4177/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(18, 'manuel-arce.jpg', 'ourteam', 'commercial-b2b', 'Manuel Arce', 'B2B Sales Manager', 'B2B Sales Manager', 'manuelarce@latamly.com', 'https://www.linkedin.com/in/manuelignacioarce/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(19, 'diego-bague.jpg', 'ourteam', 'commercial-b2b', 'Diego Bague', 'Regional Sales Manager', 'Regional Sales Manager', 'diegobague@latamly.com', 'https://www.linkedin.com/in/diego-martin-bague-aa815844/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(20, 'franco-cella.jpg', 'ourteam', 'commercial-b2b', 'Franco Cella', 'Key Account Executive', 'Key Account Executive', 'francocella@latamly.com', 'https://www.linkedin.com/in/francocella/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(21, 'mariano-corsini.png', 'ourteam', 'commercial-b2b', 'Mariano Corsini', 'Key Account Executive', 'Key Account Executive', 'marianocorsini@latamly.com', 'https://www.linkedin.com/in/mariano-corsini-a87041262/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(22, 'matias-miranda.jpg', 'ourteam', 'commercial-b2b', 'Matías Miranda', 'Key Account Executive', 'Key Account Executive', 'matiasmiranda@latamly.com', 'https://www.linkedin.com/in/matias-miranda-a9895466/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(23, 'nicolas-arancibia.jpg', 'ourteam', 'commercial-b2b', 'Nicolas Arancibia', 'Sell-Through Leader', 'Sell-Through Leader', 'nicolasarancibia@latamly.com', 'https://www.linkedin.com/in/nicolas-arancibia-rodriguez/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(24, 'catalina-castelblanco.png', 'ourteam', 'commercial-b2b', 'Catalina Castelblanco', 'Sales Executive', 'Sales Executive', 'catalinacastelblanco@latamly.com', 'https://www.linkedin.com/in/catalina-castelblanco-218332205/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(25, 'fernando-de-la-mata.jpg', 'ourteam', 'commercial-b2b', 'Fernando De la mata', 'Sales Executive', 'Sales Executive', 'fernandodelamata@latamly.com', 'https://www.linkedin.com/in/fernando-de-la-mata-151a33115/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(26, 'leandro-melice.jpg', 'ourteam', 'commercial-b2b', 'Leandro Melice', 'Sales Executive', 'Sales Executive', 'leandromelice@latamly.com', 'https://www.linkedin.com/in/leandro-jonathan-melice-788b83158/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(27, 'facundo-monasterio.png', 'ourteam', 'commercial-b2c', 'Facundo Monasterio', 'B2C Sales Director', 'B2C Sales Director', 'facundomonasterio@latamly.com', 'https://www.linkedin.com/in/facundo-monasterio-5568257b/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(28, 'ignacio-alvarez.jpg', 'ourteam', 'commercial-b2c', 'Ignacio Alvarez', 'E-commerce Analyst', 'E-commerce Analyst', 'ignacioalvarez@shipin.ar', 'https://www.linkedin.com/in/ignacio-alvarez-00308852/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(29, 'mariano-gallardo.jpg', 'ourteam', 'commercial-b2c', 'Mariano Gallardo', 'E-commerce Analyst', 'E-commerce Analyst', 'marianogallardo@shipin.ar', 'https://www.linkedin.com/in/mariano-matias-gallardo/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(30, 'nicolas-pereira.jpg', 'ourteam', 'commercial-b2c', 'Nicolas Pereira', 'B2C Sales Leader', 'B2C Sales Leader', 'nicolaspereira@latamly.com', 'https://www.linkedin.com/in/nicolaspereira-latamly/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(31, 'claudio-pons.jpg', 'ourteam', 'commercial-b2c', 'Claudio Pons', 'Sales Executive', 'Sales Executive', 'claudiopons@shipin.ar', 'https://www.linkedin.com/in/claudiopons-shipin/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(32, 'cristian-ragazzini.jpg', 'ourteam', 'commercial-b2c', 'Cristian Ragazzini', 'Sales Executive', 'Sales Executive', 'cristianragazzini@shipin.ar', 'https://www.linkedin.com/in/cristian-maria-ragazzini-rosa-2591091b2/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(33, 'diego-capchey.jpg', 'ourteam', 'commercial-b2c', 'Diego Capchey', 'Sales Executive', 'Sales Executive', 'diegocapchey@shipin.ar', 'https://www.linkedin.com/in/diego-mart%C3%ADn-capchey-a726a2112/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(34, 'guillermo-pons.jpg', 'ourteam', 'commercial-b2c', 'Guillermo Pons', 'Sales Executive', 'Sales Executive', 'guillermopons@shipin.ar', 'https://www.linkedin.com/in/guillermo-pons-9b46a9210/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(35, 'diego-cabrera.jpg', 'ourteam', 'marketing', 'Diego Cabrera', 'Chief Marketing Officer', 'Chief Marketing Officer', 'diegocabrera@latamly.com', 'https://www.linkedin.com/in/diego-cabrera-a789509/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(36, 'ramiro-nestosa.jpg', 'ourteam', 'marketing', 'Ramiro Nestosa', 'Creative Director', 'Creative Director', 'ramironestosa@latamly.com', 'https://www.linkedin.com/in/ramiro-nestosa-344a37125/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(37, 'sebastian-troncoso.jpg', 'ourteam', 'marketing', 'Sebastián Troncoso', 'Copywriter', 'Copywriter', 'sebastiantroncoso@latamly.com', 'https://www.linkedin.com/in/seba-troncoso/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(38, 'damian-garcia.jpg', 'ourteam', 'marketing', 'Damián García', 'Art Director', 'Art Director', 'damiangarcia@latamly.com', 'https://www.linkedin.com/in/dami%C3%A1n-garc%C3%ADa-16235953/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(39, 'cyntia-anton.jpg', 'ourteam', 'marketing', 'Cynthia Anton', 'Customer Support Coordinator', 'Customer Support Coordinator', 'cynthiaanton@latamly.com', 'https://www.linkedin.com/in/cynthia-ant%C3%B3n/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(40, 'agustin-auvieux.jpg', 'ourteam', 'marketing', 'Agustin Auvieux', 'Customer Support Agent', 'Customer Support Agent', 'agustinauvieux@latamly.com', 'https://www.linkedin.com/in/agustin-auvieux/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(41, 'agustin-imberti.jpg', 'ourteam', 'marketing', 'Agustin Imberti', 'Customer Support Agent', 'Customer Support Agent', 'agustinimberti@latamly.com', 'https://www.linkedin.com/in/agustinimberti-latamly/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(42, 'camila-nieva.jpg', 'ourteam', 'marketing', 'Camila Nieva', 'Customer Support Agent', 'Customer Support Agent', 'camilanieva@latamly.com', 'https://www.linkedin.com/in/camila-nieva-b18143228/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(43, 'fabricio-vegas.jpg', 'ourteam', 'markting', 'Fabricio Vegas', 'Customer Support Agent', 'Customer Support Agent', 'fabriciovegas@latamly.com', 'https://www.linkedin.com/in/fabricio-vegas-michel/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(44, 'ignacio-alvarez.jpg', 'ourteam', 'marketing', 'Ignacio Rivera', 'Customer Support Agent', 'Customer Support Agent', 'ignaciorivera@latamly.com', 'https://www.linkedin.com/in/ignacio-javier-rivera-2a6b64236/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(45, 'matias-gambini.jpg', 'ourteam', 'marketing', 'Matías Gambini', 'Customer Support Agent', 'Customer Support Agent', 'matiasgambini@latamly.com', 'https://www.linkedin.com/in/matiasngambini/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(46, 'sofia-anton.jpg', 'ourteam', 'marketing', 'Sofia Anton', 'Customer Support Agent', 'Customer Support Agent', 'sofiaanton@latamly.com', 'https://www.linkedin.com/in/sofiaanton-latamly/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(47, 'mariano-jimenez.jpg', 'ourteam', 'marketing', 'Mariano Jimenez', 'Digital Project Manager', 'Digital Project Manager', 'marianojimenez@latamly.com', 'https://www.linkedin.com/in/marianojimenezperez-latamly/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(48, 'emanuel-munoz.jpg', 'ourteam', 'marketing', 'Emanuel Muñoz', 'Design Coordinator', 'Design Coordinator', 'emanuelmunoz@latamly.com', 'https://www.linkedin.com/in/emanuelmunoz/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(49, 'agustin-baquero.jpg', 'ourteam', 'marketing', 'Agustín Baquero', 'Graphic Designer', 'Graphic Designer', 'agustinbaquero@latamly.com', 'https://www.linkedin.com/in/agust%C3%ADn-baquero-lazcano-8a683236/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(50, 'marcos-pesci.jpg', 'ourteam', 'marketing', 'Marcos Pesci', 'Graphic Designer', 'Graphic Designer', 'marcospesci@latamly.com', 'https://www.linkedin.com/in/marcos-santiago-pesci-335816209/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(51, 'milagros-tello.jpg', 'ourteam', 'marketing', 'Milagros Tello', 'Graphic Designer', 'Graphic Designer', 'milagrostello@latamly.com', 'https://www.linkedin.com/in/milagros-tello-755669162/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(52, 'sofia-marquez.jpg', 'ourteam', 'marketing', 'Sofia Marquez', 'Graphic Designer', 'Graphic Designer', 'sofiamarquez@latamly.com', 'https://www.linkedin.com/in/sofiabelenmarquez/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(53, 'yesica-ramallo.jpg', 'ourteam', 'marketing', 'Yesica Ramallo', 'Graphic Designer', 'Graphic Designer', 'yesicaramallo@latamly.com', 'https://www.linkedin.com/in/yesica-ramallo-681623160/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(54, 'tomas-asurmendi.jpg', 'ourteam', 'marketing', 'Tomas Asurmendi', 'Content Director', 'Content Director', 'tomasasurmendi@latamly.com', 'https://www.linkedin.com/in/tom%C3%A1s-asurmendi-736630210/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(55, 'federico-borello.jpg', 'ourteam', 'marketing', 'Federico Borello', 'Digital Operations Leader', 'Digital Operations Leader', 'federicoborello@latamly.com', 'https://www.linkedin.com/in/federico-borello-sanchez-48b6b71a5/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(56, 'agostina-usandivaras.jpg', 'ourteam', 'marketing', 'Agostina Usandivaras', 'Sponsorship Analyst', 'Sponsorship Analyst', 'agostinausandivaras@latamly.com', 'https://www.linkedin.com/in/agostina-usandivaras/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(57, 'agustina-videla.jpg', 'ourteam', 'strategic', 'Agustina Videla', 'Project Analyst', 'Project Analyst', 'agustinavidela@latamly.com', 'https://www.linkedin.com/in/agustina-videla-galimberti-39aaba1b3/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(58, 'sabrina-gonzalez.png', 'ourteam', 'marketing', 'Sabrina Gonzalez', 'Paid Media Analyst', 'Paid Media Analyst', 'sabrinagonzalez@latamly.com', 'https://www.linkedin.com/in/sabrinarociogonzalez/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(59, 'gisela-zentner.jpg', 'ourteam', 'marketing', 'Gisela Zentner', 'Community Manager', 'Community Manager', 'giselazentner@latamly.com', 'https://www.linkedin.com/in/giselazentner/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(60, 'tomas-del-castillo.jpg', 'ourteam', 'marketing', 'Tomas Del Castillo', 'Community Manager', 'Community Manager', 'tomasdelcastillo@latamly.com', 'https://www.linkedin.com/in/tomas-del-castillo-45684b186/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(61, 'gonzalo-borello-martinez.jpg', 'ourteam', 'marketing', 'Gonzalo Borello Martinez', 'Business & Marketing Partner', 'Business & Marketing Partner', 'gonzaloborello@latamly.com', 'https://www.linkedin.com/in/goborell/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(62, 'emiliano-zanuzzi.jpg', 'ourteam', 'marketing', 'Emiliano Zanuzzi', 'Brand Manager', 'Brand Manager', 'emilianozanuzzi@latamly.com', 'https://www.linkedin.com/in/emiliano-zanuzzi-5b88134a/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(63, 'fernando-avedano.jpg', 'ourteam', 'marketing', 'Fernando Avedano', 'Brand Manager', 'Brand Manager', 'fernandoavedano@latamly.com', 'https://www.linkedin.com/in/fernando-avedano-42428a9b/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(64, 'guadalupe-zelaya.jpg', 'ourteam', 'marketing', 'Guadalupe Zelaya', 'Brand Manager', 'Brand Manager', 'guadalupezelaya@latamly.com', 'https://www.linkedin.com/in/mar%C3%ADaguadalupezelayal%C3%B3pez/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(65, 'laura-bergesio.png', 'ourteam', 'marketing', 'Laura Bergesio', 'Brand Manager', 'Brand Manager', 'laurabergesio@latamly.com', 'https://www.linkedin.com/in/marialaurabergesio-/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(66, 'mariana-triverio.jpg', 'ourteam', 'marketing', 'Mariana Triverio', 'Brand Manager', 'Brand Manager', 'marianatriverio@latamly.com', 'https://www.linkedin.com/in/marianatriverio/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(67, 'matias-de-leon.jpg', 'ourteam', 'marketing', 'Matias De Leon', 'Brand Manager', 'Brand Manager', 'matiasdeleon@latamly.com', 'https://www.linkedin.com/in/matiasdeleonb/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(68, 'pablo-capurro.jpg', 'ourteam', 'operation', 'Pablo Capurro', 'Chief Operating Officer', 'Chief Operating Officer', 'pablocapurro@latamly.com', 'https://www.linkedin.com/in/pablo-capurro-98361125/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(69, 'darner-marcano.jpg', 'ourteam', 'operation', 'Darner Marcano', 'Process Quality Leader', 'Process Quality Leader', 'darnermarcano@latamly.com', 'https://www.linkedin.com/in/darnermarcano/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(70, 'ariel-bazan.png', 'ourteam', 'operation', 'Ariel Bazan', 'RMA technician', 'RMA technician', 'arielbazan@latamly.com', 'https://www.linkedin.com/in/ariel-alejandro-bazan-049125146/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(71, 'federico-atencio.jpg', 'ourteam', 'operation', 'Federico Atencio', 'RMA Leader', 'RMA Leader', 'federicoatencio@latamly.com', 'https://www.linkedin.com/in/federico-atencio-8a6480210/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(72, 'german-reynoso.png', 'ourteam', 'operation', 'German Reynoso', 'RMA technician', 'RMA technician', 'germanreynoso@mundofix.com', 'https://www.linkedin.com/in/sergio-german-reynoso-7aa126144/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(73, 'pablo-cortes.jpg', 'ourteam', 'marketing', 'Pablo Cortes', 'Web Development Analyst', 'Web Development Analyst', 'pablocortes@latamly.com', 'https://www.linkedin.com/in/pablo-cortes-007aa5191/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(74, 'felix-tovar.jpg', 'ourteam', 'operation', 'Felix Tovar', 'Warehouse Supervisor', 'Warehouse Supervisor', 'felixtovar@latamly.com', 'https://www.linkedin.com/in/felix-antonio-tovar-rodriguez-532661100/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(75, 'diego-rondon.jpg', 'ourteam', 'operation', 'Diego Rondon', 'Warehouse Operator', 'Warehouse Operator', 'diegorondon@latamly.com', 'https://www.linkedin.com/in/diego-rondon-martinez-2051a1159/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(76, 'gustavo-bonini.jpg', 'ourteam', 'operation', 'Gustavo Bonini', 'Warehouse Operator', 'Warehouse Operator', 'gustavobonini@latamly.com', 'https://www.linkedin.com/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(77, 'pablo-zarate.png', 'ourteam', 'operation', 'Pablo Zarate', 'Warehouse Operator', 'Warehouse Operator', 'pablozarate@latamly.com', 'https://www.linkedin.com/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(78, 'javier-san-martin.jpg', 'ourteam', 'operation', 'Javier San Martin', 'Logistics Coordinator', 'Logistics Coordinator', 'javiersanmartin@shipin.ar', 'https://www.linkedin.com/in/javier-san-mart%C3%ADn-488110a7/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(79, 'rodrigo-perez.jpg', 'ourteam', 'operation', 'Rodrigo Perez', 'Warehouse Operator', 'Warehouse Operator', 'rodrigoperez@shipin.ar', 'https://www.linkedin.com/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(80, 'santiago-santucho.jpg', 'ourteam', 'operation', 'Santiago Santucho', 'Logistics Administrative', 'Logistics Administrative', 'santiagosantucho@shipin.ar', 'https://www.linkedin.com/in/santiago-omar-santucho-a595b8210/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(81, 'carolina-lorda.jpg', 'ourteam', 'operation', 'Carolina Lorda', 'Foreign Trade Manager', 'Foreign Trade Manager', 'carolinalorda@latamly.com', 'https://www.linkedin.com/in/carolina-lorda-1ba16018/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(82, 'jessica-tapia.jpg', 'ourteam', 'operation', 'Jessica Tapia', 'Foreign Trade Manager', 'Foreign Trade Manager', 'jessicatapia@latamly.com', 'https://www.linkedin.com/in/jessica-tapia-guevara-158bb31b9/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(83, 'leonardo-aguilar.jpg', 'ourteam', 'operation', 'Leonardo Aguilar', 'Supply and Logistics Leader', 'Supply and Logistics Leader', 'leonardoaguilar@latamly.com', 'https://www.linkedin.com/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(84, 'daniel-mansilla.jpg', 'ourteam', 'operation', 'Daniel Mansilla', 'Maintenance', 'Maintenance', 'danielmansilla@mundofix.com', 'https://www.linkedin.com/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(85, 'miriam-juarez.jpg', 'ourteam', 'operation', 'Miriam Juarez', 'Cleaning', 'miriamjuarez@mundofix.com', 'miriamjuarez@mundofix.com', 'https://www.linkedin.com/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(86, 'santiago-battan.jpg', 'ourteam', 'strategic', 'Santiago Battan', 'Chief Technology Officer', 'Chief Technology Officer', 'santiagobattan@latamly.com', 'https://www.linkedin.com/in/santiago-battan/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(87, 'luis-carreras-dann.jpg', 'ourteam', 'strategic', 'Luis Carreras Dann', 'Business Intelligence Manager', 'Business Intelligence Manager', 'luiscarreras@latamly.com', 'https://www.linkedin.com/in/luis-carreras-dann-26036913/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(88, 'enrique-cariddi.jpg', 'ourteam', 'strategic', 'Enrique Cariddi', 'Business Intelligence Analyst', 'Business Intelligence Analyst', 'enriquecariddi@latamly.com', 'https://www.linkedin.com/in/enrique-leandro-cariddi-a12340172/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(89, 'lucas-hillar.jpg', 'ourteam', 'strategic', 'Lucas Hillar', 'IT Analyst', 'IT Analyst', 'https://latamly.com/our-team/lucashillar@latamly.c', 'https://www.linkedin.com/in/lucas-hillar-747520137/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(90, 'daniel-boe.jpg', 'ourteam', 'product', 'Daniel Boe', 'Product Director', 'Product Director', 'danielboe@latamly.com', 'https://www.linkedin.com/in/daniel-bo%C3%A9-18265573', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(91, 'daniel-luna.png', 'ourteam', 'product', 'Daniel Luna', 'Technical Back Office', 'Technical Back Office', 'danielluna@latamly.com', 'https://www.linkedin.com/in/daniel-luna-749653210/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(92, 'leonardo-padoan.png', 'ourteam', 'product', 'Leonardo Padoan', 'Market Analyst', 'Market Analyst', 'leonardopadoan@latamly.com', 'https://www.linkedin.com/in/leonardo-eugenio-p-987b0a210/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(93, 'marcelo-casares.png', 'ourteam', 'commercial-b2c', 'Marcelo Casares', 'B2C Sales Manager', 'B2C Sales Manager', 'marcelocasares@latamly.com', 'https://www.linkedin.com/in/marcelo-agustin-casares-960209119/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(94, 'mariano-reyes.png', 'ourteam', 'product', 'Mariano Reyes', 'Product Manager Xp-Pen & Haxly', 'Product Manager Xp-Pen & Haxly', 'marianoreyes@latamly.com', 'https://www.linkedin.com/in/mariano-reyes-51478322/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(95, 'virginia-forteza.png', 'ourteam', 'product', 'Virgina Forteza', 'Product Manager Redragon & T-Dagger', 'Product Manager Redragon & T-Dagger', 'virginiaforteza@latamly.com', 'https://www.linkedin.com/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(96, 'federico-calafell.jpg', 'ourteam', 'rrhh', 'Federico Calafell', 'Human Resources Manager', 'Human Resources Manager', 'federicocalafell@latamly.com', 'https://www.linkedin.com/in/fcalafell/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(97, 'fernanda-bossio.jpg', 'ourteam', 'rrhh', 'Fernanda Bossio', 'Human Resources Analyst', 'Human Resources Analyst', 'fernandabossio@latamly.com', 'https://www.linkedin.com/in/fernanda-bossio-4358ab121/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
	(98, 'maria-aurelia-facello.jpg', 'ourteam', 'rrhh', 'Maria Aurelia Facello', 'Human Resources Analyst', 'Human Resources Analyst', 'aureliafacello@latamly.com', 'https://www.linkedin.com/in/mariaaureliafacello/', 'active', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- Volcando estructura para tabla latamlygroup.lg_users
CREATE TABLE IF NOT EXISTS `lg_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_fullname` varchar(20) NOT NULL,
  `user_login` varchar(20) NOT NULL,
  `user_pass` varchar(20) NOT NULL,
  `user_nickname` varchar(20) NOT NULL,
  `user_mail` varchar(40) NOT NULL,
  `user_lastIP` varchar(32) NOT NULL,
  `user_status` varchar(2) NOT NULL,
  `user_level` varchar(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla latamlygroup.lg_users: ~0 rows (aproximadamente)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
