-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 30 déc. 2022 à 12:52
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `zenith`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `categorie` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `categorie`) VALUES
(1, 'cat1'),
(2, 'cat2'),
(3, 'cat3'),
(4, 'cat4'),
(5, 'cat5'),
(6, 'cat6'),
(7, 'cat7'),
(8, 'cat8');

-- --------------------------------------------------------

--
-- Structure de la table `chiffres`
--

CREATE TABLE `chiffres` (
  `id` int(11) NOT NULL,
  `collab` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `digital` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `secteur_id` int(11) NOT NULL,
  `nom_client` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `histoire` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `enjeu` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reponse` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `elementprecision` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `temoignage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `debut` date DEFAULT NULL,
  `fin` date DEFAULT NULL,
  `mission` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duree` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `secteur_id`, `nom_client`, `logo`, `updated_at`, `histoire`, `enjeu`, `reponse`, `elementprecision`, `temoignage`, `debut`, `fin`, `mission`, `duree`) VALUES
(1, 4, 'Garnier', 'isaac-0-63910060a75e9681189908.webp', '2022-12-07 22:06:40', '<p>histoire</p>', '<p>enjeu</p>', '<p>reponse</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-04', '2022-12-29', 'Mission principale', '400j'),
(2, 4, 'Garnier', 'adobe-after-effects-63aeccaa709db266822009.ico', '2022-12-30 12:34:02', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(3, 4, 'Garnier', 'comm-discord-63aeccdf4ad2e491884153.ico', '2022-12-30 12:34:55', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(4, 4, 'Garnier', 'comm-yahoo-messenger-63aeccea04e4d081291738.ico', '2022-12-30 12:35:06', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(5, 4, 'Garnier', 'comm-trillian2-63aeccf60fcd2747534249.ico', '2022-12-30 12:35:18', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(6, 4, 'Garnier', 'evernote-63aecd02917a7566384059.ico', '2022-12-30 12:35:30', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(7, 4, 'Garnier', 'malwarebytes-63aecd0c93041176865763.ico', '2022-12-30 12:35:40', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(8, 4, 'Garnier', 'comm-skype-63aecd16a4e20736374268.ico', '2022-12-30 12:35:50', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(9, 4, 'Garnier', 'microsoft-office-one-note-63aecd207bd7e269207551.ico', '2022-12-30 12:36:00', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(10, 4, 'Garnier', 'sharex-63aecd2fa5080219495932.ico', '2022-12-30 12:36:15', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(11, 4, 'Garnier', 'jupyter-notebook-63aecefcb7b23148030673.ico', '2022-12-30 12:43:56', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(12, 4, 'Garnier', 'mbam-63aecf0c10319747380481.ico', '2022-12-30 12:44:12', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(13, 4, 'Garnier', 'media-aimp-2-63aecf23158c8616526901.ico', '2022-12-30 12:44:35', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(14, 4, 'Garnier', 'media-foobar-63aecf35b90cc766825590.ico', '2022-12-30 12:44:53', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(15, 4, 'Garnier', 'media-pot-player-63aecf45643b1333204383.ico', '2022-12-30 12:45:09', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(16, 4, 'Garnier', 'media-vlc-63aecf53c375d852436989.ico', '2022-12-30 12:45:23', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(17, 4, 'Garnier', 'media-winamp-63aecf6230572888444137.ico', '2022-12-30 12:45:38', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(18, 4, 'Garnier', 'resource-hacker-63aecf7082c98985365919.ico', '2022-12-30 12:45:52', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(19, 4, 'Garnier', 'ori-and-the-blind-forest-63aecf7ea1f02611405617.ico', '2022-12-30 12:46:06', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(20, 4, 'Garnier', 'vscode-63aecf8b87aac069165581.ico', '2022-12-30 12:46:19', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(21, 4, 'Garnier', 'customizer-god-63aece6212abf441816017.ico', '2022-12-30 12:41:22', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(22, 4, 'Garnier', 'dropbox-63aece70c7dd1020645225.ico', '2022-12-30 12:41:36', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(23, 4, 'Garnier', 'edge-63aece7faa0f7239138607.ico', '2022-12-30 12:41:51', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(24, 4, 'Garnier', 'email-gmail-google-63aece909961c949602606.ico', '2022-12-30 12:42:08', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(25, 4, 'Garnier', 'evernote-63aecea0ed48c893426414.ico', '2022-12-30 12:42:24', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(26, 4, 'Garnier', 'firefox-twi-63aeceaead037344759465.ico', '2022-12-30 12:42:38', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(27, 4, 'Garnier', 'glasswire-63aecebd1b476416077074.ico', '2022-12-30 12:42:53', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(28, 4, 'Garnier', 'google-chrome-canary-63aececcc829b554040703.ico', '2022-12-30 12:43:08', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(29, 4, 'Garnier', 'google-docs-63aecedc2c7a7679040913.ico', '2022-12-30 12:43:24', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(30, 4, 'Garnier', 'html-63aeceed9f7bf115951792.png', '2022-12-30 12:43:41', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(31, 4, 'Garnier', 'art-maya-63aecdab6696e179560643.ico', '2022-12-30 12:38:19', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(32, 4, 'Garnier', 'art1-artrage-63aecdb9a76a2694793458.ico', '2022-12-30 12:38:33', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(33, 4, 'Garnier', 'art2-krita-63aecdcd2d33e774716945.ico', '2022-12-30 12:38:53', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(34, 4, 'Garnier', 'battlenet-63aecddf1ed18198898909.ico', '2022-12-30 12:39:11', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(35, 4, 'Garnier', 'chocolatey-63aecdfc7e5d5697121202.ico', '2022-12-30 12:39:40', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(36, 4, 'Garnier', 'audacity-63aecdedda433493762125.ico', '2022-12-30 12:39:25', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(37, 4, 'Garnier', 'classic-shell2-63aece0dbf24c479455860.ico', '2022-12-30 12:39:57', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(38, 4, 'Garnier', 'comm-green-63aece22e2212018951228.ico', '2022-12-30 12:40:18', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(39, 4, 'Garnier', 'comm-pidgin-63aece3846cfc707584026.ico', '2022-12-30 12:40:40', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(40, 4, 'Garnier', 'comm-trillian2-63aece5082c17759082891.ico', '2022-12-30 12:41:04', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(41, 4, 'Garnier', 'comm-hexchat-63aecd5e9f8e1856348593.ico', '2022-12-30 12:37:02', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(42, 4, 'Garnier', 'adobex-iconic-illustrator-63aecd6e3eb7e348185953.ico', '2022-12-30 12:37:18', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(43, 4, 'Garnier', 'adobex-iconic-photoshop-63aecd7c38b04820508881.ico', '2022-12-30 12:37:32', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(44, 4, 'Garnier', 'anaconda-browser2-63aecd8937be2624857970.ico', '2022-12-30 12:37:45', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j'),
(45, 4, 'Garnier', 'art-autocad-63aecd99ce7e3975766129.ico', '2022-12-30 12:38:01', '<p>histoire</p>', '<p>reponse</p>', '<p>enjeu</p>', '<p>element</p>', '<p>temoignage</p>', '2022-12-03', '2022-12-28', 'Mission principale', '400j');

-- --------------------------------------------------------

--
-- Structure de la table `client_categorie`
--

CREATE TABLE `client_categorie` (
  `client_id` int(11) NOT NULL,
  `categorie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `client_categorie`
--

INSERT INTO `client_categorie` (`client_id`, `categorie_id`) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 8),
(4, 1),
(5, 2),
(6, 3),
(7, 8),
(8, 1),
(9, 2),
(10, 3),
(11, 8),
(12, 1),
(13, 2),
(14, 3),
(15, 8),
(16, 1),
(17, 2),
(18, 3),
(19, 8),
(20, 1),
(21, 2),
(22, 3),
(23, 1),
(23, 8),
(24, 2),
(25, 3),
(26, 8),
(27, 1),
(28, 2),
(29, 3),
(30, 8),
(31, 3),
(32, 1),
(33, 8),
(34, 2),
(35, 3),
(36, 8),
(37, 1),
(38, 3),
(39, 8),
(40, 2),
(41, 8),
(42, 1),
(43, 3),
(44, 8),
(45, 2);

-- --------------------------------------------------------

--
-- Structure de la table `client_image`
--

CREATE TABLE `client_image` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` datetime NOT NULL,
  `header` tinyint(1) NOT NULL DEFAULT 0,
  `secondaire` tinyint(1) NOT NULL DEFAULT 0,
  `imageprecision` tinyint(1) NOT NULL DEFAULT 0,
  `visible` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `custom_web_site_img`
--

CREATE TABLE `custom_web_site_img` (
  `id` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `custom_web_site_text`
--

CREATE TABLE `custom_web_site_text` (
  `id` int(11) NOT NULL,
  `texte` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20221207205507', '2022-12-07 21:55:27', 12800);

-- --------------------------------------------------------

--
-- Structure de la table `emails`
--

CREATE TABLE `emails` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `new` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `footer`
--

CREATE TABLE `footer` (
  `id` int(11) NOT NULL,
  `adresse` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `secteur_id` int(11) NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `projet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mission` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `demande` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `defi` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `action` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `focus` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `temoignage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `debut` date DEFAULT NULL,
  `fin` date DEFAULT NULL,
  `duree` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id`, `client_id`, `secteur_id`, `logo`, `projet`, `description`, `mission`, `demande`, `defi`, `action`, `focus`, `temoignage`, `updated_at`, `debut`, `fin`, `duree`) VALUES
(1, 1, 3, 'png-clipart-girl-anime-character-illustration-miss-kobayashi-s-dragon-maid-youtube-kamuy-minecraft-youtube-child-manga-639100bd66c88380334710.png', 'projet', '<p>Ceci est la description du projet</p>', 'Mission principale', '<p>demande</p>', '<p>defi</p>', '<p>action</p>', '<p>focus</p>', '<p>temoignage</p>', '2022-12-07 22:08:13', '2022-12-04', '2022-12-15', '500j'),
(2, 1, 3, 'a9a76a3d7c8347f05ad3cf3c8fb08b7a-63910c17a5892884097276.png', 'projet', '<p>Ceci est la description du projet</p>', 'Mission principale', '<p>demande</p>', '<p>defi</p>', '<p>action</p>', '<p>focus</p>', '<p>temoignage</p>', '2022-12-07 22:56:39', '2022-12-03', '2022-12-14', '500j'),
(3, 1, 2, 'telecharge-1-63910c3400b18026037018.png', 'projet', '<p>Ceci est la description du projet</p>', 'Mission principale', '<p>demande</p>', '<p>defi</p>', '<p>action</p>', '<p>focus</p>', '<p>temoignage</p>', '2022-12-07 22:57:08', '2022-12-03', '2022-12-14', '500j');

-- --------------------------------------------------------

--
-- Structure de la table `projet_categorie`
--

CREATE TABLE `projet_categorie` (
  `projet_id` int(11) NOT NULL,
  `categorie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `projet_categorie`
--

INSERT INTO `projet_categorie` (`projet_id`, `categorie_id`) VALUES
(1, 4),
(2, 5),
(3, 5);

-- --------------------------------------------------------

--
-- Structure de la table `projet_image`
--

CREATE TABLE `projet_image` (
  `id` int(11) NOT NULL,
  `projet_id` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` datetime NOT NULL,
  `header` tinyint(1) NOT NULL DEFAULT 0,
  `secondaire` tinyint(1) NOT NULL DEFAULT 0,
  `focus` tinyint(1) NOT NULL DEFAULT 0,
  `visible` tinyint(1) NOT NULL DEFAULT 1,
  `creation` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `projet_image`
--

INSERT INTO `projet_image` (`id`, `projet_id`, `image`, `updated_at`, `header`, `secondaire`, `focus`, `visible`, `creation`) VALUES
(1, 1, '2896636094-preview-real-no-spoil-censor2-639105a460d46279286196.jpg', '2022-12-07 22:29:08', 0, 0, 0, 1, 0),
(2, 1, 'stephen-walker-unsplash-639106765a691109389985.jpg', '2022-12-07 22:32:38', 0, 0, 0, 1, 0),
(3, 1, 'test-639106777fbf0732201173.jpg', '2022-12-07 22:32:39', 0, 0, 0, 1, 0),
(4, 1, 'pexels-photo-2387793-63910679bd666725376226.jpeg', '2022-12-07 22:32:41', 0, 0, 0, 1, 0),
(5, 1, 'pexels-photo-12568038-6391067a813e0782747371.webp', '2022-12-07 22:32:42', 0, 0, 0, 1, 0),
(6, 1, 'pexels-photo-11943277-6391067b8ee0d182635528.webp', '2022-12-07 22:32:43', 0, 0, 0, 1, 1),
(7, 1, 'pexels-photo-12666299-6391067ca16c0155368201.jpeg', '2022-12-07 22:32:44', 0, 0, 0, 1, 0),
(8, 1, 'pexels-photo-12632089-6391067d7ee29493260782.jpeg', '2022-12-07 22:32:45', 1, 0, 0, 1, 0),
(9, 1, 'pexels-photo-12488388-6391067e2c8af305819766.jpeg', '2022-12-07 22:32:46', 0, 0, 0, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `secteur`
--

CREATE TABLE `secteur` (
  `id` int(11) NOT NULL,
  `secteur` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `secteur`
--

INSERT INTO `secteur` (`id`, `secteur`) VALUES
(1, 'Voiture'),
(2, 'moto'),
(3, 'video'),
(4, 'location'),
(5, 'truc');

-- --------------------------------------------------------

--
-- Structure de la table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`) VALUES
(1, 'admin', '[\"ROLE_ADMIN\"]', '$2y$13$37sWf0zld07laWxUKNe0eOvrmcsKPuxNXOG9S7hflo/RT3UiDJQWa');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `chiffres`
--
ALTER TABLE `chiffres`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C74404559F7E4405` (`secteur_id`);

--
-- Index pour la table `client_categorie`
--
ALTER TABLE `client_categorie`
  ADD PRIMARY KEY (`client_id`,`categorie_id`),
  ADD KEY `IDX_A25D063B19EB6921` (`client_id`),
  ADD KEY `IDX_A25D063BBCF5E72D` (`categorie_id`);

--
-- Index pour la table `client_image`
--
ALTER TABLE `client_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_665098E819EB6921` (`client_id`);

--
-- Index pour la table `custom_web_site_img`
--
ALTER TABLE `custom_web_site_img`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `custom_web_site_text`
--
ALTER TABLE `custom_web_site_text`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `emails`
--
ALTER TABLE `emails`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_50159CA919EB6921` (`client_id`),
  ADD KEY `IDX_50159CA99F7E4405` (`secteur_id`);

--
-- Index pour la table `projet_categorie`
--
ALTER TABLE `projet_categorie`
  ADD PRIMARY KEY (`projet_id`,`categorie_id`),
  ADD KEY `IDX_6A8331E0C18272` (`projet_id`),
  ADD KEY `IDX_6A8331E0BCF5E72D` (`categorie_id`);

--
-- Index pour la table `projet_image`
--
ALTER TABLE `projet_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6E9BEBE9C18272` (`projet_id`);

--
-- Index pour la table `secteur`
--
ALTER TABLE `secteur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `chiffres`
--
ALTER TABLE `chiffres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT pour la table `client_image`
--
ALTER TABLE `client_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `custom_web_site_img`
--
ALTER TABLE `custom_web_site_img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `custom_web_site_text`
--
ALTER TABLE `custom_web_site_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `emails`
--
ALTER TABLE `emails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `footer`
--
ALTER TABLE `footer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `projet_image`
--
ALTER TABLE `projet_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `secteur`
--
ALTER TABLE `secteur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `FK_C74404559F7E4405` FOREIGN KEY (`secteur_id`) REFERENCES `secteur` (`id`);

--
-- Contraintes pour la table `client_categorie`
--
ALTER TABLE `client_categorie`
  ADD CONSTRAINT `FK_A25D063B19EB6921` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_A25D063BBCF5E72D` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `client_image`
--
ALTER TABLE `client_image`
  ADD CONSTRAINT `FK_665098E819EB6921` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`);

--
-- Contraintes pour la table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `FK_50159CA919EB6921` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `FK_50159CA99F7E4405` FOREIGN KEY (`secteur_id`) REFERENCES `secteur` (`id`);

--
-- Contraintes pour la table `projet_categorie`
--
ALTER TABLE `projet_categorie`
  ADD CONSTRAINT `FK_6A8331E0BCF5E72D` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_6A8331E0C18272` FOREIGN KEY (`projet_id`) REFERENCES `projet` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `projet_image`
--
ALTER TABLE `projet_image`
  ADD CONSTRAINT `FK_6E9BEBE9C18272` FOREIGN KEY (`projet_id`) REFERENCES `projet` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
