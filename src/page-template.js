const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateManager = manager => {
    return `
        <div class="employee-card manager">
            <div class="card-header">
                <h5 class="card-name">${manager.name}</h5>
                <h6 class="card-position">${manager.getRole()}</h6>
            </div>
            <ul class="employee-info">
                <li class="list-info id">ID: ${manager.id}</li>
                <li class="list-info email">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-info office">Office: ${manager.officeNumber()}</li>
            </ul>
        </div>
    `;
};

const generateEngineers = engineers => {
    if (engineers.length === 0) {
        return ``;
    }

    return engineers.map(engineer => {
        return `
            <div class="employee-card engineer">
                <div class="card-header">
                    <h5 class="card-name">${engineer.name}</h5>
                    <h6 class="card-position">${engineer.getRole()}</h6>
                </div>
                <ul class="employee-info">
                    <li class="list-info id">ID: ${engineer.id}</li>
                    <li class="list-info email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-info github">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        `;
    })
    .join("");
};

const generateInterns = interns => {
    if (interns.length === 0) {
        return ``;
    }

    return interns.map(intern => {
        return `   
            <div class="employee-card intern">
                <div class="card-header">
                    <h5 class="card-name">${intern.name}</h5>
                    <h6 class="card-position">${intern.getRole()}</h6>
                </div>
                <ul class="employee-info">
                    <li class="list-info id"> ID: ${intern.id}</li>
                    <li class="list-info email">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-info school">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        `;
    })
    .join("");
}

module.exports = (manager, engineers, interns) => {
    console.log(manager, engineers, interns);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <menta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio</title>
        <link rel="stylesheet" href="../src/style.css">
    </head>
    <body>
        <header>
            <div class="team-header">
                <h1 class="">My Team</h1>
            </div>
        </header>
        <main>
            <div class="card-container">
                ${generateManager(manager)}
                ${generateEngineers(engineers)}
                ${generateInterns(interns)}
            </div>
        </main>
    </body>
    </html>
    `;
};