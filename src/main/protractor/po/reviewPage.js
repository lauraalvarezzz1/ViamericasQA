/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var reviewPage = function() {
    //Login Form
    this.sendMoneyButton = element(by.id('send-money'));
    this.editRecipient = element(by.id('edit-recipient'));
    this.editReceiveMethod = element(by.id('edit-receive-method'));
    this.editSender = element(by.id('edit-sender'));
    this.editPayment = element(by.id('edit-payment'));
    this.editTransaction = element(by.id('edit-transaction'));

};

module.exports = new reviewPage();