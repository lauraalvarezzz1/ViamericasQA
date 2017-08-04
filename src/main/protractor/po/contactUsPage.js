/**
 * Created by juan muñoz on 30/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var contactUs = function() {
    //Contact us form
    this.name = element(by.name('name'));
    this.email = element(by.id('email'));
    this.comments = element(by.id('comments'));
    this.divMessage = element(by.css('div[ng-message=required]'));
    this.sendMessageButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button'));
};

module.exports = new contactUs();