/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Creating a new recipient', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function () {
        homepage = require('../../../po/homePage');
        recipientPage = require('../../../po/recipientsPage');
        loginpage = require('../../../po/loginPage');
    });

    it('Log in', function () {
        homepage.logInButtonXpath.click();
        loginpage.userName.sendKeys("viamericas.testing@gmail.com");
        loginpage.password.sendKeys("Viamericas123");
        loginpage.loginButton.click();
    });

    it('Go to Recipients', function () {
        browser.ignoreSynchronization = true;
        homepage.gomyaccount.isPresent().then(function () {
            browser.sleep(2000);
            homepage.gomyaccount.click();
        });
        homepage.gorecipients.click();
    });
    it('Updating an existing recipient', function () {
        recipientPage.editButton.isPresent().then(function () {
            recipientPage.editButton.click();

        });

        //Complete the fields
        recipientPage.first_name.sendKeys(" Updating");
        recipientPage.middle_name_optional.sendKeys(" Updating");
        recipientPage.last_name.sendKeys(" Updating");
        recipientPage.secondlast_name_optional.sendKeys(" Updating");

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
            recipientPage.stateLI.count().then(function (countstates) {
                var ran = Math.floor((Math.random() * countstates) + 1);
                recipientPage.state.element(by.css('input#state-select,#dropdown-input ')).click();
                recipientPage.state.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            }, 3000);

        var selectcity =
            recipientPage.cityLI.count().then(function (countcities) {
                var ran = Math.floor((Math.random() * countcities) + 1);
                recipientPage.city.element(by.css('input#city-select,#dropdown-input')).click();
                recipientPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            });
    });

    it('Click on update recipient', function () {
        recipientPage.updateRecipientButton.isPresent().then(function () {
            recipientPage.updateRecipientButton.click();
        });

        browser.pause();
    });

});

numbergenerator = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};
