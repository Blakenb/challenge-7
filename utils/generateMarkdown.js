// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
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
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  console.log(data.license);
  console.log(licenseBadge);
  return `# ${data.title}

${licenseBadge}

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
`;
}

export default generateMarkdown;
