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

    this.countryLI = element.all(by.css('dropdown-viamericas#country-select-destination ul.dropdown-viam-list li'));
    this.country = element(by.css('dropdown-viamericas#country-select-destination'));

    //Currency
    this.currencyLI = element.all(by.css('dropdown-viamericas#recipient-currency-select ul.dropdown-viam-list li'));
    this.currency = element(by.css('dropdown-viamericas#recipient-currency-select'));

    //Buttons in Destination Information screen
    this.bankdepositButton = element(by.id('payment-mode-C-destination'));
    this.cashpickupButton = element(by.id('payment-mode-P-destination'));
    this.amount = element(by.id('amount'));

    //Choose a different bank - Dropdown
    this.banksLI = element.all(by.css('dropdown-viamericas#undefined ul.dropdown-viam-list li'));
    this.banks = element(by.css('dropdown-viamericas#undefined'));

    //First Bank in the list
    this.firstbankintopfive = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[5]/div/ul/li[1]/label'));

    this.stateLI = element.all(by.css('dropdown-viamericas#states-select ul.dropdown-viam-list li'));
    this.state = element(by.css('dropdown-viamericas#states-select'));
    this.cityLI = element.all(by.css('dropdown-viamericas#cities-select ul.dropdown-viam-list li'));
    this.city = element(by.css('dropdown-viamericas#cities-select'));
    this.regionalLI = element.all(by.css('dropdown-viamericas#regional-networks-select ul.dropdown-viam-list li'));
    this.regional = element(by.css('dropdown-viamericas#regional-networks-select'));

    this.amount = element(by.id('amount'));
    this.continueButton = element(by.id('continue'));
    this.sendmoneyReview = element(by.id('send-money'));
};

module.exports = new sendMoneyFlowPage();

