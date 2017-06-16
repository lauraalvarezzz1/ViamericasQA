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
      this.country = browser.element(by.xpath(".//*[@placeholder='Country']"));
      this.amount = browser.element(by.id('amount'));
      this.bankDepositButton = browser.element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[1]/div[3]/div[1]/div[1]/div'));
      this.cashPickupButton = browser.element(by.xpath('Cash Pickup'));
      this.feesAndRatesButton = browser.element(by.id('send-money'));
      this.comparePrices = element(by.css('compare-prices-viam'));

};

module.exports = new FeesandRatesPage();