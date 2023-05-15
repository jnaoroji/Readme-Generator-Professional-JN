// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your Readme file?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your Readme file?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the instructions for installation of your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions for your application?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Are there any contribution guidelines for your application?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Are there any test instructions for your application?',
    },
    // {
    //   type: 'checkbox',
    //   message: 'What languages do you know?',
    //   name: 'stack',
    //   choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    // },
    // {
    //   type: 'list',
    //   message: 'Which licence would you like to include?',
    //   name: 'contact',
    //   choices: ['email', 'phone', 'telekinesis'],
    // },
    // {
    //   type: 'input',
    //   name: 'github',
    //   message: 'Please enter your GitHub username',
    //   },
    // {
    //   type: 'input',
    //   name: 'email',
    //   message: 'Please enter your email address',
    //   },
  ]);
};
 
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to generate markdown for README

const generateMarkdown = ({ title, description,install,usage,licence, contribution, test, question }) => {
  return `# ${title}\n\n## Description\n${description}\n\n## Table of Contents\n${description}\n\n## Installation\n${install}\n\n## Usage\n${usage}\n\n## Licence\n${licence}\n\n## Contributing\n${contribution}\n\n## Tests\n${test}\n\n## Questions\n${question}\n\n`
};

const writeToFile = (fileName, data) => {
  return fs.promises.writeFile(fileName, data);
};
// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      return writeToFile('README.md', markdown);
    })
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
