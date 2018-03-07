/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Creating a new recipient', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/#!/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../../../po/homePage');
        recipientsPage = require('../../../po/recipientsPage');
        loginPage = require('../../../po/loginPage');
    });

    it('Create a new recipient', function () {
        homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("testingviamericas@gmail.com");
            loginPage.password.sendKeys("Viamericas123");
            loginPage.loginButton.click();

            browser.sleep(5000);

            homePage.myaccountheader.isPresent().then(function () {
                homePage.myaccountheader.click();
            });
            homePage.recipientsButton.click();
        });
        recipientsPage.addnewrecipientButton.click();
        recipientsPage.first_name.sendKeys("FirstName");
        recipientsPage.middle_name_optional.sendKeys("MiddleName");
        recipientsPage.last_name.sendKeys("LastName");
        recipientsPage.secondlast_name_optional.sendKeys("SecondLast");
        recipientsPage.dateofbirth.sendKeys("2000/01/30")
        recipientsPage.address_line1.sendKeys("Street 5 - Testing Address Line1");

        var selectcountryRecipient =
            recipientsPage.countryLI.count().then(function (countcountries) {
                console.log("Recipients - Countries available: " + countcountries);
                var countryselected = Math.floor((Math.random() * countcountries) + 1);
                recipientsPage.country.element(by.css('input#dropdown-input')).click();
                recipientsPage.country.element(by.css('ul.dropdown-viam-list li:nth-child(' + countryselected + ')')).click();
                console.log("Country selected: " + countryselected);

                if (countryselected == 5) {
                    recipientsPage.cpfbrazil.sendKeys(numbergenerator(10000000000, 99999999999));
                } else {
                    console.log("Continue with the flow");
                }

                if (countryselected == 8) {
                    recipientsPage.mobile_phone_optional.sendKeys("3117223344");
                } else if (countryselected == 9) {
                    recipientsPage.mobile_phone_optional.sendKeys("5720 0097");
                } else if (countryselected == 11) {
                    recipientsPage.mobile_phone_optional.sendKeys("093 900 1046");
                } else {
                    console.log("Continue without mobile phone number")
                }
            });

        var selectstateRecipient =
            recipientsPage.stateLI.count().then(function (countstates) {
                console.log("Recipients - States available " + countstates);
                var ran = Math.floor((Math.random() * countstates) + 1);
                recipientsPage.state.element(by.css('input#dropdown-input')).click();
                recipientsPage.state.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log("State selected:  " + ran);
            });

        var selectcityRecipient =
            recipientsPage.cityLI.count().then(function (countcities) {
                console.log("Cities available: " + countcities);
                var ran = Math.floor((Math.random() * countcities) + 1);
                recipientsPage.city.element(by.css('input#dropdown-input')).click();
                recipientsPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log("City selected: " + ran);
            });

        recipientsPage.createrecipientButton.click();
        browser.sleep(3000);

        expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#!/account/recipients');

    });
});

numbergenerator = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};

