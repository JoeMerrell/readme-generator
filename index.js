// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

// NAME
// NAME OF PROJECT
// DESCRIPTION
// TABLE OF CONTENTS
// INSTALLATION
// USAGE
// LICENSE
// CONTRIBUTING
// TESTS
// QUESTIONS

const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('Please enter your name!');
            return false;
            }
        }
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Please enter your GitHub username!');
            return false;
            }
        }
        },

        {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log('You need to enter a project name!');
            return false;
            }
        }    
        },
        {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
            if (descriptionInput) {
            return true;
            } else {
            console.log('You need to enter a project description!');
            return false;
            }
        }
        },








    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
