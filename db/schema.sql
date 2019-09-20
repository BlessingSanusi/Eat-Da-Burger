DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "schools" 
CREATE TABLE burgers
(
  id int
  AUTO_INCREMENT,
  burger_name varchar
  (255) NOT NULL,
   devoured BOOLEAN NOT NULL,
	PRIMARY KEY
  (id)
);

