// Node Packages
const mysql = require('mysql');
const inquirer = require('inquirer');
import { un, pw } from 'lib';

// Connection information for the sql database
export const connection = mysql.createConnection({
    host: 'localhost',

    // Port
    port: 3306,

    // Username
    user: un,

    // Password
    password: pw,

    // Database name
    database: 'estore'
});

// Connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    start();
});

export var sql = {
    lookup : {
        prctAll : function() {
            connection.query(
                'SELECT p.item_id,p.proct_name,p.price,p.quantity FROM estore.products p',
                function (err, res, flds) {

            });
        },
        prctAvail : function() {
            connection.query(
                'SELECT p.item_id,p.proct_name,p.price FROM estore.products p WHERE p.quantity > 0',
                function (err, res, flds) {

            });
        },
        prctQnty : function(product) {
            connection.query(
                'SELECT p.quantity FROM estore.products p WHERE ?',
                {
                    'p.item_id': `${product}`
                },
            function (err, res, flds) {
                            
            });
        },
        prctLowQnty : function() {
            connection.query(
                'SELECT p.item_id,p.proct_name,p.price FROM estore.products p WHERE p.quantity <= 5',
                function (err, res, flds) {

            });
        },
        prctByDept : function() {
            connection.query(
                'SELECT d.dep_id,d.dep_name,p.proct_sales,(d.over_head_costs - p.proct_sales) total_profit FROM estore.departments d INNER JOIN estore.products p ON d.dep_name = p.dep_name GROUP BY d.dep_id',
                function (err, res, flds) {

            });
        }
    },
    modify : {
        addProduct : function(pId,pNam,pDep,pPrc,pQua,pPSl) {
            var query = connection.query(
                "INSERT INTO estore.products SET ?",
                {
                    'item_id': `${pId}`,
                    'proct_name': `${pNam}`,
                    'dep_name': `${pDep}`,
                    'price': `${pPrc}`,
                    'quantity': `${pQua}`,
                    'proct_sales': `${pPSl}`
                },
                function(err, res, flds) {

                }
            );
        },
        addQuantity : function(product,quantity) {
            var query = connection.query(
                "UPDATE estore.products SET ? WHERE ?",
                [
                    {
                        'quantity': `${product}`
                    },
                    {
                        'item_id': `${quantity}`
                    }
                ],
                function(err, res, flds) {

                }
            );
        }
    }
};