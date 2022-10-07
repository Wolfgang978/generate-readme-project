
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const { writeFile } = require('fs').promises;
const questions = [
  {
    type: 'input',
    name: 'appName',
    message: 'What is the name of your application?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of what your app does.',
  },
  {
    type: 'input',
    name: 'installSteps',
    message: 'Please provide a set of instructions with how to install your application.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please give details on how your application is meant to be used.',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please select a one of the following licenses if this applies to you.',
    choices: ["Boost Software License 1.0", "GNU Affero General Public License v3.0", "The Unlicense"],
  },
  {
    type: 'input',
    name: 'contributers',
    message: 'Please enter the names of those who contributed to this application.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please include any tests for the application',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your github username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email.',
  },
];


function writeToFile(data) {
  const createRead = generateMarkdown(data)
  

  fs.writeFile("ReadMe.md", createRead, (err) => err ? console.log("You probably messed up somewhere. Try again") : console.log("ReadMe.md created!"))

 }


function init() { 
  return inquirer.prompt(questions)
  .then((answers) => writeToFile(answers))
  // .then((answers) => writeFile('ReadMe.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to ReadMe.md'))
    .catch((err) => console.error(err));
}

init();
