/*
SQLyog Ultimate v8.32 
MySQL - 5.5.30 : Database - tdlz
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`tdlz` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `tdlz`;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `userid` int(5) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户自动编码',
  `username` varchar(50) NOT NULL COMMENT '用户名称',
  `password` varchar(50) NOT NULL COMMENT '密码',
  `enabled` tinyint(1) NOT NULL COMMENT '是否启用',
  `registerdate` date DEFAULT NULL COMMENT '注册日期',
  `truename` varchar(50) DEFAULT NULL COMMENT '用户真实姓名',
  `email` varchar(50) DEFAULT NULL COMMENT '用户邮箱',
  `mobilenum` varchar(20) DEFAULT NULL COMMENT '用户手机号码',
  `phonenum` varchar(20) DEFAULT NULL COMMENT '固定电话号码',
  `description` text COMMENT '用户描述',
  PRIMARY KEY (`username`),
  UNIQUE KEY `userid` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=10004 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`userid`,`username`,`password`,`enabled`,`registerdate`,`truename`,`email`,`mobilenum`,`phonenum`,`description`) values (1,'admin','admin',1,'2015-03-25','张传伟','zcw@mail.bnu.edu.cn','13812345678','010-58807713','sjadlkfkjsad'),(10003,'del','del',1,'2015-03-26','del',NULL,NULL,NULL,NULL),(10002,'oper','oper',1,'2015-03-21','刘方','lf@mail.bnu.edu.cn','15112345678','010-58807713',NULL),(10001,'test','test',0,'2015-03-21','张三','test@123.com','13812345678','010-58807713',NULL),(2,'wucan','wucan',1,'2015-03-25','吴灿','wucan@mail.bnu.edu.cn','18187654321','010-58807713',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
