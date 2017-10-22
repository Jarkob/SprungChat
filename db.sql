CREATE DATABASE sprungchat;
USE sprungchat;

CREATE TABLE users(
	userid VARCHAR(20) NOT NULL PRIMARY KEY,
    pass CHAR(20) NOT NULL,
    salt CHAR(20) NOT NULL
);

CREATE TABLE messages(
	id INT AUTO_INCREMENT PRIMARY KEY,
    messages_userid VARCHAR(20) NOT NULL,
    content VARCHAR(140) NOT NULL,
    FOREIGN KEY (messages_userid) REFERENCES users(userid)
);

CREATE TABLE login_attempts(
	login_attempts_userid VARCHAR(20) NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(login_attempts_userid),
    FOREIGN KEY(login_attempts_userid) REFERENCES users(userid)
);

CREATE TABLE access_log(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	ip VARCHAR(45),
	browser VARCHAR(145),
	referer VARCHAR(100),
	query VARCHAR(45)
);