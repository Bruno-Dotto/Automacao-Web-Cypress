// const { defineConfig } = require("cypress");
// const grep = require('@cypress/grep/src/plugin');

// module.exports = defineConfig({
//   allowCypressEnv: false,

//   e2e: {
//     baseUrl: 'https://automationpratice.com.br',
//     defaultCommandTimeout: 10000,
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//         grep(config);

//       return config;
//     },
//   },
// });

const { defineConfig } = require("cypress");
const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin");

module.exports = defineConfig({

  allowCypressEnv: false,

  e2e: {

    baseUrl: "https://automationpratice.com.br",
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {

      cypressGrepPlugin(config);

      return config;
    },

  },

});
