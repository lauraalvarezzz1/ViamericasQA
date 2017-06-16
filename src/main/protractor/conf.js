/**
 * Created by lauraalvarez on 2/06/17.
 */

// An example configuration file.
exports.config = {
    allScriptsTimeout: 200000,
    getPageTimeout: 50000,
    ignoreSynchronization: true,
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome',
        chromeOptions: {
            args: [
                '--start-maximized'
            ]
        }
  },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.

    //specs: ['tests/FeesNRates.js'],
    specs: ['tests/fastsendmoney.js'],


    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        isVerbose: true
    },
    onPrepare: function() {
        browser.manage().timeouts().setScriptTimeout(60000);
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(25000);
    },
};

