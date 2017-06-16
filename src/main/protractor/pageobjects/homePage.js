/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var homePage = function() {
    //Login Form
    this.sendMoneyButton = element(by.linkText('Send Money'));
    this.feesAndRatesButton = element(by.linkText('Fees and Rates'));
    this.howItWorksButton = element(by.linkText('How it Works'));
    this.locationsButton = element(by.linkText('Locations'));
    this.signUpButton = element(by.buttonText('Sign up For Free'));

};

module.exports = new homePage();