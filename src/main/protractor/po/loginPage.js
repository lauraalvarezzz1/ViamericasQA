/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var loginPage = function() {

      //Login section
      this.loginHeader = element(by.id('login-button-header'));
      this.userName = element(by.id('username'));
      this.password = element(by.id('password'));
      this.loginButton = element(by.id('login'));

      //Additional things
      this.eyeicon = element(by.css('[ng-click="logInModal.showPassword()"]'));
      this.forgotPassword = element(by.id('forgot-password'));
      this.loginFacebook = element(by.id('facebook-login'));
      this.SignUpButton = element(by.id('sign-up-free'));

};

module.exports = new loginPage();