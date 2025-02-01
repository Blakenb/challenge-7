// TODO: Include packages needed for this application
import fs from "fs";
const generateMarkdown = require("./utils/generateMarkdown");
import inquirer from "inquirer";
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "description",
    message: "please describe your project",
    default: "",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName);
  console.log(data);
  const md = generateMarkdown(data);
  console.log(md);
  fs.writeFileSync(fileName, md);
  console.log(textRead);
}

// TODO: Create a function to initialize app
function init(questions) {
  // console.log(questions);
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init(questions);
