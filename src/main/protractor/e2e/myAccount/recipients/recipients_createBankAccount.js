/**
 * Created by lauraalvarez on 5/06/17.
 */

describe('Recipients Testing - Creating a new recipient with bank account', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../../../po/homePage');
        recipientPage = require('../../../po/recipientsPage');
        loginPage = require('../../../po/loginPage');
    });

    it('Create a new recipient bank account', function () {
       /* homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("testingviamericas@gmail.com");
            loginPage.password.sendKeys("Viamericas123");
            loginPage.loginButton.click();*/

            browser.sleep(5000);

            homePage.myaccountheader.isPresent().then(function () {
                homePage.myaccountheader.click();
            });
            homePage.recipientsButton.click();

            recipientPage.editButton.isPresent().then(function () {
                recipientPage.editButton.click();

            });

            var selectcurrency =
                recipientPage.currencyLI.count().then(function (countcurrencies) {
                    var currency = Math.floor((Math.random() * countcurrencies) + 1);
                    recipientPage.currency.element(by.css('input#currency-select,#dropdown-input ')).click();
                    recipientPage.currency.element(by.css('ul.dropdown-viam-list li:nth-child(' + currency + ')')).click();
                }, 2000);

            var countbanks =
                recipientPage.chooseabankLI.count().then(function (count) {
                    var bank1 = Math.floor((Math.random() * count) + 1);
                    recipientPage.chooseabank.element(by.css('input#bank-select,#dropdown-input ')).click();
                    recipientPage.chooseabank.element(by.css('ul.dropdown-viam-list li:nth-child(' + bank1 + ')')).click();
                });

            recipientPage.accountnumber.sendKeys(numbergenerator(1, 30000000));
            //recipientPage.accountnickname.sendKeys("Testing");

            var selectaccounttype2 =
                recipientPage.accounttypeLI.count().then(function (countaccounttype) {
                    var ran = Math.floor((Math.random() * countaccounttype) + 1);
                    recipientPage.accounttype.element(by.css('input#account-type-select,#dropdown-input ')).click();
                    recipientPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                });

            browser.sleep(2000);
            recipientPage.aditionalfieldAUS_CA_HG_SW_UK.isPresent().then(function (rs) {
                if (rs) {
                    recipientPage.aditionalfieldAUS_CA_HG_SW_UK.sendKeys(numbergenerator(1, 3032223300));
                } else {
                    recipientPage.aditionalfieldBRA.isPresent().then(function (rs) {
                        if (rs) {
                            recipientPage.aditionalfieldBRA.sendKeys(numbergenerator(1, 3000222222));
                        } else {
                            recipientPage.IFSCIndiaLI.count().then(function (options) {
                                var ran = Math.floor((Math.random() * options) + 1);
                                recipientPage.IFSCIndia.element(by.css('input#dropdown-input')).click();
                                recipientPage.IFSCIndia.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                            });

                            recipientPage.aditionalfieldIND.isDisplayed().then(function (rs) {
                                if (rs) {
                                    recipientPage.aditionalfieldIND.sendKeys("ABCD1234567");
                                } else {
                                    recipientPage.statesIndiaLI.count().then(function (stateoptions) {
                                        var ran = Math.floor((Math.random() * stateoptions) + 1);
                                        recipientPage.statesIndia.element(by.css('input#dropdown-input')).click();
                                        recipientPage.statesIndia.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    });

                                    recipientPage.ifscCodeLI.count().then(function (options) {
                                        var ran = Math.floor((Math.random() * options) + 1);
                                        recipientPage.ifscCodeIndia.element(by.css('input#dropdown-input')).click();
                                        recipientPage.ifscCodeIndia.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    });
                                }
                            });
                        }
                    });
                }
            });
        //});
        recipientPage.addbankaccount.isPresent().then(function () {
            recipientPage.addbankaccount.click();
        });
    });
});


numbergenerator = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};
