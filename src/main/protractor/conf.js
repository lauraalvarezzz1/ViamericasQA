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

    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    //specs: ['e2e/recipients/recipients_createRecipient.js'],
    //specs: ['e2e/recipients_createRecipient.js'],
    //specs: ['e2e/fastsendmoney.js'],
    specs: ['e2e/recipients/recipients_createRecipient.js'],
    //specs: ['e2e/myAccount/payment/addPayment.js'],
    //specs: ['e2e/staticPages/Locations.js],
    //specs: ['e2e/SignUpFlow/signup.js'],
    //specs: ['e2e/fastsendmoney.js'],
    //specs: ['e2e/recipients/recipients_createBankAccount.js'],
    //specs: ['e2e/recipients/recipients_deleteAccount.js'],
    //specs: ['e2e/recipients/recipients_deleteRecipient.js'],
    //specs: ['e2e/recipients/recipients_editRecipient.js'],


    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        isVerbose: true
    },
    onPrepare: function() {
        global.EC = protractor.ExpectedConditions;
        browser.manage().timeouts().setScriptTimeout(60000);
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(25000);
        var jasmineReporters = require('jasmine-reporters');
                jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
                    consolidateAll: true,
                    savePath: 'testresults',
                    filePrefix: 'xmloutput'
                }));
    },
};