/**
 * Created by lauraalvarez on 5/06/17.
 */

'use strict';

var paymentPage = function() {

    //payment method
    this.paymentButton = element(by.partialButtonText('Payments'));
    this.addpaymentButton = element(by.partialButtonText('Add a Payment'));
    this.bankAccountButton = element(by.id('bank-account-button-settings'));
    this.creditDebitButton = element(by.id('credit-debit-button-settings'));

    //funding with bank accounts
    this.bankAccountName = element(by.id("holder-name"));

    //Plaid
    this.addaccountplaid =element(by.id("plaid-link"));
    this.bankwithplaid = element (by.css('#plaid-link-container .Overlay .App__content .Pane.InstitutionSelectPane .Pane__content li[data-institution="wells"]'));

    this.usernameplaid = element (by.id("username"));
    this.passwordplaid = element (by.id("password"));

    //Bank Account information
    this.accountNickname = element(by.id("account-nickname"));
    this.routingNumber = element(by.id("routing-number"));
    this.accountNumber = element(by.id("account-number"));
    this.accounttypeLI = element.all(by.css('dropdown-viamericas#account-type-select ul.dropdown-viam-list li'));
    this.accounttype = element(by.css('dropdown-viamericas#account-type-select'));

    //funding with credit or debit cards
    this.cardtypeLI = element.all(by.css('dropdown-viamericas#card-type ul.dropdown-viam-list li'));
    this.cardtypetype = element(by.css('dropdown-viamericas#card-type'));
    this.creditCardName = element(by.id("cardholder-name"));
    this.cardNickName = element(by.id("card-nickname"));
    this.cardNumber = element(by.id("card-number"));
    this.cvvNumber = element(by.id("cvv-code"));
    this.month = element(by.xpath(".//*[@placeholder='Month']"));
    this.year = element(by.xpath(".//*[@placeholder='Year']"));

    //continue button
    this.createButton = element(by.id("create-card-account"));

};

module.exports = new paymentPage();

