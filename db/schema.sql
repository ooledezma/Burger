### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT,
	burger_name varchar(255),
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

SELECT * FROM burgers