const inquirer = require('inquirer');

const chooseEmployee = (type) => {
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
            chooseEmployee(employee.type)
                .then(nextEmployee)
                .then((answers) => {
                    init(answers.type);
                });
        }
        if (employee.type === 'Intern') {
            chooseEmployee(employee.type)
                .then(nextEmployee)
                .then((answers) => {
                    init(answers.type);
                });
        }
        if (employee.type === 'Exit') {
            process.exit();
        }

};

const init = (type) => {
    chooseEmployee(type)
        .then(nextEmployee)
        .then(employeeType);
};

init('Manager');