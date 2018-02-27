/**
 * Created by lauraalvarez on 12/02/18.
 */
describe('Login testing Web App', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        myTransactionsPage = require('../../po/mytransactionsPage');
        sendmoneyFlowPage = require('../../po/sendMoneyFlowPage');
        loginPage = require('../../po/loginPage');
        homePage = require('../../po/homePage');
    });

    it('Login form', function() {
        homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("testingviamericas@gmail.com");
            loginPage.password.sendKeys("Viamericas123");
            loginPage.loginButton.click();

            myTransactionsPage.newtransactionButton.isPresent().then(function (transactionpageispresent) {
                if (transactionpageispresent) {
                    expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/transactions/transaction-history');
                } else {
                    sendmoneyFlowPage.country.isPresent().then(function (destinationpageispresent) {
                        if (destinationpageispresent) {
                            expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/sendmoney/destination');
                        }else{
                            console.log("Its going to a different page");
                        }
                    });
                }
            });

            browser.pause();
        });


    });

});

numbergenerator = function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
};