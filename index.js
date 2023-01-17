
// Put your required packages here:
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const filePath = path.join(fileDirectory, 'index.html');

// Modules & path
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")

// This we will use to generate the HTML from cli:
const genHTML = require("./lib/generateHTML")

// We will need an empty array for the input-ed employees
const teamArray = [];

// now let's make our question array:

const questions = [
 // example: type: "list"
        // name: ""
        // message: ""
        // choices: [array of choices] *if needed*

       {
        type: "input",
        name: "name",
        message: "Please provide the employee name:"
       },
       {
        type: "input",
        name: "email",
        message: "Please provide the employee email:"
       },
       {
           type: "input",
           name: "id",
           message: "Please provide the employee's unique ID:"
        },
        {
         type: "list",
         name: "role",
         message: "Please define the employee's role:",
         choices: ["Intern", "Manager", "Engineer"],
        }, 
    ]

    // we have 3 roles of employees please make questions for each role:
 // example: type: "list"
        // name: ""
        // message: ""
        // choices: [array of choices] *if needed*

//  Intern Goes here : inQuest

        inQuest = []
// Manager goes here: manQuest
        manQuest = []
// Engineer goes here: engQuest
        engQuest = []

