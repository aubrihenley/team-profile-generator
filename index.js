const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML =require('./src/helper.html')
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');

const employeeArray =[];

//Question arrays

const managerQuestions = [{
        type: "input",
        message: "Enter team's manager name:",
        name: "name"
    },
    {
        type: "input",
        message: `"Enter ${this.name}'s employee ID number:"`,
        name: "id"
    },
    {
        type: "input",
        message: `"Enter ${this.name}'s email:"`,
        name: "email"
    },
    {
        type: "input",
        message: `"Enter ${this.name}'s offic number:"`,
        name: "officeNumber"
    },
    {
        type: "list",
        message: "If you would like to add a new team member select type of team member, or select done.",
        choices: ["Engineer", "Intern", "Done"],
        name: "addEmployee"
    },
];

const engineerQuestions = [{
    type: "input",
    message: "Enter engineer's name:",
    name: "name"
},
{
    type: "input",
    message: `"Enter ${this.name}'s employee ID number:"`,
    name: "id"
},
{
    type: "input",
    message: `"Enter ${this.name}'s email:"`,
    name: "email"
},
{
    type: "input",
    message: `"Enter ${this.name}'s GitHub username:"`,
    name: "github"
},
{
    type: "list",
    message: "If you would like to add a new team member select type of team member, or select done.",
    choices: ["Engineer", "Intern", "Done"],
    name: "addEmployee"
},
];

const internQuestions = [{
    type: "input",
    message: "Enter intern's name:",
    name: "name"
},
{
    type: "input",
    message: `"Enter ${this.name}'s employee ID number:"`,
    name: "id"
},
{
    type: "input",
    message: `"Enter ${this.name}'s email:"`,
    name: "email"
},
{
    type: "input",
    message: `"Enter ${this.name}'s school:"`,
    name: "github"
},
{
    type: "list",
    message: "If you would like to add a new team member select type of team member, or select done.",
    choices: ["Engineer", "Intern", "Done"],
    name: "addEmployee"
},
];

//Initialize

const init = () => {
    inquirer(managerQuestions)
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();
  


