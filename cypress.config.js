const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseURL: 'https://notes-serverless-app.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
