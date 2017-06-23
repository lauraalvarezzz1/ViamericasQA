/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Creating a new Payment Method with bank account', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function() {
        homePage = require('../po/homePage');
        loginPage = require('../po/loginPage');
        paymentOptionsPage = require('../po/paymentOptionsPage');
    });


    it('Loggin in', function() {
        homePage.logInButtonXpath.click();
        //Login
        loginPage.userName.sendKeys("viamericas.testing@gmail.com");
        loginPage.password.sendKeys("Viamericas123");
        loginPage.loginButton.click();

    });

    it('click', function() {
        browser.ignoreSynchronization = true;
        homePage.gomyaccount.isPresent().then(function(){
             homePage.gomyaccount.click();
        });

        homePage.goToPayments.click();

    });
});



numbergenerator = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
};
