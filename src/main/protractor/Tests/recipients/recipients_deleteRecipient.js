/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Removing the recipient', function () {
    var deferred = protractor.promise.defer();

    beforeAll(function () {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function () {
        homePage = require('../../po/homePage');
        recipientsPage = require('../../po/recipientsPage');
        loginPage = require('../../po/loginPage');
    });


    it('Log in', function () {
        homePage.logInButtonXpath.click();
        loginPage.userName.sendKeys("viamericas.testing@gmail.com");
        loginPage.password.sendKeys("Viamericas123");
        loginPage.loginButton.click();
    });

    it('Go to Recipients', function () {
        browser.ignoreSynchronization = true;
        homePage.gomyaccount.isPresent().then(function () {
            homePage.gomyaccount.click();
        });
        homePage.gorecipients.click();
    });

    it('Remove the complete recipient', function () {
        recipientsPage.editButton.isPresent().then(function () {
            recipientsPage.editButton.click();
        });
        recipientsPage.deleteRecipientButton.click();
        expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/settings/recipients');
        browser.pause();
    });


});


