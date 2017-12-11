/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Creating a new Payment Method with bank account', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/');

    });

    beforeEach(function() {
       // browser.get('https://test.govianex.com/');
        homePage = require('../../../po/homePage');
        loginPage = require('../../../po/loginPage');
        paymentPage = require('../../../po/paymentPage');
    });


    it('Loggin in', function() {
        homePage.loginHeader.click();
        browser.sleep(10000);
        loginPage.userName.sendKeys("laura.alvarez+11@talosdigital.com");
        loginPage.password.sendKeys("Laura123");
        loginPage.loginButton.click();

    });

    it('Adding new Bank Account',  function() {
        browser.ignoreSynchronization = true;

       homePage.myaccountheader.isPresent().then(function () {
            homePage.myaccountheader.click();
            var ran = numbergenerator(0, 9999999);

           paymentPage.paymentButton.click();
            paymentPage.addNewAccountButton.click();
            paymentPage.bankAccountButton.click();
            paymentPage.bankAccountNickName.sendKeys("Testing Nickname");
            paymenPage.routingNumber.sendKeys("002100021");
           paymentPage.accountNumber.sendKeys(ran);

            var selectFundingType = paymentPage.accounttypeLI.count().then(function (countaccounttype) {
                var ran = Math.floor((Math.random() * countaccounttype) + 1);
                paymentPage.accounttype.element(by.css('input#account-type-select,#dropdown-input')).click();
                paymentPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            });
           paymentPage.createAccountButton.click();
            browser.sleep(2000);

           paymentPage.popUpOkButton.click();
        });

    });

    it('Adding new Credit / Debit Card', function() {
        browser.sleep(2000);
        homePage.gomyaccount.isPresent().then(function () {
            var d = new Date();
            paymentPage.addNewAccountButton.click();
            paymentPage.creditDebitButton.click();
            paymentPage.cardHolderName.sendKeys("Testing");
            paymentPage.cardNickName.sendKeys("Testing Nickname");
            paymentPage.cardNumber.sendKeys("5405980000000094");
            paymentPage.cvvNumber.sendKeys("234");
            paymentPage.month.sendKeys(numbergenerator(0, 1));
            if (paymentPage.month >= 1) {
                paymentPage.month.sendKeys(numbergenerator(0, 2));
            } else {
                paymentPage.month.sendKeys(numbergenerator(1, 9));
            }
            var expYear = numbergenerator(parseInt(d.getFullYear() + 1), parseInt(d.getFullYear()) + 5);
            paymentPage.year.sendKeys(expYear);
            paymentPage.createAccountButton.click();
        });
    });
});

numbergenerator = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
};
