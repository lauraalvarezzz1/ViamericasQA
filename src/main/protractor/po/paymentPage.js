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

    //SEND MONEY FLOW"));
    this.addnewbankaccountButton = element(by.id("add-new-account-bank"));
    this.savedbankaccountLI = element.all(by.css('dropdown-viamericas#saved-bank-select-bank ul.dropdown-viam-list li'));
    this.savedbankaccount = element(by.css('dropdown-viamericas#saved-bank-select-bank'));

    this.addnewcardButton = element(by.id("add-new-card"));
    this.savedcreditcardsLI = element.all(by.css('dropdown-viamericas#saved-credit-select ul.dropdown-viam-list li'));
    this.savedcreditcards = element(by.css('dropdown-viamericas#saved-credit-select'));

    this.cardholdername = element(by.id('cardholder-name-card'));
    this.cardnickname = element(by.id('card-nickname-card'));
    this.cardnumber = element(by.id('card-number-card'));

    this.month_sendLI = element.all(by.css('dropdown-viamericas#expiration-month-select-card ul.dropdown-viam-list li'));
    this.month_send = element(by.css('dropdown-viamericas#expiration-month-select-card'));

    this.year_sendLI = element.all(by.css('dropdown-viamericas#expiration-year-select-card ul.dropdown-viam-list li'));
    this.year_send = element(by.css('dropdown-viamericas#expiration-year-select-card'));

    this.cvv_send = element(by.id('cvv-code-card'));

    this.bankaccountcheckbox = element(by.id("checkbox-funding-A-funding"));
    this.debitcardcheckbox = element(by.id("checkbox-funding-D-funding"));
    this.creditcardcheckbox = element(by.id("checkbox-funding-K-funding"));

    this.continueButton_send = element(by.id("continue-funding"));
};

module.exports = new paymentPage();

