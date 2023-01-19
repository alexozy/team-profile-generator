
// Put your required packages here:
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const filePath = path.join(fileD, 'index.html');

// Modules & path
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")

// This we will use to generate the HTML from cli:
const genHTML = require("./lib/generateHTML")

// We will need an empty array for the input-ed employees
const teamArray = [];


// we have 3 roles of employees please make questions for each role:
// I want to try the function init () approach similar to last challenge, i believe it will work here
// const questions = [
//     {
//         type: "input",
//         name: "name",
//         message: "Please provide the employee name:"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "Please provide the employee email:"
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "Please provide the employee's unique ID:"
//     },
//     {
//         type: "list",
//         name: "role",
//         message: "Please define the employee's role:",
//         choices: ["Intern", "Manager", "Engineer"],
//     },
// ]

// Create the required prompts for the intern here | requires school input
intQuest = [
    {
        type: "input",
        name: "school",
        message: "Please input the intern's school:",
        // we need something to make this field required:
        validate: school => {
            // insert your if statement here for no input message
            if (school){
                return true;
            } else {
                console.log ("School name is required!")
                return false;
            }
        }
    }
]


// Create the required prompts for the Manager here| requires their officeNumber

mgmtQuest = [
    {
        type: "input",
        name: "officeNumber",
        message: "Insert this manager's office number:",
        // we need something to make this field required:
        validate: officeNumber => {
            // insert your if statement here for no input message
            if (officeNumber){
                return true;
            } else {
                console.log ("An office number is required!")
                return false;
            }
        }
    }
]

// Create the required prompts for the Engineer here | their github is required!
engQuest = [
    {
        type: "input",
        name: "github",
        message: "Please disclose the Engineer's github username:",
        // we need something to make this field required:
        validate: github => {
            // insert your if statement here for no input message
            if (github){
                return true;
            } else {
                console.log ("A github username is required!")
                return false;
            }
        }
    }
]

// Place the function to cycle through prompts here
const managerAdd = () =>{
    return inquirer.prompt([
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
    ])
}

// you should have a function that walks the user through adding a new team member
const employeeAdd = () => {

}

// Don't forget to call your function!
managerAdd();