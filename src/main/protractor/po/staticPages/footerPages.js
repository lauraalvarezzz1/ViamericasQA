/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var contactUs = function() {
    //Contact us form
    this.contactuslink = element (by.id('contact-us-footer'));
    this.name = element(by.name('name'));
    this.email = element(by.id('email'));
    this.comments = element(by.id('comments'));
    this.divMessage = element(by.css('div[ng-message=required]'));
    this.sendMessageButton = element(by.id('send-message'));
};

var staticPages = function() {
    //About us form
    this.aboutuslink = element(by.xpath('about-us-footer'));
    this.unoRanked = element(by.xpath('//*[@id="yui_3_16_0_ym19_1_1485211113917_117706"]/p[1]/a'));
    this.InternationalFinanceCorporation = element(by.xpath('//*[@id="yui_3_16_0_ym19_1_1485211113917_117706"]/p[2]/a[1]'));
    this.april = element(by.xpath('//*[@id="yui_3_16_0_ym19_1_1485211113917_117706"]/p[2]/a[2]'));

    //Compliance
    this.compliancelink = element(by.id('compliance-footer'));
    this.stateComLI = element.all(by.css('dropdown-viamericas#state ul.dropdown-viam-list li'));
    this.stateCom = element(by.css('dropdown-viamericas#state'));

    //File Complaint
    this.fileacomplaintlink = element(by.id('file-a-complaint-footer'));
    this.alaskaCustomers = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/div/ul[2]/li[1]/a'));
    this.texasCustomers = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/div/ul[9]/li[2]/a'));
    this.washingtonCustomersbyemail = element(by.xpath('/html/body/div[3]/div/div[1]/div[2]/div/div/div/div/ul[12]/li[1]/a'));
    this.washingtonCustomersonline = element(by.xpath('/html/body/div[3]/div/div[1]/div[2]/div/div/div/div/ul[12]/li[2]/a'));

    //Leadership - Careers - News - FAQ - TC - PP
    this.leadershiplink = element(by.id('leadership-footer'));
    this.leadershiplink = element(by.id('careers-footer'));
    this.newslink = element(by.id('news-footer'));
    this.faqslink = element(by.id('faq-footer'));
    this.pplink = element(by.id('privacy-policy-footer'));
    this.tclink = element(by.id('terms-and-conditions-footer'));
};

module.exports = new contactUs();
module.exports = new staticPages();

