
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
