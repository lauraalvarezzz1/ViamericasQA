/**
 * Created by lauraalvarez on 5/06/17.
 */

'use strict';

var paymentPage = function() {

    //payment method
    this.paymentButton = element(by.id('payments-account'));
    this.addpaymentButton = element(by.id('add-new-payment-payments'));
    this.bankAccountButton = element(by.id('bank-account-button-settings-payment-details'));
    this.creditDebitButton = element(by.id('credit-debit-button-settings-payment-details'));

    //Bank Account information
    this.accountNickname = element(by.id("account-nickname"));
    this.routingNumber = element(by.id("routing-number"));
    this.accountNumber = element(by.id("account-number"));
    this.accounttypeLI = element.all(by.css('dropdown-viamericas#account-type-select ul.dropdown-viam-list li'));
    this.accounttype = element(by.css('dropdown-viamericas#account-type-select'));

    //funding with credit or debit cards
    this.cardtypeLI = element.all(by.css('dropdown-viamericas#card-type-select-payment-details ul.dropdown-viam-list li'));
    this.cardtypetype = element(by.css('dropdown-viamericas#card-type-select-payment-details'));

    this.CardName = element(by.id("cardholder-name-payment-details"));
    this.cardNickName = element(by.id("card-nickname-payment-details"));
    this.cardNumber = element(by.id("card-number-payment-details"));
    this.cvvNumber = element(by.id("cvv-code-payment-details"));

    this.monthLI = element.all(by.css('dropdown-viamericas#expiration-month-select-payment-details ul.dropdown-viam-list li'));
    this.month = element(by.css('dropdown-viamericas#expiration-month-select-payment-details'));

    this.yearLI = element.all(by.css('dropdown-viamericas#expiration-year-select-payment-details ul.dropdown-viam-list li'));
    this.year = element(by.css('dropdown-viamericas#expiration-year-select-payment-details'));

    //Buttons
    this.createButton = element(by.id("create-card-account-payment-details"));
    this.backButton = element(by.id("card-go-back-payment-details"));

};

module.exports = new paymentPage();

