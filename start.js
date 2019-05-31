// http://www.mysqltutorial.org/mysql-nodejs/create-table/
console.log("Loading...");

var inquirer = require("inquirer");
var password = require("../password");

var login = require("./assets/js/login/login")

global.spacer = function() {
    console.log("\n\n----------------------------------------\n\n");
}

login();