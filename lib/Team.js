const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('../src/page-template.js');
const { writeFile, copyFile } = require("../utils/generate-site.js");

function Team() {
    this.engineers = [];
    this.interns = [];
}

Team.prototype.addManager = function() {
    console.log(`
    =========================
       Build a Team Profile  
    ==========================
    `);
    
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the team manager's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's employee ID?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the employee ID.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the team manager's email.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: "What is the manager's office number?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the team manager's office number.");
                        return false;
                    }
                }
            }

        ])
        .then(({ name, id, email, office}) => {
            this.manager = new Manager (name, id, email, office);

            this.buildTeam();
        })
}

Team.prototype.addEngineer = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the employee's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee ID?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the employee ID.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the employee's email.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub user name?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter employee's GitHub user name.");
                        return false;
                    }
                }
            }

        ])
        .then(({ name, id, email, github}) => {
            this.engineers.push(new Engineer(name, id, email, github));

            this.buildTeam();
        })
}

Team.prototype.addIntern = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the intern's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's employee ID?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the employee ID.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the intern's email.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?",
                validate: input => {
                    if (input) {
                        return true;
                    }
                    else {
                        console.log("Please enter the intern's school.");
                        return false;
                    }
                }
            }

        ])
        .then(({ name, id, email, school}) => {
            this.interns.push(new Intern (name, id, email, school));

            this.buildTeam();
        })
}

Team.prototype.buildTeam = function() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["Add Engineer", "Add Intern", "Exit and Build Team Profile"]
        })
        .then(({ action }) => {
            if (action === "Add Engineer") {
                this.addEngineer();
            }
            else if (action === "Add Intern") {
                this.addIntern();
            }
            else {
                this.generateHtml();
            }
        })
}

Team.prototype.generateHtml = function() {
    console.log(generatePage(this.manager, this.engineers, this.interns));
    // generatePage(this.manager, this.engineers, this.interns)
        // .then(pageHTML => {
        //     return writeFile(pageHTML);
        // })
        // .then(writeFileResponse => {
        //     console.log(writeFileResponse);
        //     return copyFile();
        // })
        // .then(copyFileResponse => {
        //     console.log(copyFileResponse);
        // })
        // .catch(err => {
        //     console.log(err);
        // });
}

module.exports = Team;