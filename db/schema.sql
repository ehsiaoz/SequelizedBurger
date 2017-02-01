CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
  id INT(4) NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  orderdate TIMESTAMP,
  PRIMARY KEY (id)
);
