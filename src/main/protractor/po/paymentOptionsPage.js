/**
 * Created by lauraalvarez on 5/06/17.
 */

'use strict';

var paymentOptionsPage = function() {
    //payment method
    this.paymentMethod = element(by.id("method"));

    //funding with bank accounts
    this.bankAccountName = element(by.id("holder-name"));

    //Plaid
    this.addaccountplaid =element(by.id("plaid-link"));
    this.bankwithplaid = element (by.xpath('//*[@id="plaid-link-container"]/div/div[1]/div/div/div[2]/div[2]/div/li[1]/div'));
    this.usernameplaid = element (by.id("username"));
    this.passwordplaid = element (by.id("password"));

    //Bank Account information
    this.accountNickname = element(by.id("account-nickname"));
    this.routingNumber = element(by.id("routing-number"));
    this.accountNumber = element(by.id("account-number"));
    this.accounttypeLI = element.all(by.css('dropdown-viamericas#account-type-select ul.dropdown-viam-list li'));
    this.accounttype = element(by.css('dropdown-viamericas#account-type-select'));

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
    this.popUpOkButton = element(by.partialButtonText("OK"));
    this.cardHolderName = element(by.id("card-holder-name"));
    this.extraAddressCheckBox = element(by.css("icheckbox_square-blue"));

};

module.exports = new paymentOptionsPage();

