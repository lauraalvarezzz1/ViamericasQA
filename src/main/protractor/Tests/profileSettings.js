/**
 * Created by juan muñoz on 30/06/17.
 */

describe('Profile settings testing Web App', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/');
        profileSettingsPage = require('../po/profileSettingsPage');
        homePage = require('../po/homePage');
        loginPage = require('../po/loginPage');
    });

    it('Log in', function() {
        homePage.logInButtonXpath.click();
        //Login
        loginPage.userName.sendKeys("viamericas.testing@gmail.com");
        loginPage.password.sendKeys("Viamericas123");
        loginPage.loginButton.click();
        //expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/sendmoney/destination');
    });

    it('Updating profile settings', function() {
        browser.sleep(8000);
        browser.ignoreSynchronization = true;

        homePage.gomyaccount.isPresent().then(function() {
            homePage.gomyaccount.click();
            profileSettingsPage.middleName.clear().then(function() {
                profileSettingsPage.middleName.sendKeys("Testing");
            });

            profileSettingsPage.secondLastName.clear().then(function() {
                profileSettingsPage.secondLastName.sendKeys("Testing");
            });

            profileSettingsPage.phone.clear().then(function() {
                profileSettingsPage.phone.sendKeys("4880890");
            });

            profileSettingsPage.address1.clear().then(function() {
                profileSettingsPage.address1.sendKeys("Testing address");
            });

            profileSettingsPage.address2.clear().then(function() {
                profileSettingsPage.address2.sendKeys("Testing address 2");
            });

            var countryOrNot = Math.floor((Math.random() * 2) + 1);
            console.log("countryOrNot: " + countryOrNot);

            if (countryOrNot == 1) {
                var selectPreferredCountry =
                    profileSettingsPage.preferredCountryLI.count().then(function(countCountries) {
                        var ran = Math.floor((Math.random() * countCountries) + 1);
                        profileSettingsPage.preferredCountry.element(by.css('input#preferred-country-select,#dropdown-input')).click();
                        profileSettingsPage.preferredCountry.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                        console.log("Countries available: " + ran);
                    });
            }

            var programOrNot = Math.floor((Math.random() * 2) + 1);
            console.log("programOrNot: " + programOrNot);

            if (programOrNot == 1) {
                var selectProgram =
                    profileSettingsPage.programsLI.count().then(function(countPrograms) {
                        var ran = Math.floor((Math.random() * countPrograms) + 1);
                        profileSettingsPage.programs.element(by.css('input#partner-id-select,#dropdown-input')).click();
                        profileSettingsPage.programs.element(by.css('ul.dropdown-viam-list li:nth-child(' + 1 + ')')).click();
                        console.log("Programs available: " + ran);
                    });

                var selectUnionName =
                    profileSettingsPage.unionNameLI.count().then(function(countUnions) {
                        var ran = Math.floor((Math.random() * countUnions) + 1);
                        profileSettingsPage.unionName.element(by.css('input#affiliate-name-select,#dropdown-input')).click();
                        profileSettingsPage.unionName.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                        console.log("Unions available: " + ran);
                    });
            }


            browser.sleep(2000);
            profileSettingsPage.updateButton.click();
            browser.sleep(2000);
            //expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/settings/profile');
        });

    });
});

numbergenerator = function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
};