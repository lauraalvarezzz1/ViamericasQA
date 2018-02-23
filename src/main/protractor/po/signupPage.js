/**
 * Created by lauraalvarez on 6/19/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var signupPage = function() {
    //Sign up email/password
    this.firstname = element(by.id('first-name-sign-up'));
    this.lastname = element(by.id('last-name-sign-up'));
    this.mobilephone = element(by.id('cellphone-sign-up'));
    this.email = element(by.id('email-sign-up'));
    this.password = element(by.id('password-sign-up'));
    this.signupButton = element(by.id('sign-up-sign-up'));9
};

module.exports = new signupPage();