/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Fast send money Testing - Viamericas Web App', function () {

    beforeAll(function () {
        browser.get('https://dev.govianex.com/');
    });

    beforeEach(function () {
        homePage = require('../../po/homePage');
        sendmoneyFlowPage = require('../../po/sendMoneyFlowPage');
        recipientPage = require('../../po/recipientsPage');
        paymentPage = require('../../po/paymentPage');
        signUpPage = require('../../po/signupPage');
    });

    /*it('<----Actions with the mouse for the intercom chat---->', function () {
        var plot0 = element(by.css('body'));
        browser.actions()
            .mouseMove(plot0, {x: 100, y: 100})
            .mouseDown()
            .mouseMove({x: 400, y: 0}) //
            .perform();
        element(by.css('.intercom-launcher-frame')).click();
        element(by.css('.intercom-launcher-frame')).click();
    }, 120000); */


    browser.executeScript('window.scrollTo(0,500);');

   it('<----Go to send money flow---->', function () {
        homePage.sendMoneyButton.isPresent().then(function () {
            homePage.sendMoneyButton.click();
            browser.pause();
        });
    });


/*
    it('<----Complete Destination information/Recipients Information/Recipient Bank Account---->', function () {
        //<--------- SELECT COUNTRY/TRANSACTION INFORMATION PAGE ----------------->
        var selectCountry = sendmoneyFlowPage.countryLI.count().then(function (countCountries) {
            var countryselected = Math.floor((Math.random() * countCountries) + 1);
            sendmoneyFlowPage.country.element(by.css('input#country-select,#dropdown-input')).click();
            sendmoneyFlowPage.country.element(by.css('ul.dropdown-viam-list li:nth-child(' + countryselected + ')')).click();

            //<--------- SELECT CURRENCY/TRANSACTION INFORMATION PAGE ----------------->
            sendmoneyFlowPage.currency.isDisplayed().then(function (rs) {
                if (rs) {
                    console.log("This have more than 1 currency available");
                    var selectCurrency = sendmoneyFlowPage.currencyLI.count().then(function (countCurrencies) {
                        var ran = Math.floor((Math.random() * countCurrencies) + 1);
                        sendmoneyFlowPage.currency.element(by.css('input#recipient-currency-select,#dropdown-input')).click();
                        sendmoneyFlowPage.currency.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                    });
                } else {
                    console.log("The actual country only has one currency available");
                }
            });

            //<--------- SELECT CASH PICKUP OR BANK DEPOSIT/TRANSACTION INFORMATION PAGE ----------------->
            sendmoneyFlowPage.secondButton.isPresent().then(function (rs) {
                if (rs) {
                    var button = Math.floor((Math.random() * 2) + 1);
                    if (button == 1) {
                        sendmoneyFlowPage.firstButton.click();
                    } else {
                        sendmoneyFlowPage.secondButton.click();
                    }
                } else {
                    sendmoneyFlowPage.firstButton.click();
                }
            });

            //<--------- SELECT BANK OR REGIONAL NETWORK/TRANSACTION INFORMATION PAGE ----------------->
            sendmoneyFlowPage.state.isPresent().then(function (rs) {
                if (rs) {
                    var selectState = sendmoneyFlowPage.stateLI.count().then(function (countstates) {
                        var ran = Math.floor((Math.random() * countstates) + 1);
                        sendmoneyFlowPage.state.element(by.css('input#states-select,#dropdown-input')).click();
                        sendmoneyFlowPage.state.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                    });

                    var selectCity =
                        sendmoneyFlowPage.cityLI.count().then(function (countcities) {
                            var ran = Math.floor((Math.random() * countcities) + 1);
                            sendmoneyFlowPage.city.element(by.css('input#cities-select,#dropdown-input')).click();
                            sendmoneyFlowPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                        });

                    var selectRegionalNetwork =
                        sendmoneyFlowPage.regionalLI.count().then(function (countregional) {
                            var ran = Math.floor((Math.random() * countregional) + 1);
                            sendmoneyFlowPage.regional.element(by.css('input#regional-networks-select,#dropdown-input')).click();
                            sendmoneyFlowPage.regional.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                        });
                } else {
                    sendmoneyFlowPage.firstbankintopfive.isPresent().then(function (rs) {
                        if (rs) {
                            sendmoneyFlowPage.firstbankintopfive.click();
                        } else {
                            console.log("Select it automatically");
                        }
                    });
                }
            });
            sendmoneyFlowPage.amount.sendKeys(numbergenerator(1, 500));
            sendmoneyFlowPage.continueButton.click();

            //<--------- GO TO RECIPIENT PAGE PAGE ----------------->
            expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/fast-send/recipient');

            //COMPLETE RECIPIENT PAGE
            recipientPage.first_name.sendKeys("Testing");
            recipientPage.middle_name_optional.sendKeys("Testing");
            recipientPage.last_name.sendKeys("Testing");
            recipientPage.secondlast_name_optional.sendKeys("Testing");
            recipientPage.mobile_phone_optional.sendKeys(numbergenerator(312000000, 312999999));
            recipientPage.email_optional.sendKeys("Testing" + numbergenerator(1, 9999) + "@gmail.com");
            recipientPage.address_line1.sendKeys("Street 5 - Testing Address Line1");

            //<--------- SELECT STATE/RECIPIENT PAGE ----------------->
            var selectstateRecipient = recipientPage.stateLI.count().then(function (countstates) {
                var ran = Math.floor((Math.random() * countstates) + 1);
                recipientPage.state.element(by.css('input#state-select,#dropdown-input ')).click();
                recipientPage.state.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();

                if (countryselected == 32) {
                    recipientPage.zipcode.sendKeys("33233");
                } else if (countryselected == 5) {
                    recipientPage.cpfbrazil.sendKeys(numbergenerator(10000000000, 99999999999));
                } else {
                    console.log("Continue to payment options");
                }
            });

            //<--------- SELECT CITY/RECIPIENT PAGE ----------------->
            var selectcityRecipient = recipientPage.cityLI.count().then(function (countcities) {
                var ran = Math.floor((Math.random() * countcities) + 1);
                recipientPage.city.element(by.css('input#city-select,#dropdown-input')).click();
                recipientPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            });

            sendmoneyFlowPage.continueButton.click();

            //<--------- GO TO RECIPIENT BANK ACCOUNT PAGE OR PAYMENT OPTIONS----------------->
            browser.getCurrentUrl().then(function (url) {
                if (url == "https://test.govianex.com/#/fast-send/bankdeposit") {
                    recipientPage.accountnickname.sendKeys("Testing");
                    recipientPage.accountnumber.sendKeys(numbergenerator(10000000000, 99999999999));
                    var selectaccounttype =
                        recipientPage.accounttypeLI.count().then(function (countaccounttype) {
                            var ran = Math.floor((Math.random() * countaccounttype) + 1);
                            recipientPage.accounttype.element(by.css('input#account-type-select,#dropdown-input')).click();
                            recipientPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                        });

                    //IF THERE IS ANY OF THIS COUNTRIES:- Australia, Brazil, Canada, Hong Kong, India, Switzerland, United States
                    if (countryselected == 2 || countryselected == 6 || countryselected == 17 || countryselected == 29 || countryselected == 31) {
                        recipientPage.aditionalfieldAUS_CA_HG_SW_UK.sendKeys(numbergenerator(000000000, 99999999999));
                    } else if (countryselected == 32) {
                        recipientPage.aditionalfieldUS.sendKeys("021000021");
                    } else if (countryselected == 18) {
                        recipientPage.aditionalfieldIND.sendKeys("ABCD1234567");
                    } else if (countryselected == 5) {
                        recipientPage.aditionalfieldBRA.sendKeys(numbergenerator(0000, 99999999999));
                    }

                } else {
                    console.log("Go to Payment options");
                }
            });
        });
        sendmoneyFlowPage.continueButton.click();
    });

    it('<----Complete payment options---->', function () {
        paymentOptionsPage.paymentMethod.isPresent().then(function () {
            var selectPaymentMethod = paymentOptionsPage.paymentMethod.isDisplayed().then(function () {
                var ranPayment = Math.floor((Math.random() * 3) + 1);
                if (ranPayment==1){
                    variable= ranPayment+1;
                    paymentOptionsPage.paymentMethod.element(
                        by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr[' + variable + ']/td[1]/div')).click();
                }else{
                paymentOptionsPage.paymentMethod.element(
                    by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr[' + ranPayment + ']/td[1]/div')).click();
                }
            });
        });
    });

    it('<----Go to review page---->', function () {
        browser.getCurrentUrl().then(function (url) {
            var d = new Date();
            if (url == "https://test.govianex.com/#/fast-send/funding/bank") {
                console.log("------------------BANK ACCOUNT-------------------");
                //PLAID
                /*paymentOptionsPage.addaccountplaid.click();
                paymentOptionsPage.bankwithplaid.click();
                paymentOptionsPage.usernameplaid.sendKeys("user_good");
                paymentOptionsPage.passwordplaid.sendKeys("pass_good");

                paymentOptionsPage.bankAccountName.sendKeys("Testing");
                 paymentOptionsPage.accountNickname.sendKeys("Testing Nickname");
                 paymentOptionsPage.routingNumber.sendKeys("002100021");
                 paymentOptionsPage.accountNumber.sendKeys("342465432");

                 var selectFundingType = paymentOptionsPage.accounttypeLI.count().then(function (countaccounttype) {
                 var ran = Math.floor((Math.random() * countaccounttype) + 1);
                 paymentOptionsPage.accounttype.element(by.css('input#account-types-select,#dropdown-input')).click();
                 paymentOptionsPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                 });

            } else {
                paymentOptionsPage.creditCardName.sendKeys("Testing Card");
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
            }
            paymentOptionsPage.continueButton.click();
        }); //closes funding

        var signupRan = numbergenerator(1, 2000);
        signUpPage.email.sendKeys("viamericas" + signupRan + ".testing@gmail.com");
        signUpPage.password.sendKeys("Viamericas123");
        signUpPage.signupButton.click();
        //Complete sign up form
        signUpPage.first_name.sendKeys("Testing");
        signUpPage.middle_name_optional.sendKeys("Testing");
        signUpPage.last_name.sendKeys("Testing");
        signUpPage.secondlast_name_optional.sendKeys("Testing");
        signUpPage.mobile_phone_optional.sendKeys(numbergenerator(312000000, 312999999));
        signUpPage.address_line1.sendKeys("Street 5 - Testing Address Line1");

        signUpPage.month.sendKeys(numbergenerator(0, 1));
        if (signUpPage.month >= 1) {
            signUpPage.month.sendKeys(numbergenerator(0, 2));
        } else {
            signUpPage.month.sendKeys(numbergenerator(1, 9));
        }

        signUpPage.year.sendKeys(numbergenerator(1900, 1998));

        if (signUpPage.month >= 02) {
            signUpPage.day.sendKeys(numbergenerator(0, 2));
            if (signUpPage.day >= 0 || Day >= 1) {
                signUpPage.day.sendKeys(numbergenerator(1, 9));
            } else {
                signUpPage.day.sendKeys(numbergenerator(0, 8));
            }
        } else {
            signUpPage.day.sendKeys(numbergenerator(0, 3));
            if (signUpPage.month == 04 || signUpPage.month == 06 || signUpPage.month == 09 || signUpPage.month == 11 && signUpPage.day == 3) {
                signUpPage.day.sendKeys(numbergenerator(0, 0));
            } else {
                signUpPage.day.sendKeys(numbergenerator(1, 9));
            }
        }

        //Pending for send aleatory zip codes
        signUpPage.zipcode.isPresent().then(function () {
            signUpPage.zipcode.sendKeys("90001");
        });

        var selectcity = signUpPage.cityLI.count().then(function (countcities) {
            var ran = Math.floor((Math.random() * countcities) + 1);
            signUpPage.city.element(by.css('input#city-select,#dropdown-input')).click();
            signUpPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
        });

        //Register the user with/without program
        var programornot = Math.floor((Math.random() * 2) + 1);
        if (programornot == 1) {
            var selectProgram = signUpPage.programLI.count().then(function (countprograms) {
                var ran = Math.floor((Math.random() * countprograms) + 1);
                signUpPage.program.element(by.css('input#partner-id-select,#dropdown-input')).click();
                signUpPage.program.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            });

            var selectUnion = signUpPage.unionNameLI.count().then(function (countunions) {
                var ran = Math.floor((Math.random() * countunions) + 1);
                signUpPage.unionName.element(by.css('input#affiliate-name-select,#dropdown-input')).click();
                signUpPage.unionName.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            });
        }
        signUpPage.createAccountButton.click();

        expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/sendmoney/review');

        sendmoneyFlowPage.sendmoneyReview.click();

        browser.pause();
    });*/

});

numbergenerator = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};


