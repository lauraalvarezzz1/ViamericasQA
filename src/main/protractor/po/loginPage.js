/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var loginPage = function() {
      //Fees and Rates
      this.loginButton = element(by.id('login'));
      this.userName = element(by.id('username'));
      this.password = element(by.id('password'));
};

module.exports = new loginPage();