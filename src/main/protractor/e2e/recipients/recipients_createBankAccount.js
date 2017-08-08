/**
 * Created by lauraalvarez on 5/06/17.
 */

describe('Recipients Testing - Creating a new recipient with bank account', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function () {
        homepage = require('../../po/homePage');
        recipientPage = require('../../po/recipientsPage');
        loginpage = require('../../po/loginPage');
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
    it('Go to create a new Recipient', function () {
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
                var countryselected = Math.floor((Math.random() * countCountries) + 1);
                recipientPage.country.element(by.css('input#country-select,#dropdown-input')).click();
                recipientPage.country.element(by.css('ul.dropdown-viam-list li:nth-child(' + countryselected + ')')).click();

                if (countryselected == 32) {
                    recipientPage.zipcode.sendKeys("33233");
                } else if (countryselected == 5) {
                    recipientPage.cpfbrazil.sendKeys(numbergenerator(10000000000, 99999999999));
                } else {
                    console.log(countryselected);
                }

                if (countryselected == 2 || countryselected == 6 || countryselected == 17 || countryselected == 29) {
                    recipientPage.aditionalfieldAUS_CA_HG_SW_UK.sendKeys(numbergenerator(000000000, 99999999999));
                } else if (countryselected == 32) {
                    recipientPage.aditionalfieldUS.sendKeys("021000021");
                } else if (countryselected == 18) {
                    recipientPage.aditionalfieldIND.sendKeys("ABCD1234567");
                } else if (countryselected == 5) {
                    recipientPage.aditionalfieldBRA.sendKeys(numbergenerator(0000, 99999999999));
                }
            });

        var selectstate =
            recipientPage.stateLI.count().then(function (countstates) {
                var ran = Math.floor((Math.random() * countstates) + 1);
                recipientPage.state.element(by.css('input#state-select,#dropdown-input ')).click();
                recipientPage.state.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log("States available: " + ran);
            });

        var selectcity =
            recipientPage.cityLI.count().then(function (countcities) {
                var ran = Math.floor((Math.random() * countcities) + 1);
                recipientPage.city.element(by.css('input#city-select,#dropdown-input ')).click();
                recipientPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log("Cities available: " + ran);
            });

        browser.executeScript('window.scrollTo(0,1000);').then(function () {

            var selectcurrency =
                recipientPage.currencyLI.count().then(function (countcurrencies) {
                    var currency = Math.floor((Math.random() * countcurrencies) + 1);
                    recipientPage.currency.element(by.css('input#currency-select,#dropdown-input ')).click();
                    recipientPage.currency.element(by.css('ul.dropdown-viam-list li:nth-child(' + currency + ')')).click();
                });
        });

        browser.sleep(2000);
        var countbanks =
            recipientPage.chooseabankLI.count().then(function (count) {
                var bank1 = Math.floor((Math.random() * count) + 1);
                recipientPage.chooseabank.element(by.css('input#bank-select,#dropdown-input ')).click();
                recipientPage.chooseabank.element(by.css('ul.dropdown-viam-list li:nth-child(' + bank1 + ')')).click();
            });

        recipientPage.accountnumber.sendKeys(numbergenerator(1, 3000));
        recipientPage.accountnickname.sendKeys("Testing");

        var selectaccounttype2 =
            recipientPage.accounttypeLI.count().then(function (countaccounttype) {
                var ran = Math.floor((Math.random() * countaccounttype) + 1);
                recipientPage.accounttype.element(by.css('input#account-type-select,#dropdown-input ')).click();
                recipientPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            });
    },2000);

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
