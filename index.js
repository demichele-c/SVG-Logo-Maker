const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
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
    
    // Ensure the 'examples' folder exists
    const examplesDir = path.join(__dirname, 'examples');
    if (!fs.existsSync(examplesDir)) {
        fs.mkdirSync(examplesDir);
    }
    
    // Write the SVG content to 'examples/logo.svg'
    const filePath = path.join(examplesDir, 'logo.svg');
    fs.writeFileSync(filePath, svgContent);
    console.log('Generated logo.svg in examples folder');
}).catch(error => {
    console.error('Error generating logo:', error);
});