/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Creating a new credit card', function() {

    beforeAll(function () {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../../../po/homePage');
        paymentpage = require('../../../po/paymentPage');
        loginPage = require('../../../po/loginPage');
    });


    it('Loggin in', function() {
        homePage.loginHeader.click();
        loginPage.userName.sendKeys("laura.alvarez+11@talosdigital.com");
        loginPage.password.sendKeys("Laura123");
        loginPage.loginButton.click();

        browser.sleep(5000);

        homePage.myaccountheader.isPresent().then(function () {
            homePage.myaccountheader.click();
        });
        homePage.paymentsButton.click();

        paymentpage.addpaymentButton.isPresent().then(function () {
            paymentpage.addpaymentButton.click();
            paymentpage.creditDebitButton.click();
        });

        paymentpage.cardNickName.sendKeys("Testing Nickname");
        paymentpage.cardNumber.sendKeys("5405010000000090");

        var selectmonth =
            paymentpage.monthLI.count().then(function (count) {
                var month = Math.floor((Math.random() * count) + 1);
                paymentpage.month.element(by.css('input#currency-select,#dropdown-input ')).click();
                paymentpage.month.element(by.css('ul.dropdown-viam-list li:nth-child(' + month + ')')).click();
            }, 2000);

        var selectyear =
            paymentpage.yearLI.count().then(function (count) {
                var year = Math.floor((Math.random() * count) + 1);
                paymentpage.year.element(by.css('input#currency-select,#dropdown-input ')).click();
                paymentpage.year.element(by.css('ul.dropdown-viam-list li:nth-child(' + year + ')')).click();
            }, 2000);


        paymentpage.cvvNumber.sendKeys("789");
        paymentpage.createButton.click();
        paymentpage.okButton.click();

    browser.pause();

    });

    /*it('Adding new Bank Account',  function() {
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
    });*/
});

numbergenerator = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
};
