// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {    
        type: 'input',
        name: 'name',
        message: 'Enter Your Name',
    },
    {   
        type: 'input',
        name: 'title',
        message: 'Enter Your Project Title',
    },
    {  
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project'
    },
    {   
        type: 'input',
        name: 'install',
        message: 'Enter the instruction of the installation for the application'
    },
    {   
        type: 'input',
        name: 'usage',
        message: 'How can a user use the application?'
    },
    {   
        type: 'input',
        name: 'testing',
        message: 'How can the user run tests for your project?'
    },
    {   
        type: 'input',
        name: 'url',
        message: 'Enter the URL of the deployed application'
    },
    {   
        type: 'list',
        name: 'license',
        message: 'What licences are required for this application?',
        choices: ['MIT', 'Mozilla', 'Boost', 'Unilicense']
    },
    {   
        type: 'input',
        name: 'contribute',
        message: ''
    },
    {    
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {    
        type: 'input',
        name: 'username',
        message: 'What is your Github profile?',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (error) =>
        error ? console.log(error) : console.log('Readme file generated!')
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([...questions])
        .then((response)=>{writeToFile('README.md',response)})
};

// Function call to initialize app
init();
