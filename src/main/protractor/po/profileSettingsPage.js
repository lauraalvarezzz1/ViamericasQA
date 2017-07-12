/**
 * Created by juan muñoz on 30/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var profileSettings = function() {
    //Contact us form
    this.firstName = element(by.id('first-name'));
    this.middleName = element(by.id('middle-name'));
    this.lastName = element(by.id('last-name'));
    this.secondLastName = element(by.id('second-last-name'));
    this.phone = element(by.id('phone'));
    this.address1 = element(by.id('address-1'));
    this.address2 = element(by.id('address-2'));

    this.preferredCountryLI = element.all(by.css('dropdown-viamericas#preferred-country-select ul.dropdown-viam-list li'));
    this.preferredCountry = element(by.css('dropdown-viamericas#preferred-country-select'));

    this.programsLI = element.all(by.css('dropdown-viamericas#partner-id-select ul.dropdown-viam-list li'));
    this.programs = element(by.css('dropdown-viamericas#partner-id-select'));

    this.unionNameLI = element.all(by.css('dropdown-viamericas#affiliate-name-select ul.dropdown-viam-list li'));
    this.unionName = element(by.css('dropdown-viamericas#affiliate-name-select'));

    this.updateButton = element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/div/form/div[18]/button[1]'));
};

module.exports = new profileSettings();