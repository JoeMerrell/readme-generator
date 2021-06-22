// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input

// Questions/Sections and corresponding name values (variables)
// NAME -- name
// GITHUB USERNAME -- github
// EMAIL ADDRESS -- emailAdd
// NAME OF PROJECT -- projectName
// DESCRIPTION -- projectDescription
// INSTALLATION -- confirmInstallation / installation
// USAGE -- usage
// LICENSE -- licence

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
            console.log('Please enter your name');
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
            console.log('Please enter your GitHub username');
            return false;
            }
        }
        },
        {
            type: 'input',
            name: 'emailAdd',
            message: 'Provide a contact email address',
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log('Please provide a contact email address');
                return false;
                }
            }
            },
        {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
            return true;
            } else {
            console.log('Please enter a project name');
            return false;
            }
        }    
        },
        {
        type: 'input',
        name: 'projectDescription',
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
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to provide installation instructions?',
            default: true
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Installation instructions:',
            when: ({ confirmInstallation }) => confirmInstallation
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions',
                validate: usageInput => {
                if (usageInput) {
                return true;
                } else {
                console.log('Please provide usage instructions');
                return false;
                }
            }
            },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['None', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// TODO: Create a function to initialize app

function init() {
    
    questions().then(inquirerResponses => {
      console.log('README created!');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }

// // Function call to initialize app
init();

