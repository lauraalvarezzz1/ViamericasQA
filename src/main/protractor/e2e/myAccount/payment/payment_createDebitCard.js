/**
 * Created by lauraalvarez on 19/02/18.
 */


describe('Recipients Testing - Creating a new debit card', function () {

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

        paymentpage.addpaymentButton.isPresent().then(function () {
            paymentpage.addpaymentButton.click();
            paymentpage.creditDebitButton.click();
        });

        var selectdebitcard =
            paymentpage.cardtype.element(by.css('i#dropdown-clear')).click();
        paymentpage.cardtypeLI.count().then(function (count) {
            paymentpage.cardtype.element(by.css('input#currency-select,#dropdown-input ')).click();
            paymentpage.cardtype.element(by.css('ul.dropdown-viam-list li:nth-child(' + 2 + ')')).click();
        }, 2000);

        paymentpage.cardNickName.sendKeys("Testing Nickname");
        paymentpage.cardNumber.sendKeys("5405010000000090");

        var selectmonth =
            paymentpage.monthLI.count().then(function (count) {
                var month = Math.floor((Math.random() * count) + 1);
                paymentpage.month.element(by.css('input#currency-select,#dropdown-input ')).click();
                paymentpage.month.element(by.css('ul.dropdown-viam-list li:nth-child(' + month + ')')).click();
            }, 2000);

        var selectyear =
            paymentpage.yearLI.count().then(function (count) {
                var year = Math.floor((Math.random() * count) + 1);
                paymentpage.year.element(by.css('input#currency-select,#dropdown-input ')).click();
                paymentpage.year.element(by.css('ul.dropdown-viam-list li:nth-child(' + year + ')')).click();
            }, 2000);


        paymentpage.cvvNumber.sendKeys("789");
        paymentpage.createButton.click();

        browser.sleep(3000);
        browser.actions().mouseMove({x: 50, y: 0}).doubleClick().perform();
        browser.sleep(3000);

        paymentpage.addpaymentButton.isPresent().then(function () {
            paymentpage.addpaymentButton.click();
            paymentpage.creditDebitButton.click();
            paymentpage.backButton.click();
        });

        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/account/payments');

    });
});

numbergenerator = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};
