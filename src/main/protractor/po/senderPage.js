/**
 * Created by lauraalvarez on 1/19/18.
 */
'use strict';

var senderPage = function() {

    this.firsNamesender = element(by.id('first-name-sender-info'));
    this.middleNamesender = element(by.id('middle-name-sender-info'));
    this.lastnamesender = element(by.id('last-name-sender-info'));
    this.secondlastnamesender = element(by.id('second-last-name-sender-info'));
    this.birthdaysender = element(by.id("birthday-sender-info"));

    this.address1sender = element(by.id("address-1-sender-info"));
    this.moreaddressinfosender = element(by.id("address-2-sender-info"));
    this.zipcodesender = element.all(by.id('zipcode-sender-info'));
    this.phonenumbersender = element(by.id("mobile-phone-sender-info"));

    //Cities
    this.citysenderLI = element.all(by.css('dropdown-viamericas#city-select-sender-info ul.dropdown-viam-list li'));
    this.citysender = element(by.css('dropdown-viamericas#city-select-sender-info'));

    //Buttons
    this.continuesender = element(by.id("create-account-sender-info"));
    this.backsender = element(by.id("back-sender-info"));

};

module.exports = new senderPage();