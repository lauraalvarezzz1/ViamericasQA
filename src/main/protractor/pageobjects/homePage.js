/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var loginPage = function() {
    //Login Form
    var goLoginHomePage = browser.element(by.partialButtonText('Log In'));
    var LoginForm = browser.element(by.partialButtonText('Log In'));
    var Username = browser.element(by.model('login.user.username'));
    var password = browser.element(by.model('login.user.password'));

};

module.exports = new loginPage();