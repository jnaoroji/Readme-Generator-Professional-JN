// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your Project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your Project',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What command should you run for installation of your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Are there any usage instructions for your application?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Are there any contribution guidelines for your application?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command can be run to test your application?',
    },
    {
      type: 'list',
      message: 'Which license would you like to include?',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'none'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username',
      },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address',
      },
  ]);
};
// Function that returns a license badge based on which license is passed, If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'none') {
    return '';
  } else {
    return '';
  }
};

// Function that returns the license link, If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'none') {
    return '';
  } else {
    return '';
  }
}

// Function that returns the license section of README, If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseText = `This project is licensed under the ${license} license.`;

  return `
${licenseText}

For more information about the license, please refer to the [License](${renderLicenseLink(license)}) documentation.
`;
}

// Function to generate markdown for README

const generateMarkdown = ({ title, description,install,usage,license, contribution, test, github, email }) => {
  return `# ${title}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${install}

  ## Usage
  ${usage}

  ## License
  ${renderLicenseSection(license)}

  ## Contributing
  ${contribution}

  ## Tests
  ${test}

  ## Questions
  You can find more of my work at [${github}](https://github.com/${github}/).
  If you have any questions about the repo, open an issue or contact me directly at [${email}](mailto:${email}). 
  `
};
// Function that writes README file

const writeToFile = (fileName, data) => {
  const filePath = './generate' + fileName; // changed the file path as there are 2 readme.md files for this project
  return fs.promises.writeFile(filePath, data);
};

// Function to initialize app
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
