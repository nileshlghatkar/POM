const { Before, After } = require('@cucumber/cucumber');

Before(function () {
  // This function will be called before each scenario
  console.log("Before scenario: Setting up the environment");
});

After({tags: '@smoke'},function () {
  // This function will be called after each scenario
  console.log("After scenario: Cleaning up the environment");
});