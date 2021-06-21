// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

// NAME -- name
// GITHUB USERNAME -- github
// NAME OF PROJECT -- projectName
// DESCRIPTION -- projectDescription
// INSTALLATION -- confirmInstallation / installation
// USAGE -- usage
// LICENSE -- licence
// TABLE OF CONTENTS -- contents

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
        name: 'projectName',
        message: 'What is the name of your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
            return true;
            } else {
            console.log('You need to enter a project name!');
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
            message: 'Provide usage instructions (Required)',
                validate: usageInput => {
                if (usageInput) {
                return true;
                } else {
                console.log('You need to provide usage instructions!');
                return false;
                }
            }
            },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['None', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
        },
        {
            type: 'confirm',
            name: 'contents',
            message: '(Final question) Would you like to include a table of contents?',
            default: false
        },

    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
      console.log('README created!');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }

// Function call to initialize app
init();
