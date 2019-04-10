// Node Packages
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

var {connection,sqlFunc} = require(__dirname + '\\main.js');

// Connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    startApp();
    endApp();
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
            console.log(sql.lookup.prctAvail());
        }
        else if(answer.welcome === "PURCHASE") {
            console.log(sql.lookup.prctAll());
        } else{
            connection.end();
        }
    });
}

// End Function
function endApp() {
    connection.end();
}