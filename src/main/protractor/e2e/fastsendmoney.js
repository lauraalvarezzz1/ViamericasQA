/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Fast send money Testing - Viamericas Web App', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/#/fast-send/destination/');
    });

    beforeEach(function() {
        homePage = require('../po/homePage');
        sendmoneyFlowPage = require('../po/sendMoneyFlowPage');
        recipientsPage = require('../po/recipientsPage');
        paymentPage = require('../po/paymentPage');
        signUpPage = require('../po/signupPage');
    });

    it('should start out with an empty memory', function () {


        //homePage.sendmoneyNav.click();
        //<--------- SELECT COUNTRY/TRANSACTION INFORMATION PAGE ----------------->

        browser.sleep(10000);
        browser.executeScript('window.scrollTo(0,50);').then(function () {

       var selectcountry =
            sendmoneyFlowPage.countryLI.count().then(function(countCountries) {
                var countryselected = Math.floor((Math.random() * countCountries) + 1);
                sendmoneyFlowPage.country.element(by.css('input#dropdown-input')).click().last();
                sendmoneyFlowPage.country.element(by.css('ul.dropdown-viam-list li:nth-child('+countryselected+')')).click();
        console.log(countryselected);
            })
        browser.pause();

      /*  //<--------- SELECT CURRENCY/TRANSACTION INFORMATION PAGE ----------------->
        sendmoneyFlowPage.currency.isDisplayed().then(function(rs){
            if(rs){
                console.log("This have more than 1 currency available");
                var selectcurrency =
                    sendmoneyFlowPage.currencyLI.count().then(function(countCurrencies) {
                        var ran = Math.floor((Math.random() * countCurrencies) + 1);
                        sendmoneyFlowPage.currency.element(by.css('input#recipient-currency-select')).click();
                        sendmoneyFlowPage.currency.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                    });
            }else{
                console.log("The actual country only has one currency available");
            }
        });

        //<--------- SELECT CASH PICKUP OR BANK DEPOSIT/TRANSACTION INFORMATION PAGE ----------------->
        sendmoneyFlowPage.secondButton.isPresent().then(function(rs){
            if(rs) {
                var button = Math.floor((Math.random() * 2) + 1);
                if(button==1){
                    sendmoneyFlowPage.firstButton.click();
                }else{
                    sendmoneyFlowPage.secondButton.click();}
            }else{
                sendmoneyFlowPage.firstButton.click();
            }
         });
            //<--------- SELECT BANK OR REGIONAL NETWORK/TRANSACTION INFORMATION PAGE ----------------->
            sendmoneyFlowPage.state.isPresent().then(function(rs){
                if(rs) {
                    var selectstate =
                        sendmoneyFlowPage.stateLI.count().then(function(countstates) {
                            var ran = Math.floor((Math.random() * countstates) + 1);
                            sendmoneyFlowPage.state.element(by.css('input#states-select')).click();
                            sendmoneyFlowPage.state.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                            console.log("States available "+ ran);
                        });


                    var selectcity =
                        sendmoneyFlowPage.cityLI.count().then(function(countcities) {
                            var ran = Math.floor((Math.random() * countcities) + 1);
                            sendmoneyFlowPage.city.element(by.css('input#cities-select')).click();
                            sendmoneyFlowPage.city.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                            console.log("Cities available " +ran);
                        });


                    var selectregionalnetwork =
                        sendmoneyFlowPage.regionalLI.count().then(function(countregional) {
                            var ran = Math.floor((Math.random() * countregional) + 1);
                            sendmoneyFlowPage.regional.element(by.css('input#regional-networks-select')).click();
                            sendmoneyFlowPage.regional.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                            console.log("Regional Networks available " +ran);
                        });
                }else{
                    sendmoneyFlowPage.firstbankintopfive.isPresent().then(function(rs){
                        if(rs) {
                            sendmoneyFlowPage.firstbankintopfive.click();
                        }else{
                            console.log("Select it automatically");
                        }
                    });
                }
            });
            sendmoneyFlowPage.amount.sendKeys(numbergenerator(1, 2000));
            sendmoneyFlowPage.continueButton.click();

            //<--------- GO TO RECIPIENT PAGE PAGE ----------------->
            expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/fast-send/recipient');

            //COMPLETE RECIPIENT PAGE
            recipientsPage.first_name.sendKeys("Testing");
            recipientsPage.middle_name_optional.sendKeys("Testing");
            recipientsPage.last_name.sendKeys("Testing");
            recipientsPage.secondlast_name_optional.sendKeys("Testing");
            recipientsPage.mobile_phone_optional.sendKeys(numbergenerator(312000000, 312999999));
            recipientsPage.email_optional.sendKeys("Testing"+numbergenerator(1,9999)+"@gmail.com");
            recipientsPage.address_line1.sendKeys("Street 5 - Testing Address Line1");

            //<--------- SELECT STATE/RECIPIENT PAGE ----------------->
            var selectstateRecipient =
                sendmoneyFlowPage.stateLI.count().then(function(countstates) {
                    var ran = Math.floor((Math.random() * countstates) + 1);
                    sendmoneyFlowPage.state.element(by.css('input#states-select')).click();
                    sendmoneyFlowPage.state.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                    console.log("States available "+ ran);

                    if (countryselected== 32){
                        recipientsPage.zipcode.sendKeys("33233");
                    }else if(countryselected==5){
                        recipientsPage.cpfbrazil.sendKeys(numbergenerator(10000000000, 99999999999));
                    }else{
                        console.log("Continue to payment options");
                        console.log(countryselected);
                    }
                });
            browser.sleep(2000);

            //<--------- SELECT CITY/RECIPIENT PAGE ----------------->
            var selectcityRecipient =
                sendmoneyFlowPage.cityLI.count().then(function(countcities) {
                    var ran = Math.floor((Math.random() * countcities) + 1);
                    sendmoneyFlowPage.city.element(by.css('input#cities-select')).click();
                    sendmoneyFlowPage.city.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                    console.log("Cities available " +ran);

                    browser.sleep(2000);
                });

            sendmoneyFlowPage.continueButton.click();

            //<--------- GO TO RECIPIENT BANK ACCOUNT PAGE OR PAYMENT OPTIONS----------------->
                browser.getCurrentUrl().then(function(url) {
                    if(url=="https://test.govianex.com/#/fast-send/bankdeposit"){
                        recipientsPage.accountnumber.sendKeys(numbergenerator(10000000000, 99999999999));
                        var selectaccounttype =
                            recipientsPage.accounttypeLI.count().then(function(countaccounttype) {
                                var ran = Math.floor((Math.random() * countaccounttype) + 1);
                                recipientsPage.accounttype.element(by.css('input#account-type-select')).click();
                                recipientsPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                                browser.sleep(2000);
                            });

                        //IF THERE IS ANY OF THIS COUNTRIES:- Australia, Brazil, Canada, Hong Kong, India, Switzerland, United States
                        if(countryselected== 2 || countryselected== 6 || countryselected== 17 || countryselected== 29 || countryselected== 31) {
                            recipientsPage.aditionalfieldAUS_CA_HG_SW_UK.sendKeys(numbergenerator(000000000, 99999999999));
                        } else if(countryselected== 32){
                            recipientsPage.aditionalfieldUS.sendKeys("021000021");
                        }else if(countryselected==18){
                            recipientsPage.aditionalfieldIND.sendKeys("ABCD1234567");
                        }else if(countryselected==5){
                            recipientsPage.aditionalfieldBRA.sendKeys(numbergenerator(0000, 99999999999));
                        }

                    }else{
                        console.log("Go to Payment options");
                    }});
            });
          sendmoneyFlowPage.continueButton.click();
            browser.sleep(5000);

            var selectPaymentMethod =
                paymentPage.paymentMethod.isDisplayed().then(function() {
                    var ranPayment = Math.floor((Math.random() * 3) + 1);
                    paymentPage.paymentMethod.element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr['+ranPayment+']/td[1]/div')).click();

                    browser.sleep(2000);
                });

            //<--------- GO TO REVIEW PAGE ----------------->
            browser.getCurrentUrl().then(function(url) {
                var d = new Date();
                if(url=="https://test.govianex.com/#/fast-send/funding/bank"){
                    console.log("------------------BANK ACCOUNT-------------------");
                    paymentPage.bankAccountName.sendKeys("Testing");
                    paymentPage.accountNickname.sendKeys("Testing Nickname");
                    paymentPage.routingNumber.sendKeys("002100021");
                    paymentPage.accountNumber.sendKeys("342465432");

                var selectFundingType =
                    paymentPage.accounttypeLI.count().then(function(countaccounttype) {
                        var ran = Math.floor((Math.random() * countaccounttype) + 1);
                        paymentPage.accounttype.element(by.css('input#account-types-select')).click();
                        paymentPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                        browser.sleep(2000);
                    });
                }
                else{
                    paymentPage.creditCardName.sendKeys("Testing");
                    paymentPage.cardNickName.sendKeys("Testing Nickname");
                    paymentPage.cardNumber.sendKeys("5405980000000094");
                    paymentPage.cvvNumber.sendKeys("234");
                    paymentPage.month.sendKeys(numbergenerator(0,1));
                    if (paymentPage.month >= 1){
                        paymentPage.month.sendKeys(numbergenerator(0,2));
                    } else{
                        paymentPage.month.sendKeys(numbergenerator(1,9));
                    }
                    var expYear = numbergenerator(parseInt(d.getFullYear()), parseInt(d.getFullYear())+ 5);
                    paymentPage.year.sendKeys(expYear);
                }
                paymentPage.continueButton.click();
            }); //closes funding

        var signupRan =  numbergenerator(1, 2000);
        signUpPage.email.sendKeys("viamericas"+signupRan+".testing@gmail.com");
        signUpPage.password.sendKeys("Viamericas123");
        signUpPage.signupButton.click();
        //Complete sign up form
        signUpPage.first_name.sendKeys("Testing");
        signUpPage.middle_name_optional.sendKeys("Testing");
        signUpPage.last_name.sendKeys("Testing");
        signUpPage.secondlast_name_optional.sendKeys("Testing");
        signUpPage.mobile_phone_optional.sendKeys(numbergenerator(312000000, 312999999));
        signUpPage.address_line1.sendKeys("Street 5 - Testing Address Line1");

        signUpPage.month.sendKeys(numbergenerator(0,1));
        if (signUpPage.month >= 1){
            signUpPage.month.sendKeys(numbergenerator(0,2));
        } else{
            signUpPage.month.sendKeys(numbergenerator(1,9));
        }

        signUpPage.year.sendKeys(numbergenerator(1900,1998));

        if (signUpPage.month >= 02){
            signUpPage.day.sendKeys(numbergenerator(0,2));
            if (signUpPage.day >= 0 || Day >= 1){
                signUpPage.day.sendKeys(numbergenerator(1,9));
            }else{
                signUpPage.day.sendKeys(numbergenerator(0,8));
            }
        } else{
            signUpPage.day.sendKeys(numbergenerator(0,3));
            if (signUpPage.month==04 || signUpPage.month==06 || signUpPage.month==09 || signUpPage.month==11 && signUpPage.day==3){
                signUpPage.day.sendKeys(numbergenerator(0,0));
            }else{
                signUpPage.day.sendKeys(numbergenerator(1,9));
            }
        }
        browser.sleep(3000);

        signUpPage.zipcode.sendKeys("90001"); //Pending for send aleatory zip codes
        var selectcity =
            signUpPage.cityLI.count().then(function(countcities) {
                var ran = Math.floor((Math.random() * countcities) + 1);
                signUpPage.city.element(by.css('input#city-select')).click();
                signUpPage.city.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                console.log("Cities available" +ran);

            });

        //Register the user with/without program
        var programornot = Math.floor((Math.random() * 2) + 1);
        if(programornot==1) {
            var selectprogram =
                signUpPage.programLI.count().then(function(countprograms) {
                    var ran = Math.floor((Math.random() * countprograms) + 1);
                    signUpPage.program.element(by.css('input#partner-id-select')).click();
                    signUpPage.program.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                    console.log("Programs available" +ran);

                });
            browser.sleep(2000);

            var selectunion =
                signUpPage.unionNameLI.count().then(function(countunions) {
                    var ran = Math.floor((Math.random() * countunions) + 1);
                    signUpPage.unionName.element(by.css('input#affiliate-name-select')).click();
                    signUpPage.unionName.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                    console.log("Unions available" +ran);

                });}
        signUpPage.createAccountButton.click();
        //expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/sendmoney/review');

        browser.pause();
    }, 120000);*/

});
    });
});

numbergenerator = function(min, max){

    return parseInt(Math.random() * (max - min) + min);
};


