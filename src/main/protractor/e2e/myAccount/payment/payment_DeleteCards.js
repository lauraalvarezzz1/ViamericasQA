/**
 * Created by lauraalvarez on 19/02/18.
 */


/**
 * Created by lauraalvarez on 19/02/18.
 */


describe('Recipients Testing - Removing a payment method', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../../../po/homePage');
        paymentpage = require('../../../po/paymentPage');
        loginPage = require('../../../po/loginPage');
    });


    it('Loggin in', function () {
        homePage.loginHeader.click();
        loginPage.userName.sendKeys("laura.alvarez+11@talosdigital.com");
        loginPage.password.sendKeys("Laura123");
        loginPage.loginButton.click();

        browser.sleep(5000);

        homePage.myaccountheader.isPresent().then(function () {
            homePage.myaccountheader.click();
        });
        homePage.paymentsButton.click();

        paymentpage.deleteCards.isPresent().then(function () {
            paymentpage.deleteCards.click();
            browser.sleep(2000);
            paymentpage.confirmRemoveButton.click();
        });

        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/account/payments');

    });
});

numbergenerator = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};
