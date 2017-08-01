/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Creating a new Payment Method with bank account', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/');

    });

    beforeEach(function() {
       // browser.get('https://test.govianex.com/');
        homePage = require('../../po/homePage');
        loginPage = require('../../po/loginPage');
        paymentOptionsPage = require('../../po/paymentOptionsPage');
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

       homePage.gomyaccount.isPresent().then(function () {
            homePage.gomyaccount.click();
            var ran = numbergenerator(0, 9999999);

            homePage.goToPayments.click();
            paymentOptionsPage.addNewAccountButton.click();
            paymentOptionsPage.bankAccountButton.click();
            paymentOptionsPage.bankAccountNickName.sendKeys("Testing Nickname");
            paymentOptionsPage.routingNumber.sendKeys("002100021");
            paymentOptionsPage.accountNumber.sendKeys(ran);

            var selectFundingType = paymentOptionsPage.accounttypeLI.count().then(function (countaccounttype) {
                var ran = Math.floor((Math.random() * countaccounttype) + 1);
                paymentOptionsPage.accounttype.element(by.css('input#account-type-select,#dropdown-input')).click();
                paymentOptionsPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            });
            paymentOptionsPage.createAccountButton.click();
            browser.sleep(2000);

            paymentOptionsPage.popUpOkButton.click();
        });

    });

    it('Adding new Credit / Debit Card', function() {
        browser.sleep(2000);
        homePage.gomyaccount.isPresent().then(function () {
            var d = new Date();
            paymentOptionsPage.addNewAccountButton.click();
            paymentOptionsPage.creditDebitButton.click();
            paymentOptionsPage.cardHolderName.sendKeys("Testing");
            paymentOptionsPage.cardNickName.sendKeys("Testing Nickname");
            paymentOptionsPage.cardNumber.sendKeys("5405980000000094");
            paymentOptionsPage.cvvNumber.sendKeys("234");
            paymentOptionsPage.month.sendKeys(numbergenerator(0, 1));
            if (paymentOptionsPage.month >= 1) {
                paymentOptionsPage.month.sendKeys(numbergenerator(0, 2));
            } else {
                paymentOptionsPage.month.sendKeys(numbergenerator(1, 9));
            }
            var expYear = numbergenerator(parseInt(d.getFullYear() + 1), parseInt(d.getFullYear()) + 5);
            paymentOptionsPage.year.sendKeys(expYear);
            paymentOptionsPage.createAccountButton.click();
        });
    });
});

numbergenerator = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
};
