/**
 * Created by lauraalvarez on 12/02/18.
 */
describe('Login testing Web App', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function() {
        loginPage = require('../../po/loginPage');
        homePage = require('../../po/homePage');
    });

    it('Login form', function() {
        homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("laura.alvarez@talosdigital.com");
            loginPage.password.sendKeys("Laura123");
            loginPage.loginButton.click();

            browser.pause();
        });
    });

    it('Log out to start again', function() {

    });
});

numbergenerator = function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
};