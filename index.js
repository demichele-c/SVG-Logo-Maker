// Import required modules
const inquirer = require('inquirer'); // Inquirer module for handling user prompts
const fs = require('fs'); // File system module for reading/writing files
const path = require('path'); // Path module for handling file and directory paths
const generateSVG = require('./lib/generateLogo'); // Import the generateSVG function from the generateLogo module

// Function to prompt the user for input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            // Validation to ensure the input is not more than three characters
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
        },
        {
            type: 'input',
            name: 'filename',
            message: 'Enter a filename (without extension, .svg will be added):'
        }
    ]);
}

// Execute the promptUser function and handle the responses
promptUser().then(answers => {
    // Destructure the answers object to get individual properties
    const { text, textColor, shape, shapeColor, filename } = answers;

    // Generate the SVG content using the user's input
    const { filename: generatedFilename, content } = generateSVG({ text, textColor, shape, shapeColor, filename });

    // Define the examples directory path
    const examplesDir = path.join(__dirname, 'examples');
    
    // Check if the examples directory exists, create it if it doesn't
    if (!fs.existsSync(examplesDir)) {
        fs.mkdirSync(examplesDir);
    }

    // Define the complete file path for the generated SVG file
    const filePath = path.join(examplesDir, generatedFilename);
    
    // Write the SVG content to the file
    fs.writeFileSync(filePath, content);
    
    // Log a success message to the console
    console.log(`Generated ${generatedFilename} in examples folder`);
}).catch(error => {
    // Handle any errors that occur during the process
    console.error('Error generating logo:', error);
});