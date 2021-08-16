const inquierer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');

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


const generateHTML = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;