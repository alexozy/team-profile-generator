
// Put your required packages here:
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Modules & path
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")

// This we will use to generate the HTML from cli:
const genHTML = require("./lib/generateHTML")

// We will need an empty array for the input-ed employees
const squad = [];

// Place the function to cycle through prompts here
// split the function into one for Manager & New Employees

const createMgmt = () => {
    console.log("Build-A-Squad! Assign Your Squad Manager:")
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Please provide the manager's name:",
        },
        {
            type: "input",
            name: "email",
            message: "Please provide the manager's email:",
        },
        {
            type: "input",
            name: "id",
            message: "Please provide the manager's unique ID:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please insert the Manager's officeNumber:",
            validate: officeNumber => {
                if(officeNumber){
                    return true;
                } else {
                    console.log("An Office Number is Required!")
                };
                return false;
            },
        },
    ])
    .then(managerInfo => {
        const {name, email, id, officeNumber} = managerInfo;
        const manager = new Manager (name, id, email, officeNumber);
        squad.push(manager);
        console.log(manager); 
    })
}
const addNew = () =>{
    console.log ('Now Build Your Squad!')
     //required! example below
        // validate: officeNumber => {
        //     // insert your if statement here for no input message
        //     if (officeNumber){
        //         return true;
        //     } else {console.log ("An office number is required!")
        //         return false;}}
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please select an employee type:",
            choices: ["Intern", "Engineer"],
        },
        {
            type: "input",
            name: "github",
            when: (input)=> input.role === "Engineer",
            message: "Please provide the Engineer's github username:",
            validate: github => {
                if(github){
                    return true;
                } else {
                    console.log("Github is Required!")
                };
                return false;
            },
        },
        {
            type: "input",
            name: "school",
            when: (input)=> input.role === "Intern",
            message: "Please provide the name of the Intern's school:",
            validate: school => {
                if(school){
                    return true;
                } else {
                    console.log("School is Required!")
                };
                return false;
            },
        },
        {
            type: "input",
            name: "name",
            message: "Please provide the employee name:",
        },
        {
            type: "input",
            name: "email",
            message: "Please provide the employee email:",
        },
        {
            type: "input",
            name: "id",
            message: "Please provide the employee's unique ID:",
        },
        {
            type: "confirm",
            name: "addOne",
            message: "Do you have another squad member?",
            default: false
        },
    ])
    .then (userInput =>{
        let{name, role, id, email, school, github, addOne} = userInput;
        let employee;

// TODO give the respective inputs a home | use if statements
        if(role === "Engineer"){
            employee = new Engineer( name, id, email, github);
            console.log(employee)
        }
        if(role === "Intern"){
            employee = new Intern(name, id, email, school);
            console.log(employee)
        }
        // push to squad array
        squad.push(employee);

    // need the addNew to loop
        if(addOne){
            return addNew(squad)
        }else {
            return squad;
        }

    })
}

// we need a function that generates an HTML file example from previous project below
// .then((response) => {
//     console.log("Your READEME file is generating!")
//     return fs.writeFileSync(path.join(process.cwd(), "NEW.md"), generateMarkdown(response));
// });

const writeHTML = data =>{
    console.log (" Generating Your HTML!")
    fs.writeFileSync("./dist/newIndex.html", data, err=>{
        if(err){
            console.log(err)
        } else {
        }
    })
}

// Don't forget to call your function!
createMgmt()
    .then (addNew)
    .then(squad => {
        return genHTML(squad);
    })
    .then(newHTML=>{
        return writeHTML(newHTML);
        console.log("Your SQUAD was created! Look for an newIndex.html file!")
    })