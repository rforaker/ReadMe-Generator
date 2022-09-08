const inquirer = require('inquirer');
const fs = require('fs');

const MIT = {
  name: 'MIT',
  badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  info: 'Test'
}
const GNUGPLv3 = {
  name: 'GNUGPLv3',
  badge:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
}
const MozillaPublicLicense2 = {
  name: 'Mozilla Public License 2.0',
  badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
}
const ApacheLicense2 = {
  name:'Apache License 2.0',
  badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
}
const TheUnlicense = {
  name:'The Unlicense',
  badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
}
const testArray = [MIT, GNUGPLv3, MozillaPublicLicense2, ApacheLicense2, TheUnlicense]

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
      name: 'guidelines',
    },
    {
     type: 'input',
     message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
     name: 'tests',
    },
    {
     type: 'input',
     message: 'Please include you GitHub username.',
     name: 'github',
    },
    {
     type: 'input',
     message: 'Please provide a good contact email.',
     name: 'email',
    },

    {
     type: 'list',
     message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.',
     name: 'license',
     choices: testArray
    },
  ])
  .then((data) => {
    const filename = `README.md`;
    readMe = `
  # ${data.projectTitle}

  ## Description
    
    ${data.description}
    
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
    
  ## Installation
    
  ${data.installation}
    
  ## Usage
    
  ${data.usage}
    
  ## License
    
    This project is licensed under the ${data.license} license.
    
  ---
    
  ## How to Contribute
    
  ${data.guidelines}
    
  ## Tests
  ${data.tests}

  ## Questions?
  https://github.com/${data.github}
  Email me at ${data.email}
  `
    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
