/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var sendMoneyFlowPage = function() {

    //Dropdown
    this.country = element(by.css('dropdown-viamericas#country-select-destination'));
    this.currency = element(by.css('dropdown-viamericas#recipient-currency-select-destination'));
    this.chooseanetwork = element(by.css('dropdown-viamericas#national-networks-select-destination'));
    this.banks = element(by.css('dropdown-viamericas#banks-select-destination'));
    this.state = element(by.css('dropdown-viamericas#states-select-destination'));
    this.city = element(by.css('dropdown-viamericas#cities-select-destination'));
    this.regional = element(by.css('dropdown-viamericas#regional-networks-select-destination'));

    //Dropdown LIST
    this.countryLI = element.all(by.css('dropdown-viamericas#country-select-destination ul.dropdown-viam-list li'));
    this.currencyLI = element.all(by.css('dropdown-viamericas#recipient-currency-select-destination ul.dropdown-viam-list li'));
    this.chooseanetworkLI = element.all(by.css('dropdown-viamericas#national-networks-select-destination ul.dropdown-viam-list li'));
    this.banksLI = element.all(by.css('dropdown-viamericas#banks-select-destination ul.dropdown-viam-list li'));
    this.stateLI = element.all(by.css('dropdown-viamericas#states-select-destination ul.dropdown-viam-list li'));
    this.cityLI = element.all(by.css('dropdown-viamericas#cities-select-destination ul.dropdown-viam-list li'));
    this.regionalLI = element.all(by.css('dropdown-viamericas#regional-networks-select-destination ul.dropdown-viam-list li'));

    //Buttons in Destination Information screen
    this.bankdepositButton = element(by.id('payment-mode-C-destination'));
    this.cashpickupButton = element(by.id('payment-mode-P-destination'));
    this.amount = element(by.id('amount'));
    this.firstbankintopfive = element(by.id('set-national-network-destination'));
    this.amount = element(by.id('amount-destination'));
    this.continueButton = element(by.id('continue-destination'));
    this.sendmoneyReview = element(by.id('send-money'));
};

module.exports = new sendMoneyFlowPage();

