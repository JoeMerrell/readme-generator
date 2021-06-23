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
// CONTRIBUTING -- contributing
// TEST -- test
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
        message: 'What is the name of your project?',
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
        message: 'Provide a description of the project:',
            validate: descriptionInput => {
            if (descriptionInput) {
            return true;
            } else {
            console.log('You need to enter a project description');
            return false;
            }
        }
        },
          {
            type: 'input',
            name: 'installation',
            message: 'Installation instructions (including information on dependencies):',
            validate: installInput => {
                if (installInput) {
                return true;
                } else {
                console.log('Please provide installation instructions');
                return false;
                }
            }
            },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide usage instructions/guidelines:',
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
            choices: ['None', 'MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide instructions for contributing to the repo:',
                validate: contributeInput => {
                if (contributeInput) {
                return true;
                } else {
                console.log('Please provide instructions for contributing');
                return false;
                }
            }
            },
            {
                type: 'input',
                name: 'test',
                message: 'Provide instructions for testing the app:',
                    validate: testInput => {
                    if (testInput) {
                    return true;
                    } else {
                    console.log('Please provide instructions for testing');
                    return false;
                    }
                }
                },
          // trying to develop system for importing images -- perhaps a future version
          // {
          //   type: 'confirm',
          //   name: 'confirmImage',
          //   message: 'Would you like to add a screenshot to the bottom of the page?',
          //   default: true
          // },
          // {
          //   type: 'input',
          //   name: 'image',
          //   message: 'Please provide your image path (note that the image should be in an image folder and that the path may be changed in the README at a later time):',
          //   when: ({ confirmImage }) => confirmImage
          // }
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

// Function call to initialize app
init();

