-- MySQL dump 10.13  Distrib 5.7.14, for Win64 (x86_64)
--
-- Host: localhost    Database: convo_cafe
-- ------------------------------------------------------
-- Server version	5.7.14-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `age`
--

DROP TABLE IF EXISTS `age`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `age` (
  `age_id` int(11) NOT NULL AUTO_INCREMENT,
  `age_range` varchar(45) NOT NULL,
  PRIMARY KEY (`age_id`),
  UNIQUE KEY `age_id_UNIQUE` (`age_id`),
  UNIQUE KEY `age_range_UNIQUE` (`age_range`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `age`
--

LOCK TABLES `age` WRITE;
/*!40000 ALTER TABLE `age` DISABLE KEYS */;
INSERT INTO `age` VALUES (1,'18-22'),(2,'23-30'),(3,'31-40'),(4,'41-50'),(5,'51-65'),(6,'65+');
/*!40000 ALTER TABLE `age` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `first_language`
--

DROP TABLE IF EXISTS `first_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `first_language` (
  `language_id` int(11) NOT NULL AUTO_INCREMENT,
  `language` varchar(45) NOT NULL,
  PRIMARY KEY (`language_id`),
  UNIQUE KEY `language_id_UNIQUE` (`language_id`),
  UNIQUE KEY `language_UNIQUE` (`language`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `first_language`
--

LOCK TABLES `first_language` WRITE;
/*!40000 ALTER TABLE `first_language` DISABLE KEYS */;
INSERT INTO `first_language` VALUES (1,'English'),(3,'French'),(5,'German'),(4,'Italian'),(6,'Japanese'),(2,'Spanish');
/*!40000 ALTER TABLE `first_language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learning_language`
--

DROP TABLE IF EXISTS `learning_language`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `learning_language` (
  `language_id` int(11) NOT NULL AUTO_INCREMENT,
  `language` varchar(45) NOT NULL,
  PRIMARY KEY (`language_id`),
  UNIQUE KEY `language_id_UNIQUE` (`language_id`),
  UNIQUE KEY `language_UNIQUE` (`language`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learning_language`
--

LOCK TABLES `learning_language` WRITE;
/*!40000 ALTER TABLE `learning_language` DISABLE KEYS */;
INSERT INTO `learning_language` VALUES (1,'English'),(3,'French'),(5,'German'),(4,'Italian'),(6,'Japanese'),(2,'Spanish');
/*!40000 ALTER TABLE `learning_language` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurant` (
  `restaurant_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `street_address` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zip` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `lat` varchar(45) DEFAULT NULL,
  `lng` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `bio` varchar(300) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`restaurant_id`),
  UNIQUE KEY `restaraunt_id_UNIQUE` (`restaurant_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `city_id_idx` (`city`),
  KEY `language_id_idx` (`language_id`),
  CONSTRAINT `language_id` FOREIGN KEY (`language_id`) REFERENCES `first_language` (`language_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'Marie Louise Bistro','904 N Charles St','Baltimore','MD',21201,3,'info@marielouisebistrocatering.com','IronYard','39.2998553','-76.6181227','(410) 385-9946','Elegant bistro features refined French-Mediterranean cuisine & cocktails in an open, airy interior.','2'),(2,'The French Kitchen','20 W Baltimore St','Baltimore','MD',21201,3,'info@lordbaltimorehotel.com','IronYard','39.289784','-76.6183036','(410) 539-8400','Grand locale in the Lord Baltimore Hotel for market-driven French bistro dishes & housebaked goods. ','15'),(3,'Louisiana Restaurant','1708 Aliceanna St','Baltimore','MD',21231,3,'info@louisianasretaurant.com','IronYard','39.2836451','-76.5949236','(410) 327-2610','Elegant, intimate brick townhouse with marble accents features fine New American-Creole cuisine.','26'),(4,'Azumi Restaurant','725 Aliceanna St','Baltimore','MD',21202,6,'info@azumirestaurant.com','IronYard','39.2826298','-76.6049631','(443) 220-0477','Stylish Japanese restaurant in the Four Seasons Hotel with sushi, seafood, steaks, sake & cocktails.','7'),(5,'Das Bier Haus','1542 Light St','Baltimore','MD',21230,5,'info@dasbierhaus21230.com','IronYard','39.2698029','-76.6164386','(443) 708-8854','Great selection of German beers, fun staff, and generous portions.','9'),(6,'RA Sushi Bar','1390 Lancaster St','Baltimore','MD',21231,6,'info@rasushi.com','IronYard','39.2897817','-76.6248697','(410) 522-3200','Snazzy Japanese fusion chain known for its inventive sushi, cocktails & happy-hour deals at the bar.','20'),(7,'Gordon Biersch','1000 Lancaster St','Baltimore','MD',21202,5,'info@gordonbiersch.com','IronYard','39.2897804','-76.6248697','(410) 230-9501','Chain hangout for house-brewed, German-style beer & a pub menu served in a casual setting.','10'),(8,'Matsuri Restaurant','1105 S Charles St','Baltimore','MD',21230,6,'info@matsuri.us','IronYard','39.2871425','-76.6182387','(410) 752-8561','Boisterous, bi-level sushi house offers diverse Japanese eats, sidewalk seating & happy-hour deals.','23'),(9,'Tortilleria Sinaloa','1716 Eastern Ave','Baltimore','MD',21231,2,'info@tortilleria-sinaloa.com','IronYard','39.2857605','-76.5946626','(410) 276-3741','Counter-serve Mexican outpost featuring tacos made using homemade tortillas, tamales & guacamole. ','8'),(10,'Sotta Sopra','405 N Charles St','Baltimore','MD',21201,4,'info@SottaSopra.com','IronYard','39.2943763','-76.6175366','(410) 625-0534','Farm-to-table contemporary Italian cuisine & wines are served in an art-filled, elegant townhouse. ','5'),(11,'Aggio','614 Water St','Baltimore','MD',21202,4,'info@Aggio.com','IronYard','39.2887866','-76.6096618','(410) 528-0200','Chef Bryan Voltaggio\'s chic, minimalist restaurant featuring creative pasta & modern Italian dishes.','13'),(12,'Bavarian Brauhaus','7304 Pkwy Dr S','Baltimore','MD',21076,5,'info@thebavarianbrauhaus.com','IronYard','39.1720959','-76.7448372','(410) 712-0300','Laid-back hangout offering German cuisine & brews, plus karaoke, music & other events in comfy digs.','14'),(15,'La Tavola','248 Albemarle St','Baltimore','MD',21202,4,'info@LaTavola.com','IronYard','39.2861536','-76.6046623','(410) 685-1959','Contemporary Italian cuisine with daily specials is on offer at this roomy, atmospheric haunt.','24'),(16,'B&O American Brasserie','2 N Charles St','Baltimore','MD',21201,1,'info@bandorestaurant.com','IronYard','39.289828','-76.6175767','(443) 692-6172','Chic option in the Hotel Monaco featuring innovative, seasonal small plates & New American meals.','1'),(17,'Ten Ten American Bistro','1010 Fleet St','Baltimore','MD',21202,1,'info@bagbys1010.com','IronYard','39.2845636','-76.6019688','(410) 244-6867','Upmarket restaurant offering farm-to-table New American fare & wines in a historic building.','6'),(18,'Regi\'s','1002 Light St','Baltimore','MD',21230,1,'info@regisamericanbistro.com','IronYard','39.278843','-76.6289405','(410) 539-7344','Cozy landmark crafting New American bistro-style fare & cocktails in a 19th-century row house.','18'),(19,'Blue Agave Restaurant','1032 Light St','Baltimore','MD',21230,2,'info@blueagaverestaurant.com','IronYard','39.2788288','-76.6289405','(410) 576-3938','Festive Mexican eatery & tequila bar (more than 130 labels) with classic ceramic-tiled tabletops.','19'),(20,'Tio Pepe','10 E. Franklin St','Baltimore','MD',21202,2,'info@tiopepebaltimore.com','IronYard','39.2953072','-76.6171094','(410) 539-4675','Special-occasion landmark serving Spanish-Continental fare & sangria in cozy, underground environs. ','17');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill_level`
--

DROP TABLE IF EXISTS `skill_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skill_level` (
  `skill_level_id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_level` varchar(45) NOT NULL,
  PRIMARY KEY (`skill_level_id`),
  UNIQUE KEY `skill_level_id_UNIQUE` (`skill_level_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_level`
--

LOCK TABLES `skill_level` WRITE;
/*!40000 ALTER TABLE `skill_level` DISABLE KEYS */;
INSERT INTO `skill_level` VALUES (1,'Beginner'),(2,'Intermediate'),(3,'Advanced');
/*!40000 ALTER TABLE `skill_level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `age_range_id` int(1) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `street_address` varchar(45) DEFAULT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zip` int(11) NOT NULL,
  `about_me` varchar(300) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `first_language_id` int(11) NOT NULL,
  `learning_language_id` int(11) NOT NULL,
  `skill_level_id` int(11) NOT NULL,
  `avitar` varchar(45) DEFAULT NULL,
  `lat` varchar(45) DEFAULT NULL,
  `lng` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `age_id_idx` (`age_range_id`),
  KEY `city_id_idx` (`city`),
  KEY `first_language_id_idx` (`first_language_id`),
  KEY `learning_language_id_idx` (`learning_language_id`),
  KEY `skill_level_id_idx` (`skill_level_id`),
  CONSTRAINT `age_id` FOREIGN KEY (`age_range_id`) REFERENCES `age` (`age_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `first_language_id` FOREIGN KEY (`first_language_id`) REFERENCES `first_language` (`language_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `learning_language_id` FOREIGN KEY (`learning_language_id`) REFERENCES `first_language` (`language_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `skill_level_id` FOREIGN KEY (`skill_level_id`) REFERENCES `skill_level` (`skill_level_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Lawson Stevens',1,'Male','7808 Grandison Way','Severn','MD',21122,'Home brewing On The Road Catcher in the Rye adventures. You should message me foreign films really hoppy beers I\'m a big fan of I hate lists, as friends Catcher in the Rye open-minded trying this for the first time just looking to have some fun. I enjoy I\'m really good at thinking about trying yoga ','lawson.stevens@aplfcu.org','IronYard',1,6,1,'duck','39.133511','-76.679001'),(2,'Megan Stevens',5,'Female','7808 Grandison Way','Severn','MD',21122,'My dogs rock climbing road trips video games. Woody Allen vinyl records introvert Game of Thrones my beard, loyal everything but country music running shoes bacon glass half-full. The Daily Show my cats Catcher in the Rye I love the smell of hiking bikes. Snowboarding my height and shoulders food','mudjewelery@cablespeed.com','IronYard',1,6,1,'turtle','39.133511','-76.679001'),(3,'Christianna Brown',2,'Female','8643 Cobscook Harbour','Pasadena','MD',21122,'I\'m the last of a dying breed there\'s no such thing as a typical Friday night I am currently addicted to on my fetish list. I may be somewhat jaded a fairly successful career in sports if you like crying in my bathtub ask your mother, I\'m too lazy to keep typing I don\'t really keep a budget making p','christianna.g.ondrish@gmail.com','IronYard',1,6,2,'shark','39.149459','-76.527522'),(4,'Heather Smith',1,'Female','8745 East Baltimore Street','Baltimore','MD',21224,'I\'m the last of a dying breed there\'s no such thing as a typical Friday night I am currently addicted to on my fetish list. I may be somewhat jaded a fairly successful career in sports if you like crying in my bathtub ask your mother, I\'m too lazy to keep typing I don\'t really keep a budget making p','heather@yahoo.com','IronYard',1,6,3,'pony','39.2999333','-76.5145585'),(5,'Braedon Johnson',4,'Male','8472 Severn Orchard Circle','Severn','MD',21144,'I\'m the last of a dying breed there\'s no such thing as a typical Friday night I am currently addicted to on my fetish list. I may be somewhat jaded a fairly successful career in sports if you like crying in my bathtub ask your mother, I\'m too lazy to keep typing I don\'t really keep a budget making p','bob.stevens@aplfcu.org','IronYard',2,6,1,'fish','39.118895','-76.7103593'),(6,'Kylee Stevens',2,'Female','9057 4th St','Baltimore','MD',21203,'I don\'t really read much these days well-built please post your real pictures no robots posing as real people. Nubile size 2 my wife when I picked this username I didn\'t realize I couldn\'t change it finishing my novel, my deep, manly voice The Game on my fetish list you should be clean and intellige','kylee@gmail.com','IronYard',1,2,1,'whale','39.2216288','-76.6024387'),(7,'Issah Thompson',4,'Male','9032 8th St','Baltimore','MD',21203,'I don\'t really read much these days well-built please post your real pictures no robots posing as real people. Nubile size 2 my wife when I picked this username I didn\'t realize I couldn\'t change it finishing my novel, my deep, manly voice The Game on my fetish list you should be clean and intellige','issah@yahoo.com','IronYard',1,2,1,'cat','39.2327807','-76.6009835'),(8,'Chelby Miller',2,'Female','9024 Mt Ridge Dr','Glen Burnie','MD',21061,'I don\'t really read much these days well-built please post your real pictures no robots posing as real people. Nubile size 2 my wife when I picked this username I didn\'t realize I couldn\'t change it finishing my novel, my deep, manly voice The Game on my fetish list you should be clean and intellige','chelby@yahoo.com','IronYard',1,2,2,'dog','39.1402544','-76.6311173'),(9,'Dulce Estrea',1,'Female','5732 Gov Richie Hwy','Baltimore','MD',21225,'I don\'t really read much these days well-built please post your real pictures no robots posing as real people. Nubile size 2 my wife when I picked this username I didn\'t realize I couldn\'t change it finishing my novel, my deep, manly voice The Game on my fetish list you should be clean and intellige','Star@yahoo.com','IronYard',1,2,1,'bird','39.2171975','-76.6143889'),(10,'Estuardo Ingelsias',3,'Male','84024 Fed St.','Baltimore','MD',21234,'I don\'t really read much these days well-built please post your real pictures no robots posing as real people. Nubile size 2 my wife when I picked this username I didn\'t realize I couldn\'t change it finishing my novel, my deep, manly voice The Game on my fetish list you should be clean and intellige','es@yahoo.com','IronYard',6,2,1,'bunny','39.309121','-76.5786437'),(11,'Frank Welling',4,'Male','300 South Spring St','Baltimore','MD',21231,'Hey everyone! I\'m new to the city, but I\'ve been learning Italian on and off since high school. I love my new city and would love to meet someone, or even a couple of people, that share this love of such a beautiful language. We can find a cool place to go to in Little Italy and have fun.','frank@welling.com','IronYard',1,4,2,'bird','39.2864226','-76.5975931'),(12,'Sarah Carter',1,'Female','1733 Gough St','Baltimore','MD',21231,'To my fellow Baltimorians who are looking to speak a little Italian--look no further. I absolutely love the language and want to meet up and share that interest. Message me. We can get together and get some great food and speak a great language. I\'m free most nights and weekends. I cannot wait!','sarah@carter.com','IronYard',1,4,1,'cat','39.287517','-76.5919459'),(13,'Mark Smith',2,'Male','1519 East Fayette St','Baltimore','MD',21231,'Buongiorno mi amici! Anyone else want to get together at a fabulous, local Italian restaurant and talk a little Italian. I am always happy to meet some new people...especially if they are fellow Italy-files like myself. I\'ve used this great app to find some interesting newspots that I want to try.','mark@smith.com','IronYard',1,4,2,'duck','39.2932654','-76.596273'),(14,'Becky Winters',3,'Female','202 East Read St','Baltimore','MD',21202,'Anyone looking to speak a little Italian in Charm City? I\'m available nights and weekends (and even some lunch times) for meeting at a local Italian restaurant and helping each other out to learn some Italian. I\'ve been learning Italian for quite a few years now, and cant wait to keep going.','becky@winters.com','IronYard',1,4,2,'shark','39.2999504','-76.6125246'),(15,'Sam Teller',2,'Male','609 South Ellwood Ave','Baltimore','MD',21224,'Do I like French? Oui oui. With so many great French restaurants around, what better way to improve our language skills. I have been learning French for some time now, but I am always trying to get better at the language. And meet some of my great neighbors in the process. ','sam@teller.com','IronYard',1,3,2,'pony','39.2851262','-76.572691'),(16,'Mary Adams',5,'Female','426 Drew St','Baltimore','MD',21224,' Bonjour tous, allons-nous rencontrer ou non. J\'aime rencontrer de nouvelles personnes et de parler français! There are so many great French restaurants around. I want to try them all while meeting people in the area. Je ne peux pas attendre de rencontrer mes nouveaux amis!','mary@adams.com','IronYard',1,3,2,'bunny','39.2883358','-76.5440778'),(17,'Ken Farthing',2,'Male','408 N Haven St','Baltimore','MD',21224,'Since my trip to Paris in my teens, I have been passionate about learning French. I\'ve made some great strides in practicing alone, but it takes two to tango as they say. What a great idea for a site. I\'m excited to make some new friends and to improve my French...and eat some delicious food as well','ken@farthing.com','IronYard',1,3,2,'whale','39.29664','-76.5632343'),(18,'Kelly Birch',5,'Female','3629 Pulaski Highway','Baltimore','MD',21224,'Qui aime francais? Aimez-vous autant que je fais? Laissez-nous savoir? It doesn\'t matter who loves it more...as long as we both love speaking French, I think we will get along just fine. We can grab some croissants and some good wine and talk in French until the cow comes home. Au Revoir!','kelly@birch.com','IronYard',1,3,2,'dog','39.296161','-76.566914'),(20,'Martin Kerrigan',3,'Male','1328 Pleasant Valley Dr','Catonsville','MD',21228,'Took some German courses in high school and college and I\'m looking to pick it back in order to help with work.  I enjoy running and working on my new home.Lorem ipsum dolor sit amet, legimus dignissim neglegentur et qui. In sea scripserit scribentur, falli utroque sapientem cu eos. Ne his sale argu','martyparty@gmail.com','IronYard',1,5,2,'pony','39.294938','-76.755314'),(21,'Ruth Talentino',4,'Female','8633 Bali Rd.','Ellicott City','MD',21043,'Interested in learning some basic German phrases in order to bond with my Grandfather.  I\'m a teacher with a wonderful husband and three kids.  I love to read and enjoy a nice cup of tea.Lorem ipsum dolor sit amet, legimus dignissim neglegentur et qui. In sea scripserit scribentur, falli utroque sap','blondie00@gmail.com','IronYard',1,5,1,'cat','39.2556269','-76.811024'),(22,'Shane Clemmer',3,'Male','18005 Overwood Dr.','Olney','MD',20832,'I\'m a teacher who is newly married.  I\'m interested in learning some German because my wife and I will be spending our honeymoon there and I would love to be able to get around with ease.Lorem ipsum dolor sit amet, legimus dignissim neglegentur et qui. In sea scripserit scribentur, falli utroque sad','sclemmer@gmail.com','IronYard',1,5,1,'whale','39.151781','-77.091483'),(23,'Yeni Perez',2,'Female','9768 Early Spring Way','Columbia','MD',21046,'Working as an immersion Spanish teacher in the area, but I would love to brush up on my English for conferences.Lorem ipsum dolor sit amet, legimus dignissim neglegentur et qui. In sea scripserit scribentur, falli utroque sapientem cu eos. Ne his sale argumentum, sed lorem etiam maluisset cu, in eos','YeniPerez@gmail.com','IronYard',2,1,2,'bunny','39.161468','-76.84469'),(24,'Nicole Durant',1,'Female','6581 Robin Song','Columbia','MD',21045,'Foreign exchange student looking for extra practice In English. Lorem ipsum dolor sit amet, legimus dignissim neglegentur et qui. In sea scripserit scribentur, falli utroque sapientem cu eos. Ne his sale argumentum, sed lorem etiam maluisset cu, in eos labitur accusata. Cu eos suscipitdjisadja djawo','NicoleD@gmail.com','IronYard',3,1,1,'bird','39.190778','-76.829941'),(25,'Antonio Moretti',3,'Male','338 S Poppleton St','Baltimore','MD',21224,'New to the country and looking to make professional connections.  Lorem ipsum dolor sit amet, legimus dignissim neglegentur et qui. In sea scripserit scribentur, falli utroque sapientem cu eos. Ne his sale argumentum, sed lorem etiam maluisset cu, in eos labitur accusata. Cu eos suscipitLorem ipsum ','AntonioM@gmail.com','IronYard',4,1,1,'duck','39.2837628','-76.6320584'),(26,'Dieter Schulz',5,'Male','3057 Stafford St','Baltimore','MD',21224,'New to the area and looking to practice my English.Lorem ipsum dolor sit amet, legimus dignissim neglegentur et qui. In sea scripserit scribentur, falli utroque sapientem cu eos. Ne his sale argumentum, sed lorem etiam maluisset cu, in eos labitur accusata. Cu eos susciLorem ipsum dolor sit amet, le','DS123@gmail.com','IronYard',5,1,1,'turtle','39.2791086','-76.6679848'),(27,'Kata Akimoto',2,'Female','501 Blick Dr.','Silver Spring','MD',20904,'Visiting from Japan and I would love to learn some English while I\'m here.第南へづしる子76違ろぴげ著豊ほわや両今はドよ伝面をぱこえ計鯵ぼげび質70収ヱ走気胞ルト本減例兵城よ。力ネ期贈以署ナケタ念若セハコ資告ツ育図ロクエミ力12京キ','ka123@gmail.com','IronYard',6,1,1,'shark','39.059998','-77.00238'),(94,'Bill Kratz',2,'Male','381 St. Paul St','Baltimore','MD',21202,'I am looking to learn Spanish to be able to better communicate with locals when traveling. I have some experience working for a company that primarily employs workers from a Hispanic origin. I\'m available week nights and weekends to meet up and practice Spanish.','wkratz3@gmail.com','IronYard',1,2,1,'shark','39.2945719','-76.61363019999999'),(95,'GIF of Favre',6,'Male','123 Test St','Baltimore','Maryland',21225,'I like to talk you with words in languages of my choosing.  You have no choice.','favre@slack.net','favreishere',6,1,3,'bluebird','39.1794548','-76.58483590000003');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-01 16:12:32
