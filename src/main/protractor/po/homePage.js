/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var homePage = function() {
    //Login Form
    this.sendMoneyButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div/ul/li[1]/a'));
    this.feesAndRatesButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div/ul/li[3]/a'));
    this.howItWorksButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div/ul/li[4]/a'));
    this.locationsButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div/ul/li[5]/a'));
    this.signUpButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/button[1]'));
    this.logInButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/button[2]'));
    this.signUpButtonXpath = element(by.xpath('/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/button[1]'));
    this.logInButtonXpath = element(by.xpath('/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[3]/button[2]'));
    this.customerServiceButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[2]/a'));
    this.aboutUs = element(by.xpath('/html/body/div[2]/div/div[2]/div[1]/footer/div/nav/ul[1]/li[1]/a'));
    this.Compliance = element(by.xpath('/html/body/div[2]/div/div[2]/div[1]/footer/div/nav/ul[1]/li[6]/a'));
    this.fileComplaint = element(by.xpath('/html/body/div[2]/div/div[2]/div[1]/footer/div/nav/ul[2]/li[1]/a'));
    this.payerNetwork = element(by.xpath('/html/body/div[2]/div/div[2]/div[1]/footer/div/nav/ul[1]/li[5]/a'));

    //Logged in
    this.gomyaccount = element(by.linkText('My Account'));
    this.gorecipients = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[1]/ul/li[2]/a'));
    this.goToPayments = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div[1]/ul/li[3]/a'));
    this.loading = element(by.xpath('/html/body/loading-viamericas/div/iframe'));
};

module.exports = new homePage();