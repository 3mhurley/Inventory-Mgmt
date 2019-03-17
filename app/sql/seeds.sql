INSERT INTO estore.departments(dep_name,over_head_costs)
VALUES ('clothing',50000.00),
       ('electronics',20000.00),
       ('food',100000.00),
       ('health',10000.00),
       ('home',5000.00);

INSERT INTO estore.products (prod_name,dep_name,price,quantity)
VALUES ('generic_computer','electronics',800.00,1),
       ('generic_tshirt','clothing',20.00,250),
       ('generic_boxmeal','food',15.00,10),
       ('generic_soap','health',5.00,45),
       ('generic_lamp','home',35,1),
       ('generic_laptop','electronics',1000.00,3),
       ('generic_fruit','food',10.00,3),
       ('generic_toothbrush','health',5.00,75),
       ('generic_pants','clothing',35.00,30),
       ('generic_shoe','clothing',55.00,10);

INSERT INTO estore.employee(emp_name,emp_role)
VALUES ('Bob','CEO'),
       ('Dave','Manager'),
       ('Steve','Associate');