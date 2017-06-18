/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var sendMoneyFlowPage = function() {

    //Country
    this.countryLI = element.all(by.css('dropdown-viamericas#country-select ul.dropdown-viam-list li'));
    this.country = element(by.css('dropdown-viamericas#country-select'));

    //Currency
    this.currencyLI = element.all(by.css('dropdown-viamericas#recipient-currency-select ul.dropdown-viam-list li'));
    this.currency = element(by.css('dropdown-viamericas#recipient-currency-select'));

    //Buttons in Destination Information screen
    this.firstButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[3]/div[1]/div[1]/div'));
    this.secondButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[3]/div[1]/div[2]/div'));
    this.amount = element(by.id('amount'));

};

module.exports = new sendMoneyFlowPage();
