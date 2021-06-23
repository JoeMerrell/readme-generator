// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`;
  }
  return '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project's license is: ${license}`;
  }
  return '';
}

// Function that generates a CONTENTS section according to user selection (may add feature later -- saved the code)
// If user chose not to include contents, return an empty string

// function renderContents(contents) {
//   if (contents !== false) {
//     return `## Contents 

//     * [Installation](#installation)
    
//     * [Usage](#usage)

//     * ${renderLicenseLink(data.license)}
    
//     * [Questions](#questions)
    
//     `;
//   }
//   return '';
// }

function renderImage(image) {
  if (image !== false) {
    return `<img src="${image}">`;
  
  }
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
`;
}

function generateMarkdown(data) {
  return `
<h1 align="center">
    ${data.projectName}
</h1>


${renderLicenseBadge(data.license)}


## Description

${data.projectDescription}


## Contents 

* [Installation](#installation)

* [Usage](#usage)

* ${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation


${data.installation}


## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

If you have any questions about the repo, open an issue or contact ${data.name} (me) directly at ${
    data.emailAdd
  }. You can find more of my work at my github account: [${data.github}](https://github.com/${data}.github
  }/).

`;
}
module.exports = generateMarkdown;
