
function init() {
// Put your required packages here:
const inquirer = require ('inquirer');
const fs = require("fs");
const path = require("path");
const filePath = path.join(fileDirectory, "index.html");


// Modules & path
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const genHTML = require("./lib/generateHTML")



inquirer
// questions prompt
    .prompt([
 // type: "list"
        // name: ""
        // message: ""
        // choices: [array of choices] *if needed*

       {
        type: "input",
        name: "name",
        message: ""
       },
       {
        type: "input",
        name: "email",
        message: ""
       },
       {
        type: "input",
        name: "role",
        message: ""
       }, 
       {
        type: "input",
        name: "",
        message: ""
       },
       {
        type: "list",
        name: "",
        message: ""
       },





    ])
}