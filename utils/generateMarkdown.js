
function renderLicenseBadge(license) {
  if (!license) {
    return ""
  } else {
    if (license[0] === "Boost Software License 1.0") {
return `
![badge](https://img.shields.io/badge/license-bsl-brightgreen)
    `
    } else if (license[0] === "GNU Affero General Public License v3.0") {
      return `
![badge](https://img.shields.io/badge/license-agpl-brightgreen)
          `
    } else {
      return `
![badge](https://img.shields.io/badge/license-unlicense-brightgreen)
          `
    }
    
  }

}


function renderLicenseLink(license) {

  if (!license) {
    return ""
  } else {
    if (license.length === 3) {
      return `
https://choosealicense.com/licenses/agpl-3.0/
https://choosealicense.com/licenses/bsl-1.0/
https://choosealicense.com/licenses/unlicense/
`
    } else if (license.length === 2) {
      if (license[0] === "Boost Software License 1.0") {
        if (license[1] === "GNU Affero General Public License v3.0") {
          return `
          https://choosealicense.com/licenses/agpl-3.0/
          https://choosealicense.com/licenses/bsl-1.0/
          `
        } else {
        return `
        https://choosealicense.com/licenses/unlicense/
        https://choosealicense.com/licenses/bsl-1.0/
        `
       }
      } else {
        return `
        https://choosealicense.com/licenses/agpl-3.0/
        https://choosealicense.com/licenses/unlicense/
        `
      }
    } else if (license.length === 1) {
      if (license[0] === "Boost Software License 1.0") {
        return `
        https://choosealicense.com/licenses/bsl-1.0/
        `
      } else if (license[0] === "GNU Affero General Public License v3.0") {
        return`
        https://choosealicense.com/licenses/agpl-3.0/
        `
      } else {
        return`
        https://choosealicense.com/licenses/unlicense/
        `
      }
    }
  }
}

function renderLicenseSection(license) {

  if (!license) {
    return ""
  } else {
    return `
## License
This project is licensed by ${license}. ${renderLicenseLink(license)}
    `
  }
}

function generateMarkdown(data) {
  return `

  # ${data.appName}
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
1. [Description](#Description)
2. [Install Instructions](#Install-Instructions)
3. [How to use this app](#How-to-use-this-app)
4. [License](#License)
5. [Credits](#Credits)
6. [Tests](#Tests)
7. [Github](#Github)
8. [Contact Me](#Contact-Me)

  
  
  ## Description <a name="paragraph1"></a>
  ${data.description}
  
  ## Install Instructions
  ${data.installSteps}
  
  ## How to use this app
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Credits
  This application was made by ${data.contributers}

  ## Tests
  ${data.tests}

  ## Github
 Here is the link to my github account [${data.github}](https://github.com/${data.github})
  
  
  ## Contact Me
  If you have any further questions about the application you can reach me at, ${data.email}

`;
}


module.exports = generateMarkdown;
