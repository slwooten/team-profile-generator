const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const chooseEmployee = (type, neededInfo) => {
    return inquirer.prompt([
        {
            name: 'name',
            message: `Who is the ${type}?`,
        },
        {
            name: 'id',
            message: `What is the ${type}'s Employee ID?`,
        },
        {
            name: 'email',
            message: `What is the ${type}'s email address?`,
        },
        {
            name: 'neededInfo',
            message: `${neededInfo}`
        }
    ])
};

const nextEmployee = () => {
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'type',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'Exit']
        }
    ])
};

const employeeType = (employee) => {
        if (employee.type === 'Engineer') {
            chooseEmployee(employee.type, 'What is the Engineer\'s GitHub username?')
                .then(nextEmployee)
                .then((answers) => {
                    init(answers.type);
                });
        }
        if (employee.type === 'Intern') {
            chooseEmployee(employee.type, 'What school does the intern attend?')
                .then(nextEmployee)
                .then((answers) => {
                    init(answers.type);
                });
        }
        if (employee.type === 'Exit') {
            process.exit();
        }

};

const init = (type, neededInfo) => {
    chooseEmployee(type, neededInfo)
        .then(nextEmployee)
        .then(employeeType);
};

init('Manager', 'What is the Office Number?');