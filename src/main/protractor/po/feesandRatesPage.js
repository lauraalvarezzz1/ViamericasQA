/**
 * Created by lauraalvarez on 5/06/17.
 */

'use strict';

var feesandRatesPage = function() {
    this.firstButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[1]/div[3]/div[1]/div[1]/div'));
    this.secondButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[1]/div[3]/div[1]/div[2]/div'));
    this.amount = element(by.id('amount'));
    this.receive = element(by.id('receive-amount'));
    this.cashPickupButton = element(by.xpath('Cash Pickup'));
    this.sendmoneyButton = element(by.id('send-money'));
    this.countryLI = element.all(by.css('section#country-amount dropdown-viamericas#countries-select ul.dropdown-viam-list li'));
    this.country = element(by.css('section#country-amount dropdown-viamericas#countries-select'));
};

module.exports = new feesandRatesPage();
