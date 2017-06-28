/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Creating a new recipient with bank account', function () {

    beforeEach(function () {
        browser.get('https://test.govianex.com/#/');
        homePage = require('../../po/homePage');
        recipientsPage = require('../../po/recipientsPage');
        loginPage = require('../../po/loginPage');

    });


    it('Creating a new Recipient', function () {

        homePage.logInButtonXpath.click();

        //Login
        loginPage.userName.sendKeys("viamericas.testing@gmail.com");
        loginPage.password.sendKeys("Viamericas123");
        loginPage.loginButton.click();
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        browser.waitForAngular();

        //Go to recipients
        homePage.gomyaccount.click();
        browser.sleep(6000);
        homePage.gorecipients.click();
        recipientsPage.createButton.click();

        //Complete the fields

        recipientsPage.first_name.sendKeys("Testing");
        recipientsPage.middle_name_optional.sendKeys("Testing");
        recipientsPage.last_name.sendKeys("Testing");
        recipientsPage.secondlast_name_optional.sendKeys("Testing");
        recipientsPage.mobile_phone_optional.sendKeys(numbergenerator(312000000, 312999999));
        recipientsPage.email_optional.sendKeys("Testing" + numbergenerator(1, 9999) + "@gmail.com");
        recipientsPage.address_line1.sendKeys("Street 5 - Testing Address Line1");

        recipientsPage.month.sendKeys(numbergenerator(0, 1));
        if (recipientsPage.month >= 1) {
            recipientsPage.month.sendKeys(numbergenerator(0, 2));
        } else {
            recipientsPage.month.sendKeys(numbergenerator(1, 9));
        }

        recipientsPage.year.sendKeys(numbergenerator(1900, 1998));


        if (recipientsPage.month >= 02) {
            recipientsPage.day.sendKeys(numbergenerator(0, 2));
            if (recipientsPage.day >= 0 || Day >= 1) {
                recipientsPage.day.sendKeys(numbergenerator(1, 9));
            } else {
                recipientsPage.day.sendKeys(numbergenerator(0, 8));
            }
        } else {
            recipientsPage.day.sendKeys(numbergenerator(0, 3));
            if (recipientsPage.month == 04 || recipientsPage.month == 06 || recipientsPage.month == 09 || recipientsPage.month == 11 && recipientsPage.day == 3) {
                recipientsPage.day.sendKeys(numbergenerator(0, 0));
            } else {
                recipientsPage.day.sendKeys(numbergenerator(1, 9));
            }
        }

        var selectcountry =
            recipientsPage.countryLI.count().then(function (countCountries) {
                var countryselected = Math.floor((Math.random() * countCountries) + 1);
                recipientsPage.country.element(by.css('input#country-select')).click();
                recipientsPage.country.element(by.css('ul.dropdown-viam-list li:nth-child(' + countryselected + ')')).click();

                if (countryselected == 32) {
                    recipientsPage.zipcode.sendKeys("33233");
                } else if (countryselected == 5) {
                    recipientsPage.cpfbrazil.sendKeys(numbergenerator(10000000000, 99999999999));
                } else {
                    console.log(countryselected);
                }

                if (countryselected == 2 || countryselected == 6 || countryselected == 17 || countryselected == 29) {
                    recipientsPage.aditionalfieldAUS_CA_HG_SW.sendKeys(numbergenerator(000000000, 99999999999));
                } else if (countryselected == 32) {
                    recipientsPage.aditionalfieldUS.sendKeys("021000021");
                } else if (countryselected == 18) {
                    recipientsPage.aditionalfieldIND.sendKeys("ABCD1234567");
                } else if (countryselected == 5) {
                    recipientsPage.aditionalfieldBRA.sendKeys(numbergenerator(0000, 99999999999));
                }
            });
        browser.sleep(2000);

        var selectstate =
            recipientsPage.staterLI.count().then(function (countstates) {
                var ran = Math.floor((Math.random() * countstates) + 1);
                recipientsPage.stater.element(by.css('input#state-select')).click();
                recipientsPage.stater.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log("States available: " + ran);
            });

        var selectcity =
            recipientsPage.cityLI.count().then(function (countcities) {
                var ran = Math.floor((Math.random() * countcities) + 1);
                recipientsPage.city.element(by.css('input#city-select')).click();
                recipientsPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log("Cities available: " + ran);
            });

        browser.executeScript('window.scrollTo(0,1000);').then(function () {

            var selectcurrency =
                recipientsPage.currencyLI.count().then(function (countcurrencies) {
                    var currency = Math.floor((Math.random() * countcurrencies) + 1);
                    recipientsPage.currency.element(by.css('input#currency-select')).click();
                    recipientsPage.currency.element(by.css('ul.dropdown-viam-list li:nth-child(' + currency + ')')).click();
                });
        });

        var countbanks =
            recipientsPage.chooseabankLI.count().then(function (count) {
                var bank1 = Math.floor((Math.random() * count) + 1);
                recipientsPage.chooseabank.element(by.css('input#bank-select')).click();
                recipientsPage.chooseabank.element(by.css('ul.dropdown-viam-list li:nth-child(' + bank1 + ')')).click();
            });

        recipientsPage.accountnumber.sendKeys(numbergenerator(1, 3000));
        recipientsPage.accountholdername.sendKeys("Testing");

        var selectaccounttype2 =
            recipientsPage.accounttypeLI.count().then(function (countaccounttype) {
                var ran = Math.floor((Math.random() * countaccounttype) + 1);
                recipientsPage.accounttype.element(by.css('input#account-type-select')).click();
                recipientsPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            });

        recipientsPage.createRecipientButton.click();
        browser.sleep(5000);
        recipientsPage.closepopup.click();
    });
});

numbergenerator = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};
