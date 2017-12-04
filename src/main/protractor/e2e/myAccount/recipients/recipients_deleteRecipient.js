/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Removing the recipient', function () {
    var deferred = protractor.promise.defer();

    beforeAll(function () {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function () {
        homepage = require('../../../po/homePage');
        recipientPage = require('../../../po/recipientsPage');
        loginpage = require('../../../po/loginPage');
    });

    it('Log in', function () {
        homepage.logInButtonXpath.click();
        loginpage.userName.sendKeys("viamericas.testing@gmail.com");
        loginpage.password.sendKeys("Viamericas123");
        loginpage.loginButton.click();
    });

    it('Go to Recipients', function () {
        browser.ignoreSynchronization = true;
        homepage.gomyaccount.isPresent().then(function () {
            browser.sleep(2000);
            homepage.gomyaccount.click();
        });
        homepage.gorecipients.click();
    });

    it('Remove the complete recipient', function () {
        recipientPage.editButton.isPresent().then(function () {
            recipientPage.editButton.click();
        });

        recipientPage.deleteRecipientButton.click();
        expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/settings/recipients');
        browser.pause();
    });


});


