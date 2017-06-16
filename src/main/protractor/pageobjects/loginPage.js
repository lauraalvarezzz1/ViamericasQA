/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var FeesandRatesPage = function() {
      //Fees and Rates
      this.loginButton = element(by.partialButtonText('Log In'));
      this.userName = element(by.model('login.user.username'));
      this.password = element(by.model('login.user.password'));
};

module.exports = new FeesandRatesPage();