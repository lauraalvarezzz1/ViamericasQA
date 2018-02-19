/**
 * Created by lauraalvarez on 5/06/17.
 */

describe('Fees and Rates Testing - Viamericas Web App', function () {

    beforeEach(function () {
        browser.get('https://test.govianex.com/#/');
        homePage = require('../../po/homePage');
        feesAndRatesPage = require('../../po/feesandRatesPage');
        loginPage = require('../../po/loginPage');
    });


    it('Not logged in', function () {

        homePage.feesandratesButton.click();

        var selectcountry =
            feesAndRatesPage.countryLI.count().then(function (count) {
                var ran = Math.floor((Math.random() * count) + 1);
                feesAndRatesPage.country.element(by.css('input#dropdown-input')).click();
                browser.executeScript('window.scrollTo(0,250);');
                feesAndRatesPage.country.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log(ran);

            });

        var randomamount = Math.floor((Math.random() * 2) + 1);
        if (randomamount == 1) {
            feesAndRatesPage.amount.sendKeys(numbergenerator(0, 8000));

        } else {
            feesAndRatesPage.receive.sendKeys(numbergenerator(0, 10000));
        }

        //<--------- SELECT CASH PICKUP OR BANK DEPOSIT/TRANSACTION INFORMATION PAGE ----------------->
        //1: Bank Deposit and 2:Cash Pickup
        var button = Math.floor((Math.random() * 2) + 1);

        if (button == 1) {
            feesAndRatesPage.bankDepositButton.isPresent().then(function (rsb) {
                if (rsb) {
                    feesAndRatesPage.bankDepositButton.click();
                } else {
                    feesAndRatesPage.cashPickupButton.click();
                }
            });

        } else {
            feesAndRatesPage.cashPickupButton.isPresent().then(function (rsc) {
                if (rsc) {
                    feesAndRatesPage.cashPickupButton.click();
                } else {
                    feesAndRatesPage.bankDepositButton.click();
                }
            });

        }
        feesAndRatesPage.sendmoneyButton.click();

        browser.sleep(2000);
        expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/fast-send/destination/');
    });

});

numbergenerator = function (min, max) {

    return parseInt(Math.random() * (max - min) + min);
};
