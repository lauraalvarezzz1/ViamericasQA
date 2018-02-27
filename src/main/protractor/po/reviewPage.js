/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var reviewPage = function() {
    this.sendMoneyButton = element(by.id('finish-transaction-review'));
    this.editRecipient = element(by.id('edit-recipient-review'));
    this.editReceiveMethod = element(by.id('edit-receive-method-review'));
    this.editSender = element(by.id('edit-sender-review'));
    this.editPayment = element(by.id('edit-payment-review'));
    this.editTransaction = element(by.id('edit-transaction-review'));

    this.secondsendMoneyButton = element(by.id('send-money-review'));
    this.backButton = element(by.id('back-review'));

    //Pencil icons
    this.step1destination = element(by.id('go-to-step-1-send-money-header'));
    this.step2sender = element(by.id('go-to-step-2-send-money-header'));
    this.step3recipient = element(by.id('go-to-step-3-send-money-header'));
    this.step3payment = element(by.id('go-to-step-4-send-money-header'));

};

module.exports = new reviewPage();