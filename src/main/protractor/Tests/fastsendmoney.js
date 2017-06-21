/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Fast send money Testing - Viamericas Web App', function() {

    beforeEach(function() {
        browser.get('https://test.govianex.com/');
        homePage = require('../po/homePage');
        sendmoneyFlowPage = require('../po/sendMoneyFlowPage');
        recipientsPage = require('../po/recipientsPage');
        paymentOptionsPage = require('../po/paymentOptionsPage');
    });

    it('should start out with an empty memory', function () {
        var plot0 = element(by.css('body'));
        browser.actions()
            .mouseMove(plot0, {x: 100, y: 100})
            .mouseDown()
            .mouseMove({x: 400, y: 0}) //
            .perform();
        element(by.css('.intercom-launcher-frame')).click();
        element(by.css('.intercom-launcher-frame')).click();

        homePage.sendMoneyButton.click();

        //<--------- SELECT COUNTRY/TRANSACTION INFORMATION PAGE ----------------->
        var selectcountry =
            sendmoneyFlowPage.countryLI.count().then(function(countCountries) {
                var countryselected = Math.floor((Math.random() * countCountries) + 1);
                sendmoneyFlowPage.country.element(by.css('input#country-select')).click();
                sendmoneyFlowPage.country.element(by.css('ul.dropdown-viam-list li:nth-child('+countryselected+')')).click();
        console.log(countryselected);

        //<--------- SELECT CURRENCY/TRANSACTION INFORMATION PAGE ----------------->
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
                    browser.sleep(2000);

                    var selectcity =
                        sendmoneyFlowPage.cityLI.count().then(function(countcities) {
                            var ran = Math.floor((Math.random() * countcities) + 1);
                            sendmoneyFlowPage.city.element(by.css('input#cities-select')).click();
                            sendmoneyFlowPage.city.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                            console.log("Cities available " +ran);
                        });
                    browser.sleep(2000);

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
            browser.sleep(2000);
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
                            recipientsPage.accounttypeLI.count().then(function(countcities) {
                                var ran = Math.floor((Math.random() * countcities) + 1);
                                recipientsPage.accounttype.element(by.css('input#account-type-select')).click();
                                recipientsPage.accounttype.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                                browser.sleep(2000);
                            });

                        //IF THERE IS ANY OF THIS COUNTRIES:- Australia, Brazil, Canada, Hong Kong, India, Switzerland, United States
                        if(countryselected== 2 || countryselected== 6 || countryselected== 17 || countryselected== 29) {
                            recipientsPage.aditionalfieldAUS_CA_HG_SW.sendKeys(numbergenerator(000000000, 99999999999));
                        } else if(countryselected== 32){
                            recipientsPage.aditionalfieldUS.sendKeys("021000021");
                        }else if(countryselected==18){
                            recipientsPage.aditionalfieldIND.sendKeys("ABCD1234567");
                        }else if(countryselected==5){
                            recipientsPage.aditionalfieldBRA.sendKeys(numbergenerator(0000, 99999999999));
                        }

                    }else{
                        console.log("Go to Payment options");
                    }}); //Aqui cierra select country de transaction information

            sendmoneyFlowPage.continueButton.click();
            browser.sleep(5000);

            // PAYMENT OPTIONS
            var ranPayment = Math.floor((Math.random() * 3) + 1);
            if(element(by.id('method')).isDisplayed()){
                paymentOptionsPage.paymentMethod.element(by.xpath('/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div[2]/div[1]/table/tbody/tr['+ranPayment+']/td[1]/div')).click();
            }
            else{
                console.log("No lo encontro");
            }



             });
            });
        browser.pause();
    }, 120000);

});

numbergenerator = function(min, max){

    return parseInt(Math.random() * (max - min) + min);
};


