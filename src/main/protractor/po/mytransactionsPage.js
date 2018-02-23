/**
 * Created by lauraalvarez on 12/02/18.
 */
'use strict';

var mytransactionsPage = function() {

    this.newtransactionButton = element(by.id('new-transaction-transaction-history'));

    this.statustransactionsLI = element.all(by.css('dropdown-viamericas#status-select-transaction-history ul.dropdown-viam-list li'));
    this.statustransactions = element(by.css('dropdown-viamericas#status-select-transaction-history'));
    this.quicksendButton = element(by.id("repeat-transaction-transaction-history"));

};

module.exports = new mytransactionsPage();