<h1 align="left">:computer: Deel Automation Test  </h1>

Repository for the Deel Automation test for QA Engineer Position

## Introduction
This project contains the interface test automation of a Fixed Rate contract on <a href="https://dev.deel.wtf/">Deel website</a>. 
The test was developed using Cypress Framework.


## Challenge Requirements

- Write a test to create a "Fixed Rate" contract using the best practices.
- Fill up the following fields when creating the contract:
    - "Contractor's start date": today minus 1 day
    - Define the rate:
    - "How much?": 1000
    - "Currency": GBP - British Pound
    - "Per": Week
    - Add any Special Clause
    - "Where is the contractor's tax residence?": United States / Colorado
- Create the automated tests using any JS world technologies 
- Test runner: Mocha
- Reporter: Allure

## Environment Setup
**Prerequisites:** 
* <a href="https://www.java.com/en/download/"> Java for Allure command line</a>


1. Clone the project

2. To setup the project issue the below command in project root directory.
```
chmod +x ./bin/setup.sh
./bin/setup.sh
```

## How to run?

First of all, update your Deel credentials on Cypress.json (email and password).

Issue the below commands in project root directory:

```
npm run test:chrome -- To only execute
npm run report:allure -- To only report
npm run test:chrome:allure -- To execute and report
```

The execution will run headless and using the Chrome (other browser can be added on package.json scripts). 

After execution the Allure report will be displayed on browser.


## Author
<a target="_blank" href="https://github.com/diegohdb/diegohdb">👤 Diego Bezerra </a>

<a target="_blank" href="https://www.linkedin.com/in/diegohdb/">
  <img align="left" alt="LinkdeIN" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
</a>
<a target="_blank" href="https://www.instagram.com/diegohdb/">
  <img align="left" alt="Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />
</a>
<a target="_blank" href="mailto:diegohdb@gmail.com">
  <img align="left" alt="Gmail" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" />
</a>
