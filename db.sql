CREATE DATABASE sprungchat;
USE sprungchat;
CREATE TABLE messages(
	id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    content VARCHAR(140) NOT NULL
);