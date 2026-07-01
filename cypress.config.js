
const { defineConfig } = require("cypress");
const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin");

module.exports = defineConfig({

  reporter: "mochawesome",

  reporterOptions: {

    reportDir: "cypress/reports",

    overwrite: false,

    html: false,

    json: true,

    quiet: true

  },

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
