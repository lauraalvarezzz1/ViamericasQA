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
    this.changepasswordProfile = element(by.id("change-password-profile"));

};

module.exports = new profilePage();