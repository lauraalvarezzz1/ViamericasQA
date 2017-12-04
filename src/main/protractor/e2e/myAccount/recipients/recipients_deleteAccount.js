/**
 * Created by lauraalvarez on 6/27/17.
 */


describe('Recipients Testing - Removing the recipient bank account', function () {

    beforeAll(function () {
        browser.get('https://govianex.com/');
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
                browser.pause();
            }
        });
    });
});


