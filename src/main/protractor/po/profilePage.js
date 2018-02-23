/**
 * Created by lauraalvarez on 12/5/17.
 */


'use strict';

var profilePage = function() {

    this.firsNameProfile = element(by.id('first-name-profile'));
    this.middleNameProfile = element(by.id('middle-name-profile'));
    this.lastnameProfile = element(by.id('last-name-profile'));
    this.secondlastnameProfile = element(by.id('second-last-name-profile'));
    this.address1Profile = element(by.id("address-1-profile"));
    this.moreaddressinfoProfile = element(by.id("address-2-profile"));
    this.zipcodeProfile = element.all(by.id('zipcode-profile'));
    this.phonenumberProfile = element(by.id("phone-profile"));

    //Cities
    this.cityProfileLI = element.all(by.css('dropdown-viamericas#city-select-profile ul.dropdown-viam-list li'));
    this.cityProfile = element(by.css('dropdown-viamericas#city-select-profile'));

    //Language
    this.languageProfileLI = element.all(by.css('dropdown-viamericas#language-select-profile ul.dropdown-viam-list li'));
    this.languageProfile = element(by.css('dropdown-viamericas#language-select-profile'));

    //Buttons
    this.updateButtonProfile = element(by.id("update-profile"));
    this.accountupdatedpopup = element(by.xpath("/html/body/div[4]/div[2]/button[1]"));
    this.changepasswordProfile = element(by.id("change-password-profile"));
    this.currentpassword = element(by.id("currentPassword"));
    this.continuechangepasspopup = element(by.xpath("/html/body/div[4]/div[2]/button[1]"));
    this.newpassword = element(by.id("new-password"));
    this.newpasswordconfirm = element(by.id("new-password-confirm"));
    this.updatedpopup = element (by.xpath("/html/body/div[4]/div[2]/span"));

    //SENDER PAGE
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

module.exports = new profilePage();