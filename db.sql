CREATE DATABASE sprungchat;
CREATE TABLE messages(
	id INT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    content VARCHAR(140) NOT NULL
);