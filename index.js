const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require("inquirer")
const fs = require("fs")
const team = []

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
        team.push(manager)
        addEmployee()

    })
function addEmployee() {
    inquirer.prompt([{
        type: 'list',
        message: 'What would you like to do?',
        choices: ['add intern', 'add engineer', 'build the team'],
        name: 'Selection',

    }])
        .then(response => {
            if (response.Selection === "add intern") {
                addIntern()
            }
            else if (response.Selection == "add engineer") {
                addEngineer()
            }
            else {
                buildTeam()
            }
        })
}
function buildTeam() {
    console.log(team)
}

function addIntern() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Where does the intern go to school?',
    },

    ])
        .then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school)
            team.push(intern)
            addEmployee()
        })

}
function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the Engineers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Engineers id number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers github name?',
    }

    ])
        .then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            team.push(engineer)
            addEmployee()
        })
}
