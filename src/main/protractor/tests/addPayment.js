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

    it('Adding new Bank Account', function() {
        browser.sleep(2000);
        browser.ignoreSynchronization = true;
        homePage.gomyaccount.click();
        homePage.goToPayments.click();
        paymentOptionsPage.addNewAccountButton.click();
        paymentOptionsPage.bankAccountButton.click();
        paymentOptionsPage.bankAccountNickName.sendKeys("Testing Nickname");
        paymentOptionsPage.routingNumber.sendKeys("002100021");
        paymentOptionsPage.accountNumber.sendKeys("342465432");

        var selectFundingType =
            paymentOptionsPage.typeLiMyAccount.count().then(function(countaccounttype) {
            var ran = Math.floor((Math.random() * countaccounttype) + 1);
            paymentOptionsPage.typeAccount.element(by.css('input#account-type-select')).click();
            paymentOptionsPage.typeAccount.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
            browser.sleep(2000);
        });

        paymentOptionsPage.createAccountButton.click();
        browser.pause();
    });

    it('Adding new Credit / Debit Card', function() {
/*        browser.sleep(2000);
        browser.ignoreSynchronization = true;
        homePage.gomyaccount.click();
        homePage.goToPayments.click();

        paymentOptionsPage.addNewAccountButton.click();


        paymentOptionsPage.bankAccountButton.click();


        paymentOptionsPage.creditDebitButton.click();

        browser.pause();*/
    });
});



numbergenerator = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
};
