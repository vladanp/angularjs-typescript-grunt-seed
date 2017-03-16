exports.config = {

  seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',

  chromeDriver: './node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.26.exe',

  framework: 'jasmine2',

  allScriptsTimeout: 11000,

  specs: [
    'e2e/tests/*.e2e-spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:9001/',

  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits
    onComplete: null,
    // If true, display spec names
    isVerbose: false,
    // If true, print colors to the terminal
    showColors: true,
    // If true, include stack traces in failures
    includeStackTrace: true,
    // Default time to wait in ms before a test fails
    defaultTimeoutInterval: 30000
  }
};
