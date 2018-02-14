/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Fast send money Testing - Viamericas Web App', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../po/homePage');
        loginPage = require('../po/loginPage');
        myTransactionsPage = require('../po/mytransactionsPage');
        sendmoneyFlowPage = require('../po/sendMoneyFlowPage');
        recipientsPage = require('../po/recipientsPage');
        paymentPage = require('../po/paymentPage');
        signUpPage = require('../po/signupPage');
    });

    it('should start out with an empty memory', function () {
        homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("testingviamericas@gmail.com");
            loginPage.password.sendKeys("Viamericas123");
            loginPage.loginButton.click();


            browser.sleep(2000);

            myTransactionsPage.newtransactionButton.isPresent().then(function (rs) {
                if (rs) {
                    myTransactionsPage.newtransactionButton.click();
                } else {
                    console.log("Start in the send money flow");
                }
            });
        });

        //<--------- SELECT COUNTRY/TRANSACTION INFORMATION PAGE ----------------->
        var selectcountry =

        sendmoneyFlowPage.country.element(by.css('i#dropdown-clear')).click();
        sendmoneyFlowPage.countryLI.count().then(function (countCountries) {
            var countryselected = Math.floor((Math.random() * countCountries) + 1);
            sendmoneyFlowPage.country.element(by.css('input#dropdown-input')).click();
            sendmoneyFlowPage.country.element(by.css('ul.dropdown-viam-list li:nth-child(' + 10 + ')')).click();

            console.log(countryselected);


            //<--------- SELECT CURRENCY/TRANSACTION INFORMATION PAGE ----------------->
            sendmoneyFlowPage.currency.isDisplayed().then(function (rs) {
                if (rs) {
                    console.log("This have more than 1 currency available");
                    var selectcurrency =
                        sendmoneyFlowPage.currencyLI.count().then(function (countCurrencies) {
                            var ran = Math.floor((Math.random() * countCurrencies) + 1);
                            sendmoneyFlowPage.currency.element(by.css('input#dropdown-input')).click();
                            sendmoneyFlowPage.currency.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                        });
                } else {
                    console.log("The actual country only has one currency available");
                }
            });

            //<--------- SELECT CASH PICKUP OR BANK DEPOSIT/TRANSACTION INFORMATION PAGE ----------------->
            sendmoneyFlowPage.bankdepositButton.isPresent().then(function (rs) {
                if (rs) {
                    sendmoneyFlowPage.bankdepositButton.click();

                    var selectchooseabank =
                        sendmoneyFlowPage.banksLI.count().then(function (countbanks) {
                            var ran = Math.floor((Math.random() * countbanks) + 1);
                            sendmoneyFlowPage.banks.element(by.css('input#dropdown-input')).click();
                            sendmoneyFlowPage.banks.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                            console.log("Banks available: " + ran);
                        });

                } else {
                    sendmoneyFlowPage.cashpickupButton.click();
                    browser.sleep(2000);

                    sendmoneyFlowPage.chooseanetwork.isDisplayed().then(function (network) {
                        if (network) {
                            console.log("Continue with national networks");
                            var selectchooseabank =
                                sendmoneyFlowPage.chooseanetworkLI.count().then(function (countbanks) {
                                    var ran = Math.floor((Math.random() * countbanks) + 1);
                                    sendmoneyFlowPage.chooseanetwork.element(by.css('input#dropdown-input')).click();
                                    sendmoneyFlowPage.chooseanetwork.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    console.log("Banks available: " + ran);
                                });

                        } else {
                            var selectstate =
                                sendmoneyFlowPage.stateLI.count().then(function (countstates) {
                                    var ran = Math.floor((Math.random() * countstates) + 1);
                                    sendmoneyFlowPage.state.element(by.css('input#dropdown-input')).click();
                                    sendmoneyFlowPage.state.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    console.log("States available: " + ran);
                                });

                            var selectcity =
                                sendmoneyFlowPage.cityLI.count().then(function (countcities) {
                                    var ran = Math.floor((Math.random() * countcities) + 1);
                                    sendmoneyFlowPage.city.element(by.css('input#dropdown-input')).click();
                                    sendmoneyFlowPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    console.log("Cities available: " + ran);
                                });


                            var selectregionalnetwork =
                                sendmoneyFlowPage.regionalLI.count().then(function (countregional) {
                                    var ran = Math.floor((Math.random() * countregional) + 1);
                                    sendmoneyFlowPage.regional.element(by.css('input#dropdown-input')).click();
                                    sendmoneyFlowPage.regional.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    console.log("Regional Networks available: " + ran);
                                });

                        }
                    });
                }
            });
            //<--------- SELECT BANK OR REGIONAL NETWORK/TRANSACTION INFORMATION PAGE ----------------->

            sendmoneyFlowPage.amount.sendKeys(numbergenerator(1, 2000));
            browser.sleep(2000);
            sendmoneyFlowPage.continueButton.click();
            browser.sleep(2000);
            sendmoneyFlowPage.continueButton.click();
            browser.sleep(2000);

            //<--------- GO TO RECIPIENT PAGE PAGE ----------------->
            expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/sendmoney/recipient/');

            //COMPLETE RECIPIENT PAGE
            recipientsPage.addnewrecipientButton_send.isDisplayed().then(function (rs) {
                if (rs) {
                    recipientsPage.addnewrecipientButton_send.click();
                } else {
                    console.log("Continue filling the form");
                }
            });

            recipientsPage.first_name_send.sendKeys("AbelardoT");
            recipientsPage.middle_name_optional_send.sendKeys("DeJesus");
            recipientsPage.last_name_send.sendKeys("ZuluagaT");
            recipientsPage.secondlast_name_optional_send.sendKeys("RamirezT");
            //recipientsPage.mobile_phone_optional_send.sendKeys(numbergenerator(312000000, 312999999));
            recipientsPage.email_optional_send.sendKeys("Testing" + numbergenerator(1, 9999) + "@gmail.com");
            recipientsPage.address_line1_send.sendKeys("Street 5 - Testing Address Line1");
            recipientsPage.moreaddressinformation_send.sendKeys("Apartment 301");

            //<--------- SELECT STATE/RECIPIENT PAGE ----------------->
            var selectstateRecipient =
                recipientsPage.statesendLI.count().then(function (countstates) {
                    var ran = Math.floor((Math.random() * countstates) + 1);
                    recipientsPage.statesend.element(by.css('input#dropdown-input')).click();
                    recipientsPage.statesend.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                    console.log("States available " + ran);

                    if (countryselected == 5) {
                        recipientsPage.cpfbrazil.sendKeys(numbergenerator(10000000000, 99999999999));
                    } else {
                        console.log("Continue with the flow");
                        console.log(countryselected);
                    }
                });

            //<--------- SELECT CITY/RECIPIENT PAGE ----------------->
            var selectcityRecipient =
                recipientsPage.citysendLI.count().then(function (countcities) {
                    var ran = Math.floor((Math.random() * countcities) + 1);
                    recipientsPage.citysend.element(by.css('input#dropdown-input')).click();
                    recipientsPage.citysend.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                    console.log("Cities available " + ran);
                });

            //<--------- RECIPIENT BANK ACCOUNT PAGE ----------------->

            recipientsPage.accountnickname_send.isDisplayed().then(function (rs) {
                if (rs) {
                    recipientsPage.accountnickname_send.sendKeys("Nickname testing");
                    recipientsPage.accountnumber_send.sendKeys(numbergenerator(10000000000, 99999999999));
                    var selectaccounttype =
                        recipientsPage.accounttype_sendLI.count().then(function (countaccounttype) {
                            var ran = Math.floor((Math.random() * countaccounttype) + 1);
                            recipientsPage.accounttype_send.element(by.css('input#dropdown-input')).click();
                            recipientsPage.accounttype_send.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                        });

                    //IF THERE IS ANY OF THIS COUNTRIES:- Australia, Brazil, Canada, Hong Kong, India, Switzerland, United States
                    if (countryselected == 2 || countryselected == 6 || countryselected == 16 || countryselected == 28 || countryselected == 30) {
                        recipientsPage.aditionalfieldAUS_CA_HG_SW_UK_send.sendKeys(numbergenerator(000000000, 99999999999));
                    } else if (countryselected == 32) {
                        recipientsPage.aditionalfieldUS.sendKeys("021000021");
                    } else if (countryselected == 17) {
                        var chooseanyifscoption =
                            recipientsPage.chooseoptionindiasendLI.count().then(function (options) {
                                var ran = Math.floor((Math.random() * options) + 1);
                                recipientsPage.chooseoptionindiasend.element(by.css('input#dropdown-input')).click();
                                recipientsPage.chooseoptionindiasend.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                            });

                        recipientsPage.aditionalfield_sendIND.isDisplayed().then(function (rs) {
                            if (rs) {
                                recipientsPage.aditionalfield_sendIND.sendKeys("ABCD1234567");
                            } else {
                                recipientsPage.stateindiasendLI.count().then(function (stateoptions) {
                                    var ran = Math.floor((Math.random() * stateoptions) + 1);
                                    recipientsPage.stateindiasend.element(by.css('input#dropdown-input')).click();
                                    recipientsPage.stateindiasend.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                });

                                recipientsPage.ifsccodeindiasendLI.count().then(function (options) {
                                    var ran = Math.floor((Math.random() * options) + 1);
                                    recipientsPage.ifsccodeindiasend.element(by.css('input#dropdown-input')).click();
                                    recipientsPage.ifsccodeindiasend.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                });
                            }
                        });

                    } else if (countryselected == 5) {
                        recipientsPage.aditionalfieldBRA_send.sendKeys(numbergenerator(0000, 99999999999));
                    }
                } else {
                    console.log("Go to Payment options");
                }
            });
            browser.sleep(5000);
            recipientsPage.continueButtonRecipient.click();

            browser.pause();
        })
    });

    var selectPaymentMethod =
        paymentPage.paymentMethod.isDisplayed().then(function () {
            var ranPayment = Math.floor((Math.random() * 3) + 1);
            paymentPage.paymentMethod.element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr[' + ranPayment + ']/td[1]/div')).click();

            browser.sleep(2000);
        });

    //<--------- GO TO REVIEW PAGE ----------------->
    browser.getCurrentUrl().then(function (url) {
        var d = new Date();
        if (url == "https://test.govianex.com/#/fast-send/funding/bank") {
            console.log("------------------BANK ACCOUNT-------------------");
            paymentPage.bankAccountName.sendKeys("Testing");
            paymentPage.accountNickname.sendKeys("Testing Nickname");
            paymentPage.routingNumber.sendKeys("002100021");
            paymentPage.accountNumber.sendKeys("342465432");

            var selectFundingType =
                paymentPage.accounttypeLI.count().then(function (countaccounttype) {
                    var ran = Math.floor((Math.random() * countaccounttype) + 1);
                    paymentPage.accounttype.element(by.css('input#account-types-select')).click();
                    paymentPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                    browser.sleep(2000);
                });
        }
        else {
            paymentPage.creditCardName.sendKeys("Testing");
            paymentPage.cardNickName.sendKeys("Testing Nickname");
            paymentPage.cardNumber.sendKeys("5405980000000094");
            paymentPage.cvvNumber.sendKeys("234");
            paymentPage.month.sendKeys(numbergenerator(0, 1));
            if (paymentPage.month >= 1) {
                paymentPage.month.sendKeys(numbergenerator(0, 2));
            } else {
                paymentPage.month.sendKeys(numbergenerator(1, 9));
            }
            var expYear = numbergenerator(parseInt(d.getFullYear()), parseInt(d.getFullYear()) + 5);
            paymentPage.year.sendKeys(expYear);
        }
        paymentPage.continueButton.click();
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
    browser.sleep(3000);

    signUpPage.zipcode.sendKeys("90001"); //Pending for send aleatory zip codes
    var selectcity =
        signUpPage.cityLI.count().then(function (countcities) {
            var ran = Math.floor((Math.random() * countcities) + 1);
            signUpPage.city.element(by.css('input#city-select')).click();
            signUpPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
            console.log("Cities available" + ran);

        });

    //Register the user with/without program
    var programornot = Math.floor((Math.random() * 2) + 1);
    if (programornot == 1) {
        var selectprogram =
            signUpPage.programLI.count().then(function (countprograms) {
                var ran = Math.floor((Math.random() * countprograms) + 1);
                signUpPage.program.element(by.css('input#partner-id-select')).click();
                signUpPage.program.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log("Programs available" + ran);

            });
        browser.sleep(2000);

        var selectunion =
            signUpPage.unionNameLI.count().then(function (countunions) {
                var ran = Math.floor((Math.random() * countunions) + 1);
                signUpPage.unionName.element(by.css('input#affiliate-name-select')).click();
                signUpPage.unionName.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                console.log("Unions available" + ran);

            });
    }
    signUpPage.createAccountButton.click();
    //expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/sendmoney/review');

    browser.pause();
}, 120000);

numbergenerator = function (min, max) {

    return parseInt(Math.random() * (max - min) + min);
};


