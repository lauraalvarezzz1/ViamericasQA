/**
 * Created by lauraalvarez on 19/02/18.
 */

describe('Recipients Testing', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/#!/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../../../po/homePage');
        recipientsPage = require('../../../po/recipientsPage');
        loginPage = require('../../../po/loginPage');
    });

    it('Mobile phone numbers depending on Countries - Creating a new recipient', function () {
       /* homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("testingviamericas@gmail.com");
            loginPage.password.sendKeys("Viamericas123");
            loginPage.loginButton.click();
        });*/

        browser.sleep(5000);
            homePage.myaccountheader.isPresent().then(function () {
                homePage.myaccountheader.click();
            });
            homePage.recipientsButton.click();

        recipientsPage.addnewrecipientButton.click();
        recipientsPage.first_name.sendKeys("Testing");
        recipientsPage.last_name.sendKeys("Number");
        recipientsPage.address_line1.sendKeys("Street 5 - Testing Address Line1");

        var selectcountryRecipient =
            recipientsPage.countryLI.count().then(function (countcountries) {
                console.log("Recipients - Countries available: " + countcountries);
                var countryselected = Math.floor((Math.random() * countcountries) + 1);
                recipientsPage.country.element(by.css('input#dropdown-input')).click();
                recipientsPage.country.element(by.css('ul.dropdown-viam-list li:nth-child(' + countryselected + ')')).click();
                console.log("Recipients - Country selected: " + countryselected);

                if (countryselected == 5) {
                    recipientsPage.cpfbrazil.sendKeys(numbergenerator(10000000000, 99999999999));
                } else {
                    console.log("Continue with the flow");
                }

                if (countryselected == 1) {
                    recipientsPage.mobile_phone_optional.sendKeys("92231234544");
                } else if (countryselected == 2) {
                    recipientsPage.mobile_phone_optional.sendKeys("412345678");
                } else if (countryselected == 3) {
                    recipientsPage.mobile_phone_optional.sendKeys("1432145645");
                } else if (countryselected == 4) {
                    recipientsPage.mobile_phone_optional.sendKeys("76543214");
                } else if (countryselected == 5) {
                    recipientsPage.mobile_phone_optional.sendKeys("2797020506");
                } else if (countryselected == 6) {
                    recipientsPage.mobile_phone_optional.sendKeys("6135550106");
                } else if (countryselected == 7) {
                    recipientsPage.mobile_phone_optional.sendKeys("945678232");
                } else if (countryselected == 8) {
                    recipientsPage.mobile_phone_optional.sendKeys("3126578934");
                } else if (countryselected == 9) {
                    recipientsPage.mobile_phone_optional.sendKeys("5720 0097");
                } else if (countryselected == 10) {
                    var selectdialcode =
                        recipientsPage.dialCodeLI.count().then(function (countcities) {
                            var ran = Math.floor((Math.random() * countcities) + 1);
                            recipientsPage.dialCode.element(by.css('input#dropdown-input')).click();
                            recipientsPage.dialCode.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                        });
                    recipientsPage.mobile_phone_optional.sendKeys("2353358");
                } else if (countryselected == 11) {
                    recipientsPage.mobile_phone_optional.sendKeys("093 900 1046");
                } else if (countryselected == 12) {
                    recipientsPage.mobile_phone_optional.sendKeys("74839857");
                } else if (countryselected == 13) {
                    recipientsPage.mobile_phone_optional.sendKeys("44839823");
                } else if (countryselected == 14) {
                    recipientsPage.mobile_phone_optional.sendKeys("6758234");
                } else if (countryselected == 15) {
                    recipientsPage.mobile_phone_optional.sendKeys("34563454");
                } else if (countryselected == 16) {
                    recipientsPage.mobile_phone_optional.sendKeys("56783456");
                } else if (countryselected == 17) {
                    recipientsPage.mobile_phone_optional.sendKeys("9829522365");
                } else if (countryselected == 18) {
                    recipientsPage.mobile_phone_optional.sendKeys("218340323");
                } else if (countryselected == 19) {
                    recipientsPage.mobile_phone_optional.sendKeys("0118218843");
                } else if (countryselected == 20) {
                    recipientsPage.mobile_phone_optional.sendKeys("168968574");
                } else if (countryselected == 21) {
                    recipientsPage.mobile_phone_optional.sendKeys("13434563456");
                } else if (countryselected == 22) {
                    recipientsPage.mobile_phone_optional.sendKeys("9845678934");
                } else if (countryselected == 23) {
                    recipientsPage.mobile_phone_optional.sendKeys("2864987645");
                } else if (countryselected == 24) {
                    recipientsPage.mobile_phone_optional.sendKeys("55783456");
                } else if (countryselected == 25) {
                    recipientsPage.mobile_phone_optional.sendKeys("912456999");
                } else if (countryselected == 26) {
                    recipientsPage.mobile_phone_optional.sendKeys("9152345679");
                } else if (countryselected == 27) {
                    recipientsPage.mobile_phone_optional.sendKeys("678983456");
                } else if (countryselected == 28) {
                    recipientsPage.mobile_phone_optional.sendKeys("758431234");
                } else if (countryselected == 29) {
                    recipientsPage.mobile_phone_optional.sendKeys("7572312");
                } else if (countryselected == 30) {
                    console.log("There is a problem with United Kingdom");
                } else if (countryselected == 31) {
                    recipientsPage.mobile_phone_optional.sendKeys("1233456789");
                } else {
                    console.log("Doesn't exist any country with that mobile phone number");
                }
            });

        var selectstateRecipient =
            recipientsPage.stateLI.count().then(function (countstates) {
                console.log("Recipients - States available: " + countstates);
                var ran = Math.floor((Math.random() * countstates) + 1);
                recipientsPage.state.element(by.css('input#dropdown-input')).click();
                recipientsPage.state.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log("Recipients - State selected: " + ran);
            });

        var selectcityRecipient =
            recipientsPage.cityLI.count().then(function (countcities) {
                console.log("Recipients - Cities available: " + countcities);
                var ran = Math.floor((Math.random() * countcities) + 1);
                recipientsPage.city.element(by.css('input#dropdown-input')).click();
                recipientsPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log("Recipients - City selected: " + ran);
            });

        recipientsPage.createrecipientButton.click();
        browser.sleep(3000);

        expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#!/account/recipients');

    });

});

numbergenerator = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};
