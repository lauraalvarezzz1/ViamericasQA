/**
 * Created by lauraalvarez on 6/27/17.
 */


describe('Recipients Testing - Removing the recipient bank account', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../../../po/homePage');
        recipientPage = require('../../../po/recipientsPage');
        loginPage = require('../../../po/loginPage');
    });

    it('Remove recipient bank accounts and go recipient list', function () {
        homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("testingviamericas@gmail.com");
            loginPage.password.sendKeys("Viamericas123");
            loginPage.loginButton.click();

            browser.sleep(6000);

            homePage.myaccountheader.isPresent().then(function () {
                homePage.myaccountheader.click();
            });
            homePage.recipientsButton.click();

            recipientPage.editButton.isPresent().then(function () {
                    recipientPage.editButton.click();
            });

            recipientPage.deleteAccountButton.isPresent().then(function (rs) {
                if(rs){
                    recipientPage.deleteAccountButton.click();
                    browser.sleep(2000);
                    recipientPage.closepopup.click();
                }else{
                    console.log("Doesn't have recipient bank accounts")
                }
                browser.sleep(2000);
                recipientPage.cancelButton.click();
            });
            browser.sleep(2000);
            expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/account/recipients');
        });

    });

});


