/**
 * Created by lauraalvarez on 5/06/17.
 */

'use strict';

var feesandRatesPage = function() {
    this.bankDepositButton = element(by.id('select-payment-C-fees-rates'));
    this.cashPickupButotn = element(by.id('select-payment-P-fees-rates'));
    this.amount = element(by.id('amount-fees-rates'));
    this.receive = element(by.id('receive-amount-fees-rates'));
    this.countryLI = element.all(by.css('section#country-amount dropdown-viamericas#countries-select-fees-rates ul.dropdown-viam-list li'));
    this.country = element(by.css('section#country-amount dropdown-viamericas#countries-select-fees-rates'));
    this.sendmoneyButton = element(by.id('send-money-fees-rates'));
};

module.exports = new feesandRatesPage();
