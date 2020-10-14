## schema

-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS culturalbash;
-- Creates the database --
CREATE DATABASE culturalbash;

USE culturalbash;

CREATE TABLE customers
(
	customer_id int NOT NULL AUTO_INCREMENT,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    email varchar(45) NOT NULL,
    PRIMARY KEY (customer_id)
);

CREATE TABLE vendors
(
	vendor_id int NOT NULL AUTO_INCREMENT,
    business_name varchar(30) NOT NULL,
	category varchar(30) NOT NULL,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    email varchar(45) NOT NULL,
    PRIMARY KEY (vendor_id)
);

CREATE TABLE events
(
	event_id int NOT NULL AUTO_INCREMENT,
    event_name varchar(30) NOT NULL,
	event_date varchar(30) NOT NULL,
    start_time varchar(30) NOT NULL,
    end_time varchar(30) NOT NULL,
    event_type varchar(45) NOT NULL,
    customer_id int NOT NULL,
    PRIMARY KEY (event_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

CREATE TABLE services
(
	service_id int NOT NULL AUTO_INCREMENT,
    service_name varchar(30) NOT NULL,
	category varchar(30) NOT NULL,
    bid_amount varchar(30) NOT NULL,
    vendor_id int NOT NULL,
    event_id int NOT NULL,
    PRIMARY KEY (service_id),
    FOREIGN KEY (vendor_id) REFERENCES vendors(vendor_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id)
);

