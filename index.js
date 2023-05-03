const inquirer = require("inquirer");
const fs = require("fs");

//the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//WHEN I enter my project title

// badge for that license is near the rop of readme

const generateReadme = ({
  title,
  description,
  installation,
  usage,
  license,
  contribution,
  tests,
  github,
  email,
}) => 
`# ${title}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## License

${license}

## How to Contribute

${contribution}

## Tests

${tests}

## Questions

Please contact me if you have any questions. <br>
GitHub Profile Page - https://github.com/${github} <br>
Email - (mailto:${email})
`;

// input => description, installation instructions, usage information, contribution guidelines, test instructions and question
// quesiton should be link to my own profile account and have a email address
// license => list

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "list",
    name: "license",
    message: "Provide license info.",
    choices: [
      "None",
      "Apache 2.0 License",
      "GNU GPL v3",
      "MIT License",
      "BSD 2-Clause License",
      "BSD 3-Clause License",
      "Boost Software License 1.0",
      "Creative Commons",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "GNU GPL v2",
      "Mozilla Public License 2.0",
      "The Unlicense"
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
  },
  {
    type: "input",
    name: "tests",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
  },
  {
    type: "input",
    name: "github",
    message: "Input your Github username.",
  },
  {
    type: "input",
    name: "email",
    message: "input your email address",
  },

  
])
.then((answers) => {
    const readmeCoontent = generateReadme(answers);

    fs.writeFile('README.md', readmeCoontent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

