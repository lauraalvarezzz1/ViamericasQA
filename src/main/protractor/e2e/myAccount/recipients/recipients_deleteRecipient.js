/**
 * Created by lauraalvarez on 6/27/17.
 */


describe('Recipients Testing - Removing the recipient', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../../../po/homePage');
        recipientPage = require('../../../po/recipientsPage');
        loginPage = require('../../../po/loginPage');
    });

    it('Remove recipients and go to the send money flow', function () {
        homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("testingviamericas@gmail.com");
            loginPage.password.sendKeys("Viamericas123");
            loginPage.loginButton.click();

            browser.sleep(2000);

            homePage.myaccountheader.isPresent().then(function () {
                homePage.myaccountheader.click();
            });
            homePage.recipientsButton.click();

            recipientPage.deleteRecipientButton.isPresent().then(function () {
                recipientPage.deleteRecipientButton.click();
                recipientPage.confirmButton.click();
                browser.sleep(2000);
                recipientPage.closepopuprecipient.click();
            });

            recipientPage.sendmoneyButton.isPresent().then(function () {
                recipientPage.sendmoneyButton.click();
            });

            browser.sleep(2000);
            expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/sendmoney/destination');
        });

    });

});

