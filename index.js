
// Put your required packages here:
const inquirer = require ('inquirer');
const fs = require("fs");
const path = require("path");
const filePath = path.join(fileDirectory, "index.html");


// Modules
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const genHTML = require("./lib/generateHTML")



inquirer
    .prompt([

    ])