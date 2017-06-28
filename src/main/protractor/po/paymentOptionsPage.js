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

    //My account payment
    this.addNewAccountButton = element(by.id("add-new-account"));
    this.bankAccountButton = element(by.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/div[1]/div[1]/div/div[1]"));
    this.creditDebitButton = element(by.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[2]/div/div/div[3]/div[1]/div[2]/div/div[1]"));
    this.bankAccountNickName = element(by.id("nickname"));
    this.createAccountButton = element(by.id("create-account"));
    this.typeLiMyAccount = element.all(by.css('dropdown-viam#account-type-select ul.dropdown-viam-list li'));
    this.typeAccount = element(by.css('dropdown-viam#account-type-select'));

};

module.exports = new paymentOptionsPage();

