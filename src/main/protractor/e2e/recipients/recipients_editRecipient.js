/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Creating a new recipient', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function () {
        browser.get('https://dev.govianex.com/#/');
        homePage = require('../../po/homePage');
        recipientPage = require('../../po/recipientsPage');
        loginPage = require('../../po/loginPage');
    });

    it('Log in', function () {
        homePage.logInButtonXpath.click();
        loginPage.userName.sendKeys("viamericas.testing@gmail.com");
        loginPage.password.sendKeys("Viamericas123");
        loginPage.loginButton.click();
    });

    it('Go to Recipients', function () {
        browser.ignoreSynchronization = true;
        homePage.gomyaccount.isPresent().then(function () {
            homePage.gomyaccount.click();
        });
        homePage.gorecipients.click();
    });

    it('Go to create a new recipient', function () {
        recipientPage.createButton.isPresent().then(function () {
            recipientPage.createButton.click();
        });

        //Complete the fields
        recipientPage.first_name.sendKeys("Testing");
        recipientPage.middle_name_optional.sendKeys("Testing");
        recipientPage.last_name.sendKeys("Testing");
        recipientPage.secondlast_name_optional.sendKeys("Testing");
        recipientPage.mobile_phone_optional.sendKeys(numbergenerator(312000000, 312999999));
        recipientPage.email_optional.sendKeys("Testing" + numbergenerator(1, 9999) + "@gmail.com");
        recipientPage.address_line1.sendKeys("Street 5 - Testing Address Line1");

        recipientPage.month.sendKeys(numbergenerator(0, 1));
        if (recipientPage.month >= 1) {
            recipientPage.month.sendKeys(numbergenerator(0, 2));
        } else {
            recipientPage.month.sendKeys(numbergenerator(1, 9));
        }

        recipientPage.year.sendKeys(numbergenerator(1900, 1998));

        if (recipientPage.month >= 02) {
            recipientPage.day.sendKeys(numbergenerator(0, 2));
            if (recipientPage.day >= 0 || Day >= 1) {
                recipientPage.day.sendKeys(numbergenerator(1, 9));
            } else {
                recipientPage.day.sendKeys(numbergenerator(0, 8));
            }
        } else {
            recipientPage.day.sendKeys(numbergenerator(0, 3));
            if (recipientPage.month == 04 || recipientPage.month == 06 || recipientPage.month == 09 || recipientPage.month == 11 && recipientPage.day == 3) {
                recipientPage.day.sendKeys(numbergenerator(0, 0));
            } else {
                recipientPage.day.sendKeys(numbergenerator(1, 9));
            }
        }

        var selectcountry =
            recipientPage.countryLI.count().then(function (countCountries) {
                var ran = Math.floor((Math.random() * countCountries) + 1);
                recipientPage.country.element(by.css('input#country-select,#dropdown-input')).click();
                recipientPage.country.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                if (ran == 32) {
                    recipientPage.zipcode.sendKeys("33233");
                }
            });

        var selectstate =
            recipientPage.staterLI.count().then(function (countstates) {
                var ran = Math.floor((Math.random() * countstates) + 1);
                recipientPage.stater.element(by.css('input#state-select,#dropdown-input')).click();
                recipientPage.stater.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();

            });

        var selectcity =
            recipientPage.cityLI.count().then(function (countcities) {
                var ran = Math.floor((Math.random() * countcities) + 1);
                recipientPage.city.element(by.css('input#city-select,#dropdown-input')).click();
                recipientPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            });
    });

    it('Click on create recipient and close popup', function () {
        recipientPage.createRecipientButton.isPresent().then(function () {
            recipientPage.createRecipientButton.click();
        });

        recipientPage.closepopup.click();
    });

    it('Click on create recipient and close popup', function () {
        recipientPage.createRecipientButton.isPresent().then(function () {
            recipientPage.createRecipientButton.click();
        });

        recipientPage.closepopup.click();
    });
});

numbergenerator = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};
