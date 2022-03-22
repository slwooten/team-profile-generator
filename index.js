const inquirer = require('inquirer');
const chooseEmployee = (type) => {
    return inquirer.prompt([
        {
            name: 'name',
            message: `Who is the ${type}?`,
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
                .then(nextEmployee);
        }
        if (employee.type === 'Intern') {
            chooseEmployee(employee.type)
                .then(nextEmployee);
        }
        if (employee.type === 'Exit') {
            process.exit();
        }

};

const init = () => {
    chooseEmployee('Manager')
        .then(nextEmployee)
        .then();
};

init();