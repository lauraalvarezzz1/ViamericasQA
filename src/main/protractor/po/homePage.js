/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var homePage = function() {
    //Header
    this.signUpHeader = element(by.id('sign-up-header'));
    this.loginHeader = element(by.id('login-button-header'));
    this.customerServiceButton = element(by.id('contact-us-header'));
    this.myaccountheader = element (by.id('my-account-header'));

    //Banner
    this.signUpBanner = element(by.xpath('/html/body/div[3]/div/div[1]/div[2]/div/div/section[1]/ul/li[3]/div/div[2]/div/div/a[1]'));
    this.sendmoneyBanner = element(by.xpath('/html/body/div[3]/div/div[1]/div[2]/div/div/section[1]/ul/li[3]/div/div[2]/div/div/a[2]'));

    //Nav Bar
    this.sendmoneyNav = element(by.id('send-money-button-nav-bar'));
    this.feesandratesNav = element(by.id('get-a-quote-button-nav-bar'));
    this.howitworksNav = element(by.id('how-it-works-button-nav-bar'));
    this.locationsNav = element(by.id('locations-button-nav-bar'));
    this.mytransactionsNav = element(by.id('transaction-history-button-nav-bar'));
};

module.exports = new homePage();

