const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What is the managers name?',
},
{
    type: 'input',
    name: 'id',
    message: 'What is the managers id?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is the managers email?',
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is the managers office number?',
},
])
    .then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        addEmployee()
        console.log(manager)

    })
function addEmployee() {
    inquirer.prompt([{
        type: 'list',
        message: 'What would you like to do?',
        choices: ['add intern', 'add engineer', 'build the team'],
        name: 'Selection',

    }])
        .then(response => {
        })
}