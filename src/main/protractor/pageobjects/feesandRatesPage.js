/**
 * Created by lauraalvarez on 5/06/17.
 */

'use strict';

var feesandRatesPage = function() {
    //Login Form
    this.bankDepositButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[1]/div[3]/div[1]/div[1]/div'));
    this.amount = element(by.id('amount'));
    this.cashPickupButton = element(by.xpath('Cash Pickup'));
    this.feesAndRatesButton = element(by.id('send-money'));
    this.country = element.all(by.css('dropdown-viamericas#country-select ul.dropdown-viam-list li'));
    this.countries = element(by.css('dropdown-viamericas#country-select'));


};

module.exports = new feesandRatesPage();