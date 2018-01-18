/**
 * Created by lauraalvarez on 6/19/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var signupPage = function() {
    //Sign up email/password
    this.firstname = element(by.css('section#pre-register-inputs input#firstname'));
    this.lastname = element(by.id('lastName'));
    this.mobilephone = element(by.id('cellphone'));
    this.email = element(by.id('email'));
    this.password = element(by.id('password'));
    this.signupButton = element(by.id('sign-up'));
    this.loginbutton = element(by.id('login'));
    this.justwantsignup = element(by.id('just-sign-up'));

    //Sign up form
    this.first_name = element(by.id('first-name'));
    this.middle_name_optional = element(by.id('middle-name'));
    this.last_name = element(by.id('last-name'));
    this.secondlast_name_optional = element(by.id('second-last-name'));
    this.mobile_phone_optional = element(by.id('mobile-phone'));
    this.address_line1 = element(by.id('address-1'));
    this.month = element(by.xpath(".//*[@placeholder='Month']"));
    this.day = element(by.xpath(".//*[@placeholder='Day']"));
    this.year = element(by.xpath(".//*[@placeholder='Year']"));
    this.zipcode = element(by.id('zipcode'));

    this.cityLI = element.all(by.css('dropdown-viamericas#city-select ul.dropdown-viam-list li'));
    this.city = element(by.css('dropdown-viamericas#city-select'));

    this.programLI = element.all(by.css('dropdown-viamericas#partner-id-select ul.dropdown-viam-list li'));
    this.program = element(by.css('dropdown-viamericas#partner-id-select'));

    this.unionNameLI = element.all(by.css('dropdown-viamericas#affiliate-name-select ul.dropdown-viam-list li'));
    this.unionName = element(by.css('dropdown-viamericas#affiliate-name-select'));

    this.createAccountButton = element(by.id('create-account'));
};

module.exports = new signupPage();