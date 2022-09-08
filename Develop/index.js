const inquirer = require('inquirer');
const fs = require('fs');

var testArray = ['test1', 'test2']

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
    const filename = `${data.projectTitle.toLowerCase().split(' ').join('')}.txt`;
    readMe = `# ${data.projectTitle}

    ## Description
    
    ${data.description}
    
    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
    
   
    ## Credits
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
    ## License
    
     ${data.license} If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    ---
    
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ## Features
    
    If your project has a lot of features, list them here.
    
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
