DROP DATABASE IF EXISTS estore;
CREATE DATABASE estore;

CREATE TABLE estore.departments(
    dep_id INT NOT NULL AUTO_INCREMENT,
    dep_name VARCHAR(100) NOT NULL,
    over_head_costs DECIMAL(12,2) DEFAULT 1000.00
);

CREATE TABLE estore.products(
    item_id INT NOT NULL AUTO_INCREMENT,
    proct_name VARCHAR(100) NOT NULL,
    dep_name VARCHAR(100),
    price DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    quantity INT NOT NULL DEFAULT 0,
    product_sales DECIMAL(12,2) DEFAULT 0.00
);

CREATE TABLE estore.employee(
    emp_id INT NOT NULL AUTO_INCREMENT,
    emp_name VARCHAR(100) NOT NULL,
    emp_role VARCHAR(100) NOT NULL
);