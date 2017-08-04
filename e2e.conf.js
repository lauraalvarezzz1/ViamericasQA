/**
 * Created by lauraalvarez on 6/14/17.
 */
exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],
    specs: ['e2e/**/*.spec.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
}
