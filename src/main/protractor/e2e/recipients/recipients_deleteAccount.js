/**
 * Created by lauraalvarez on 6/27/17.
 */


describe('Recipients Testing - Removing the recipient bank account', function () {

    beforeAll(function () {
        browser.get('https://govianex.com/');
    });

    beforeEach(function () {
        homePage = require('../../po/homePage');
        recipientPage = require('../../po/recipientsPage');
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
            var EC = protractor.ExpectedConditions;
            browser.wait(EC.elementToBeClickable(homePage.loading), 10000);
            homePage.gomyaccount.click();
        });
        homePage.gorecipients.click();
    });

    it('Go to recipient information', function () {
        recipientPage.editButton.isPresent().then(function () {
            recipientPage.editButton.click();
        });
    });

    it('Remove the recipient bank account', function () {
        recipientPage.deleteAccountButton.isPresent().then(function (account) {
            if (account) {
                recipientPage.deleteAccountButton.click();
            } else {
                console.log("The recipient already select doesn't have bank accounts created");
            }
        });
    });
});


