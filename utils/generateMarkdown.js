// TODO: Create a function that returns a license badge based on which license is passed in

import fs from "fs";

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(
      license
    )})`;
  }
  if (license === "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(
      license
    )})`;
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(
      license
    )})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license === "GNU") {
    return `[GNU](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === "Apache") {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let path = "";
  if (license === "GNU") {
    path = "utils/gnu.md";
  }
  if (license === "MIT") {
    path = "utils/mit.md";
  }
  if (license === "Apache") {
    path = "utils/apache.md";
  }
  const text = fs.readFileSync(path, "utf-8");
  return text;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseText = renderLicenseSection(data.license);
  fs.writeFileSync("LICENSE", licenseText);

  return `# ${data.title}

${licenseBadge}

## Table of contents
- [License](#license)
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Contribution guidelines](#contribution-guidelines)
- [Test instructions](#test-instructions)
- [How to reach me](#how-to-reach-me)


## License
${renderLicenseLink(data.license)}



## Description
${data.description} 

## Installation Instructions
${data.installation}

## Contribution guidelines
${data.contribution}

## Test instructions
${data.test}

## How to reach me
${data.Email}
https://github.com/${data.gitUsername}
`;
}

export default generateMarkdown;
