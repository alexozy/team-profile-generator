
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

const questions = [
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

    
// now let's make our function and .prompt the questions:
 // we have 3 roles of employees please make questions for each role:
 // I want to try the function init () approach similar to last challenge, i believe it will work here
 // example: type: "list"
        // name: ""
        // message: ""
        // choices: [array of choices] *if needed*

//  Intern Goes here : inQuest

//         inQuest = []
// // Manager goes here: manQuest
//         manQuest = []
// // Engineer goes here: engQuest
//         engQuest = []




//     function init () {
//         inquirer
//         .prompt ([
//             {
//                 type: "input",
//                 name: "name",
//                 message: "Please provide the employee name:"
//                },
//                {
//                 type: "input",
//                 name: "email",
//                 message: "Please provide the employee email:"
//                },
//                {
//                    type: "input",
//                    name: "id",
//                    message: "Please provide the employee's unique ID:"
//                 },
//                 {
//                  type: "list",
//                  name: "role",
//                  message: "Please define the employee's role:",
//                  choices: ["Intern", "Manager", "Engineer"],
//                 }, 

//         ])
// // your write to HTML will go here
//         .then(() => {});

//     }
//     init ();