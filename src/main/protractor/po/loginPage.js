/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var loginPage = function () {

    //Login section
    this.loginHeader = element(by.id('login-button-header'));
    this.userName = element(by.id('username-login'));
    this.password = element(by.id('password-login'));
    this.loginButton = element(by.id('login-login'));

    //Additional things
    this.eyeicon = element(by.id('show-password-login'));
    this.forgotPassword = element(by.id('forgot-password-login'));
    this.loginFacebook = element(by.id('facebook-login'));
    this.SignUpButton = element(by.id('sign-up-free-login'));

    //Send Money Flow
    this.loginButtoninsignup_send = element(by.id('log-in-sign-up'));

};

module.exports = new loginPage();