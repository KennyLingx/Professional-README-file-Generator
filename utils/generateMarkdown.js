// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://https://opensource.org/licenses/BSL-1.0)';
      break;
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default: 
      return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla':
      return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Boost':
      return '[Boost Software License 1.0](https://https://opensource.org/licenses/BSL-1.0)';
      break;
    case 'Unlicense':
      return '[The Unlicense](http://unlicense.org/)';
    default: 
      return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license !== 'None') {
  return `${license} license selected! 
          ${license} license link: `
}
else {
  return " ";
}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  # Description 
  ${data.description}

  ## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#License)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)

# Installation 
Installation instructions are as follows:
${data.install}

# Usage 
${data.usage}

# License 
${renderLicenseSection(data.license)}   ${renderLicenseLink(data.license)}

# Contribution 
${data.contribute}

# Testing
Tests are as follows:
${data.testing}
Link to deployed page: ${data.url} 

# Questions 
If you have any questions, please contact me via email or Github.

- Email: [${data.email}](mailto:${data.email})

- Github: [${data.username}](https://github.com/${data.username})

`;
}

module.exports = {generateMarkdown};
