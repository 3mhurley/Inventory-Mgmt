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
    proct_sales DECIMAL(12,2) DEFAULT 0.00
);

CREATE TABLE estore.employees(
    emp_id INT NOT NULL AUTO_INCREMENT,
    emp_name VARCHAR(100) NOT NULL,
    emp_role VARCHAR(100) NOT NULL
);


-- Queries

-- Available products
SELECT
    p.item_id
   ,p.proct_name
   ,p.price
FROM
    estore.products p
WHERE
    p.quantity > 0;

-- Product quantity lookup
SELECT
    p.quantity
FROM
    estore.products price
WHERE
    p.item_id = 1;

-- All products
SELECT
    p.item_id
   ,p.proct_name
   ,p.price
   ,p.quantity
FROM
    estore.products p;

-- Low inventory
SELECT
    p.item_id
   ,p.proct_name
   ,p.price
FROM
    estore.products p
WHERE
    p.quantity <= 5;

-- View products by department
SELECT
    d.dep_id
   ,d.dep_name
   ,p.proct_sales
   ,(d.over_head_costs - p.proct_sales) total_profit
FROM
    estore.departments d
INNER JOIN
    estore.products p ON d.dep_name = p.dep_name
GROUP BY
    d.dep_id