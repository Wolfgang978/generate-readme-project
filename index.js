// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(data) {
  const createRead = generateMarkdown(data)
  console.log("here")

  console.log(data.appName)

  fs.writeFile("ReadMe.md", createRead, (err) => err ? console.log("You probably messed up somewhere. Try again") : console.log("ReadMe.md created!"))

 }

// TODO: Create a function to initialize app
function init() { 
  return inquirer.prompt(questions)
  .then((answers) => writeToFile(answers))
  // .then((answers) => writeFile('ReadMe.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to ReadMe.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
