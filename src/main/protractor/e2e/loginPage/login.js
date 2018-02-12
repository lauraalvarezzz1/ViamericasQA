/**
 * Created by lauraalvarez on 12/02/18.
 */
describe('Login testing Web App', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function() {
        loginPage = require('../../po/loginPage');
        homePage = require('../../po/homePage');

    });

    it('Login form', function() {

        homePage.loginHeader.click();
        browser.sleep(5000);

        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("laura.alvarez@talosdigital.com");
            loginPage.password.sendKeys("Laura123");
            loginPage.loginButton.click();

            //Go to MY TRANSACTIONS FORM or SEND MONEY FLOW

            var gotoanyscreen = Math.floor((Math.random() * 2) + 1);
            if (gotoanyscreen == 1) {
                expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/transactions/transaction-history');
            } else {
                if (gotoanyscreen == 0) {
                    expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/sendmoney/destination');
                } else {
                    console.log("It's going to a different URL");
                }
            }
        });


    });
});

numbergenerator = function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
};