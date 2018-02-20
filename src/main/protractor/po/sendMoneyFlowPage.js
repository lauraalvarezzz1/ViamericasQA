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
    this.currencyLI = element.all(by.css('dropdown-viamericas#recipient-currency-select-destination ul.dropdown-viam-list li'));
    this.currency = element(by.css('dropdown-viamericas#recipient-currency-select-destination'));

    //Buttons in Destination Information screen
    this.bankdepositButton = element(by.id('payment-mode-C-destination'));
    this.cashpickupButton = element(by.id('payment-mode-P-destination'));
    this.amount = element(by.id('amount'));

    //Choose a network - Dropdown
    this.chooseanetworkLI = element.all(by.css('dropdown-viamericas#national-networks-select-destination ul.dropdown-viam-list li'));
    this.chooseanetwork = element(by.css('dropdown-viamericas#national-networks-select-destination'));

    //Choose a bank - Dropdown
    this.banksLI = element.all(by.css('dropdown-viamericas#banks-select-destination ul.dropdown-viam-list li'));
    this.banks = element(by.css('dropdown-viamericas#banks-select-destination'));

    //First Bank in the list
    this.firstbankintopfive = element(by.id('set-national-network-destination'));

    this.stateLI = element.all(by.css('dropdown-viamericas#states-select-destination ul.dropdown-viam-list li'));
    this.state = element(by.css('dropdown-viamericas#states-select-destination'));
    this.cityLI = element.all(by.css('dropdown-viamericas#cities-select-destination ul.dropdown-viam-list li'));
    this.city = element(by.css('dropdown-viamericas#cities-select-destination'));
    this.regionalLI = element.all(by.css('dropdown-viamericas#regional-networks-select-destination ul.dropdown-viam-list li'));
    this.regional = element(by.css('dropdown-viamericas#regional-networks-select-destination'));

    this.amount = element(by.id('amount-destination'));
    this.continueButton = element(by.id('continue-destination'));
    this.sendmoneyReview = element(by.id('send-money'));
};

module.exports = new sendMoneyFlowPage();

