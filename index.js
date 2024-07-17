
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateLogo');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 || 'Please enter up to three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):'
        }
    ]);
}

promptUser().then(answers => {
    const svgContent = generateSVG(answers);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
});