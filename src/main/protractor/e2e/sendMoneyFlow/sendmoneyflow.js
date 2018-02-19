/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Send money Testing (Starting with Login) - Viamericas Web App', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function () {
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        homePage = require('../../po/homePage');
        loginPage = require('../../po/loginPage');
        myTransactionsPage = require('../../po/mytransactionsPage');
        sendmoneyFlowPage = require('../../po/sendMoneyFlowPage');
        recipientsPage = require('../../po/recipientsPage');
        paymentPage = require('../../po/paymentPage');
        signUpPage = require('../../po/signupPage');
        reviewPage = require('../../po/reviewPage');
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
            console.log("Destination - Countries available: " + countCountries);
            var countryselected = Math.floor((Math.random() * countCountries) + 1);
            sendmoneyFlowPage.country.element(by.css('input#dropdown-input')).click();
            sendmoneyFlowPage.country.element(by.css('ul.dropdown-viam-list li:nth-child(' + countryselected + ')')).click();

            console.log("Destination - Country selected: " + countryselected);


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
            var bankdepositorcashpickup = Math.floor((Math.random() * 2) + 1);
            if (bankdepositorcashpickup == 1) {
                sendmoneyFlowPage.bankdepositButton.isPresent().then(function (rsb) {
                    if (rsb) {
                        sendmoneyFlowPage.bankdepositButton.click();

                        var selectchooseabank =
                            sendmoneyFlowPage.banksLI.count().then(function (countbanks) {
                                console.log("Destination - Banks available: " + countbanks);
                                var ran = Math.floor((Math.random() * countbanks) + 1);
                                sendmoneyFlowPage.banks.element(by.css('input#dropdown-input')).click();
                                sendmoneyFlowPage.banks.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                console.log("Destination - Bank selected: " + ran);
                            });
                    } else {
                        sendmoneyFlowPage.cashpickupButton.click();

                        browser.sleep(2000);

                        sendmoneyFlowPage.chooseanetwork.isPresent().then(function (network) {
                            if (network) {
                                console.log("Continue with national networks");
                                var selectchooseabank =
                                    sendmoneyFlowPage.chooseanetworkLI.count().then(function (countbanks) {
                                        console.log("Destination - Banks available: " + countbanks);
                                        var ran = Math.floor((Math.random() * countbanks) + 1);
                                        sendmoneyFlowPage.chooseanetwork.element(by.css('input#dropdown-input')).click();
                                        sendmoneyFlowPage.chooseanetwork.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                        console.log("Destination - Bank selected: " + ran);
                                    });

                            } else {
                                var selectstate =
                                    sendmoneyFlowPage.stateLI.count().then(function (countstates) {
                                        console.log("Destination - States available: " + countstates);
                                        var ran = Math.floor((Math.random() * countstates) + 1);
                                        sendmoneyFlowPage.state.element(by.css('input#dropdown-input')).click();
                                        sendmoneyFlowPage.state.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                        console.log("Destination - State selected: " + ran);
                                    }, 2000);

                                var selectcity =
                                    sendmoneyFlowPage.cityLI.count().then(function (countcities) {
                                        console.log("Destination - Cities available: " + countcities);
                                        var ran = Math.floor((Math.random() * countcities) + 1);
                                        sendmoneyFlowPage.city.element(by.css('input#dropdown-input')).click();
                                        sendmoneyFlowPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                        console.log("Destination - City selected: " + ran);
                                    }, 2000);

                                var selectregionalnetwork =
                                    sendmoneyFlowPage.regionalLI.count().then(function (countregional) {
                                        console.log("Destination - Regional Networks available: " + countregional);
                                        if (countregional == 0) {
                                            console.log("Continue with the amount");
                                        } else {
                                            var ran = Math.floor((Math.random() * countregional) + 1);
                                            sendmoneyFlowPage.regional.element(by.css('input#dropdown-input')).click();
                                            sendmoneyFlowPage.regional.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                            console.log("Destination - Regional Network Selected: " + ran);
                                        }
                                    });
                            }
                        });
                    }
                });

            } else {
                sendmoneyFlowPage.cashpickupButton.isPresent().then(function (rsc) {
                    if (rsc) {
                        sendmoneyFlowPage.cashpickupButton.click();

                        browser.sleep(2000);

                        sendmoneyFlowPage.chooseanetwork.isPresent().then(function (network) {
                            if (network) {
                                console.log("Continue with national networks");
                                var selectchooseabank =
                                    sendmoneyFlowPage.chooseanetworkLI.count().then(function (countbanks) {
                                        console.log("Destination - Banks available: " + countbanks);
                                        var ran = Math.floor((Math.random() * countbanks) + 1);
                                        sendmoneyFlowPage.chooseanetwork.element(by.css('input#dropdown-input')).click();
                                        sendmoneyFlowPage.chooseanetwork.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                        console.log("Destination - Bank selected: " + ran);
                                    });

                            } else {
                                var selectstate =
                                    sendmoneyFlowPage.stateLI.count().then(function (countstates) {
                                        console.log("Destination - States available: " + countstates);
                                        var ran = Math.floor((Math.random() * countstates) + 1);
                                        sendmoneyFlowPage.state.element(by.css('input#dropdown-input')).click();
                                        sendmoneyFlowPage.state.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                        console.log("Destination - State selected: " + ran);
                                    }, 2000);

                                var selectcity =
                                    sendmoneyFlowPage.cityLI.count().then(function (countcities) {
                                        console.log("Destination - Cities available: " + countcities);
                                        var ran = Math.floor((Math.random() * countcities) + 1);
                                        sendmoneyFlowPage.city.element(by.css('input#dropdown-input')).click();
                                        sendmoneyFlowPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                        console.log("Destination - City selected: " + ran);
                                    }, 2000);

                                var selectregionalnetwork =
                                    sendmoneyFlowPage.regionalLI.count().then(function (countregional) {
                                        console.log("Destination - Regional Networks available: " + countregional);
                                        if (countregional == 0) {
                                            console.log("Continue with the amount");
                                        } else {
                                            var ran = Math.floor((Math.random() * countregional) + 1);
                                            sendmoneyFlowPage.regional.element(by.css('input#dropdown-input')).click();
                                            sendmoneyFlowPage.regional.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                            console.log("Destination - Regional Network Selected: " + ran);
                                        }
                                    });
                            }
                        });
                    } else {
                        sendmoneyFlowPage.bankdepositButton.click();

                        var selectchooseabank =
                            sendmoneyFlowPage.banksLI.count().then(function (countbanks) {
                                console.log("Destination - Banks available: " + countbanks);
                                var ran = Math.floor((Math.random() * countbanks) + 1);
                                sendmoneyFlowPage.banks.element(by.css('input#dropdown-input')).click();
                                sendmoneyFlowPage.banks.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                console.log("Destination - Bank selected: " + ran);
                            });
                    }
                });

            }

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

            recipientsPage.first_name_send.sendKeys("FirstName");
            recipientsPage.middle_name_optional_send.sendKeys("MiddleName");
            recipientsPage.last_name_send.sendKeys("LastName");
            recipientsPage.secondlast_name_optional_send.sendKeys("SecondLastName");
            //recipientsPage.mobile_phone_optional_send.sendKeys(numbergenerator(312000000, 312999999));
            recipientsPage.email_optional_send.sendKeys("Testing" + numbergenerator(1, 9999) + "@gmail.com");
            recipientsPage.address_line1_send.sendKeys("Street - Testing Address Line1");
            recipientsPage.moreaddressinformation_send.sendKeys("More Address Information");

            //<--------- SELECT STATE/RECIPIENT PAGE ----------------->
            var selectstateRecipient =
                recipientsPage.statesendLI.count().then(function (countstates) {
                    console.log("Recipients - States available: " + countstates);
                    var ran = Math.floor((Math.random() * countstates) + 1);
                    recipientsPage.statesend.element(by.css('input#dropdown-input')).click();
                    recipientsPage.statesend.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                    console.log("Recipients - State selected: " + ran);

                    if (countryselected == 5) {
                        recipientsPage.cpfbrazil_send.sendKeys("55555555555");
                    } else {
                        console.log("Continue with the flow");
                        console.log(countryselected);
                    }
                });

            //<--------- SELECT CITY/RECIPIENT PAGE ----------------->
            var selectcityRecipient =
                recipientsPage.citysendLI.count().then(function (countcities) {
                    console.log("Recipients - Cities available: " + countcities);
                    var ran = Math.floor((Math.random() * countcities) + 1);
                    recipientsPage.citysend.element(by.css('input#dropdown-input')).click();
                    recipientsPage.citysend.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                    console.log("Recipients - City selected:  " + ran);
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
                                console.log("Recipients - Option Selected(INDIA):  " + ran);
                            });

                        recipientsPage.aditionalfield_sendIND.isDisplayed().then(function (rs) {
                            if (rs) {
                                recipientsPage.aditionalfield_sendIND.sendKeys("ABCD1234567");
                            } else {
                                recipientsPage.stateindiasendLI.count().then(function (stateoptions) {
                                    console.log("Recipients - States available for INDIA:  " + stateoptions);
                                    var ran = Math.floor((Math.random() * stateoptions) + 1);
                                    recipientsPage.stateindiasend.element(by.css('input#dropdown-input')).click();
                                    recipientsPage.stateindiasend.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    console.log("Recipients - State selected for INDIA:  " + ran);
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
        })

        var selectPaymentMethod =
            paymentPage.savedbankaccount.isDisplayed().then(function (bankaccount) {
                if (bankaccount) {
                    var selectsavedbankaccount =
                        paymentPage.savedbankaccountLI.count().then(function (countaccounts) {
                            var ran = Math.floor((Math.random() * countaccounts) + 1);
                            paymentPage.savedbankaccount.element(by.css('input#dropdown-input')).click();
                            paymentPage.savedbankaccount.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                            console.log("Bank accounts created: " + ran);

                            paymentPage.continueButton_send.click();

                        });
                } else {
                    var cards = Math.floor((Math.random() * 2) + 1);
                    if (cards = 1) {
                        paymentPage.debitcardcheckbox.click();
                        paymentPage.savedcreditcards.isDisplayed().then(function (rs) {
                            if (rs) {
                                var selectsavedcreditcard =
                                    paymentPage.savedcreditcardsLI.count().then(function (countaccounts) {
                                        var ran = Math.floor((Math.random() * countaccounts) + 1);
                                        paymentPage.savedcreditcards.element(by.css('input#dropdown-input')).click();
                                        paymentPage.savedcreditcards.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    });
                            } else {
                                paymentPage.cardnickname.sendKeys("Testing Nickname");
                                paymentPage.cardnumber.sendKeys("5405010000000090");
                                paymentPage.cvv_send.sendKeys("789");

                                var selectmonth =
                                    paymentPage.month_sendLI.count().then(function (count) {
                                        var ran = Math.floor((Math.random() * count) + 1);
                                        paymentPage.month_send.element(by.css('input#dropdown-input')).click();
                                        paymentPage.month_send.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    });

                                var selectyear =
                                    paymentPage.year_sendLI.count().then(function (count) {
                                        var ran = Math.floor((Math.random() * count) + 1);
                                        paymentPage.year_send.element(by.css('input#dropdown-input')).click();
                                        paymentPage.year_send.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    });
                            }
                        });

                        paymentPage.continueButton_send.click();

                    } else {
                        paymentPage.creditcardcheckbox.click();
                        paymentPage.savedcreditcards.isDisplayed().then(function (rs) {
                            if (rs) {
                                var selectsavedcreditcard =
                                    paymentPage.savedcreditcardsLI.count().then(function (countaccounts) {
                                        var ran = Math.floor((Math.random() * countaccounts) + 1);
                                        paymentPage.savedcreditcards.element(by.css('input#dropdown-input')).click();
                                        paymentPage.savedcreditcards.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    });
                            } else {
                                paymentPage.cardnickname.sendKeys("Testing Nickname");
                                paymentPage.cardnumber.sendKeys("5405010000000090");
                                paymentPage.cvv_send.sendKeys("789");

                                var selectmonth =
                                    paymentPage.month_sendLI.count().then(function (count) {
                                        var ran = Math.floor((Math.random() * count) + 1);
                                        paymentPage.month_send.element(by.css('input#dropdown-input')).click();
                                        paymentPage.month_send.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    });

                                var selectyear =
                                    paymentPage.year_sendLI.count().then(function (count) {
                                        var ran = Math.floor((Math.random() * count) + 1);
                                        paymentPage.year_send.element(by.css('input#dropdown-input')).click();
                                        paymentPage.year_send.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                                    });
                            }
                        });
                        paymentPage.continueButton_send.click();
                    }
                }
            });

        reviewPage.secondsendMoneyButton.click();
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/sendmoney/confirmation');
    }, 120000);


});

numbergenerator = function (min, max) {

    return parseInt(Math.random() * (max - min) + min);
};


