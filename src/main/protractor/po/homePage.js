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
    this.signUpBanner = element(by.id('sign-up-banner-home'));
    this.sendmoneyBanner = element(by.id('send-money-2-banner-home'));

    //Nav Bar
    this.sendmoneyNav = element(by.id('send-money-button-nav-bar'));
    this.feesandratesNav = element(by.id('get-a-quote-button-nav-bar'));
    this.howitworksNav = element(by.id('how-it-works-button-nav-bar'));
    this.locationsNav = element(by.id('locations-button-nav-bar'));
    this.mytransactionsNav = element(by.id('transaction-history-button-nav-bar'));

    //Buttons in the main home page
    this.feesandratesButton = element(by.id('get-quote-desktop-home'));

    this.signUpsecondsection = element(by.id('sign-up-home'));
    this.sendmoneysecondsection= element(by.id('send-money-home'));

    this.signUpthirdsection = element(by.id('sign-up-middle-home'));
    this.sendmoneythirdsection= element(by.id('send-money-middle-home'));

    //Download vianex app links
    this.applelogo = element(by.id('app-store-home'));
    this.applelogo = element(by.id('play-store-home'));

};

module.exports = new homePage();

