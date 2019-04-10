// Node Packages
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
import { connection, sql } from 'main.js';

// Connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    startApp();
});

// Start Function
function startApp() {

    inquirer
    .prompt({
        name: "welcome",
        type: "list",
        message: "What would you like to do?",
        choices: ["VIEW", "PURCHASE", "EXIT"]
    })
    .then(function(answer) {
        // based on their answer, either call the bid or the post functions
         if (answer.welcome === "VIEW") {
            
        }
        else if(answer.welcome === "PURCHASE") {
            
        } else{
            connection.end();
        }
    });
}

// End Function
function endApp() {
    connection.end();
}