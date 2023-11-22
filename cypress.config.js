const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    requestTimeout: 40000,
    //setupNodeEvents(on, config) {
    // implement node event listeners here
    //},
  },
})
