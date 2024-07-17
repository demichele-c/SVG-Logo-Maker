# SVG-Logo-Maker

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Description

The SVG Logo Maker is a command-line application designed to help freelance web developers quickly generate simple logos for their projects, eliminating the need to hire a graphic designer. By prompting users for text, text color, shape type (circle, triangle, or square), and shape color, the application creates a customized SVG logo based on their input. Using Inquirer for user prompts and Jest for unit testing, the application ensures a user-friendly experience and robust functionality. The generated logos are saved in an 'examples' directory, providing a convenient and organized way to manage output files.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

To install the SVG Logo Maker, first ensure you have Node.js and npm installed on your machine. Clone the repository to your local directory using git clone <repository-url>. Navigate to the project directory with cd SVG-Logo-Maker. Install the necessary dependencies by running npm install. This will install inquirer for user input and jest for unit testing. Once the installation is complete, you can run the application using node index.js to start generating logos based on your custom inputs.

## Usage

To use the SVG Logo Maker, simply run node index.js in your terminal after navigating to the project directory. Follow the prompts to enter up to three characters for the logo text, choose a text color, select a shape type (circle, triangle, or square), and specify a shape color. After entering your choices, the application will generate a customized SVG logo and save it in the 'examples' directory. This tool is designed to streamline logo creation for freelance web developers, offering a straightforward and interactive way to produce simple yet effective logos for their projects without the need for external design resources.

## Contributing

We welcome contributions to the SVG Logo Maker project! If you'd like to contribute, please fork the repository, create a new branch for your feature or bug fix, and submit a pull request outlining your changes. Ensure your code follows existing conventions and includes appropriate documentation and tests where applicable. For new features, provide a clear description of the functionality and its purpose. Bug fixes should include a brief explanation of the issue and how your changes resolve it. We appreciate your efforts in improving the SVG Logo Maker and look forward to reviewing your contributions!

## Tests

To test the SVG Logo Maker application, ensure you have Jest installed (if not, you can install it globally with npm install -g jest or locally to the project with npm install jest). The project already includes Jest as a dependency, so you can run tests using the command npm test in your terminal from the project directory. This command will execute all unit tests defined in the lib directory, including tests for shape classes like Circle, Triangle, and Square. Ensure all tests pass successfully before making any contributions or modifications to the project codebase.

## Questions

If you have any questions, please feel free to contact me at [demichele.charles@yahoo.com](mailto:demichele.charles@yahoo.com). You can also find more of my work at [demichele-c](https://github.com/demichele-c).

## License

This project is licensed under the MIT license. Click [here](https://opensource.org/licenses/MIT) for more details.
