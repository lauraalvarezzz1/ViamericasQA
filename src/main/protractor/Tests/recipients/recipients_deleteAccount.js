/**
 * Created by lauraalvarez on 6/27/17.
 */


describe('Recipients Testing - Removing the recipient bank account', function () {

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

    it('Go to recipient information', function () {
        recipientsPage.editButton.isPresent().then(function () {
            recipientsPage.editButton.click();
        });
    });

    it('Remove the recipient bank account', function () {
        recipientsPage.deleteAccountButton.isPresent().then(function (account) {
            if (account) {
                recipientsPage.deleteAccountButton.click();
            } else {
                console.log("The recipient already select doesn't have bank accounts created");
            }
        });
    });
});


