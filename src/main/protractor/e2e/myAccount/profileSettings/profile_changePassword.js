/**
 * Created by lauraalvarez on 20/02/18.
 */


describe('Profile settings Testing - Changing the password from my account', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../../../po/homePage');
        profilePage = require('../../../po/profilePage');
        loginPage = require('../../../po/loginPage');
    });

    it('Change password functionality', function () {
        homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("testingviamericas@gmail.com");
            loginPage.password.sendKeys("Viamericas123");
            loginPage.loginButton.click();

            browser.sleep(4000);

            homePage.myaccountheader.isPresent().then(function () {
                homePage.myaccountheader.click();
            });

            //INVALID PASSWORD
            profilePage.changepasswordProfile.click();
            profilePage.currentpassword.isPresent().then(function () {
                profilePage.currentpassword.sendKeys("Viamericas12");
                profilePage.continuechangepasspopup.click();
            });
            browser.sleep(2000);

            //VALID PASSWORD
            profilePage.currentpassword.sendKeys("Viamericas123");
            profilePage.continuechangepasspopup.click();
            profilePage.newpassword.sendKeys("Viamericas123");
            profilePage.newpasswordconfirm.sendKeys("Viamericas123");
            browser.sleep(2000);
            profilePage.continuechangepasspopup.click();
            browser.sleep(2000);
            profilePage.updatedpopup.click();

            browser.sleep(2000);
            expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/account/profile');
        });

    });

});
