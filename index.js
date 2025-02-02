// TODO: Include packages needed for this application
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
import inquirer from "inquirer";
import getLicense from "./utils/getLicense.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "list",
    name: "license",
    message: "select project license",
    choices: ["MIT", "GNU", "Apache"],
  },

  {
    type: "input",
    name: "title",
    message: "what is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "please describe your project",
  },
  {
    type: "input",
    name: "installation",
    message: "installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "usage information",
  },
  {
    type: "input",
    name: "contribution",
    message: "Contribution guidelines",
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName);
  console.log(data);
  const md = generateMarkdown(data);
  console.log(md);
  fs.writeFileSync(fileName, md);
}

// TODO: Create a function to initialize app
function init(questions) {
  // console.log(questions);
  inquirer
    .prompt(questions)
    .then((answers) => {
      const licenseText = getLicense(answers.license);
      fs.writeFileSync("LICENSE", licenseText);
      writeToFile("README.md", answers);
    })
    .catch((error) => {
      console.log(error);
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init(questions);
