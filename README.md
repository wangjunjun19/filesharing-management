#TTMS

###运行程序
npm install<br/>
npm run webpack<br/>
npm start

数据库创建

CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(16) CHARACTER SET latin1 NOT NULL,
  `user_pass` varchar(16) CHARACTER SET latin1 NOT NULL,
  `user_sex` varchar(8) DEFAULT NULL,
  `user_age` varchar(3) DEFAULT NULL,
  `user_tel` varchar(11) DEFAULT NULL,
  `user_type` int(1) NOT NULL,
  `user_school` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100036 DEFAULT CHARSET=utf8


CREATE TABLE `dfr` (
  `rfd_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `file_type` int(1) NOT NULL,
  `dfr_time` datetime NOT NULL,
  PRIMARY KEY (`rfd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci


CREATE TABLE `files` (
  `file_id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(50) NOT NULL,
  `file_type` int(1) NOT NULL,
  `user_id` int(11) NOT NULL,
  `file_grade` varchar(150) DEFAULT NULL,
  `file_route` varchar(150) NOT NULL,
  `file_count` int(11) NOT NULL,
  `file_label` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`file_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8

CREATE TABLE `label` (
  `label_id` int(11) NOT NULL AUTO_INCREMENT,
  `label_name` varchar(150) DEFAULT NULL,
  `label_count` int(11) NOT NULL,
  PRIMARY KEY (`label_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8