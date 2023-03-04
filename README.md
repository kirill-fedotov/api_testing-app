UI and API Automation tests for "angular-realworld-example-app"


Setup

   1. Clone the repository to VScode

    https://github.com/kirill-fedotov/api_testing-app.git


   2. Navigate to the root directory and install npm

    cd App

    npm install


   3. Navigate to the root directory and install Cypress

    cd Cypress

    npm install cypress --save-dev

Running Tests

   4. Run app

    cd App

    npm start


   5. Start the Cypress Test Runner

    cd Cypress

    node_modules\.bin\cypress open

  Setup "cypress-mochawesome-reporter"

   6. Install cypress-mochawesome-reporter

    npm i --save-dev cypress-mochawesome-reporter

   7. Change cypress reporter & setup hooks

   Edit config file (cypress.config.js by default)

    const { defineConfig } = require('cypress');

    module.exports = defineConfig({
      reporter: 'cypress-mochawesome-reporter',
      e2e: {
        setupNodeEvents(on, config) {
          require('cypress-mochawesome-reporter/plugin')(on);
        },
      },
    });

   8. Add to cypress/support/e2e.js

    import 'cypress-mochawesome-reporter/register';

   9. Run cypress

    npx cypress run --spec cypress/e2e/signup_login.cy.js

   10. Run cypress with specific browser and in visible mode

    npx cypress run --spec cypress/e2e/signup_login.cy.js --browser chrome --headed
