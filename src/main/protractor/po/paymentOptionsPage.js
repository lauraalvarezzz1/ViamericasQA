/**
 * Created by lauraalvarez on 5/06/17.
 */

'use strict';

var paymentOptionsPage = function() {
    //payment method
    this.paymentMethod = element(by.id("method"));

    //funding with bank accounts
    this.bankAccountName = element(by.id("holder-name"));
    this.accountNickname = element(by.id("account-nickname"));
    this.routingNumber = element(by.id("routing-number"));
    this.accountNumber = element(by.id("account-number"));
    this.accounttypeLI = element.all(by.css('dropdown-viamericas#account-types-select ul.dropdown-viam-list li'));
    this.accounttype = element(by.css('dropdown-viamericas#account-types-select'));

    //funding with credit or debit cards
    this.creditCardName = element(by.id("cardholder-name"));
    this.cardNickName = element(by.id("card-nickname"));
    this.cardNumber = element(by.id("card-number"));
    this.cvvNumber = element(by.id("cvv-code"));
    this.month = element(by.xpath(".//*[@placeholder='Month']"));
    this.year = element(by.xpath(".//*[@placeholder='Year']"));

    //continue button
    this.continueButton = element(by.id("continue"));

};

module.exports = new paymentOptionsPage();

