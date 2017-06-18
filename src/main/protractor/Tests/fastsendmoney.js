/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Fast send money Testing - Viamericas Web App', function() {

    beforeEach(function() {
        browser.get('https://dev.govianex.com/');
        homePage = require('../po/homePage');
        sendmoneyFlowPage = require('../po/sendMoneyFlowPage');
    });

    it('should start out with an empty memory', function () {
        browser.sleep(4000);
        var plot0 = element(by.css('body'));
        browser.actions()
            .mouseMove(plot0, {x: 100, y: 100})
            .mouseDown()
            .mouseMove({x: 400, y: 0}) //
            .perform();
        browser.sleep(2000);
        element(by.css('.intercom-launcher-frame')).click();
        element(by.css('.intercom-launcher-frame')).click();
        browser.sleep(2000);

        homePage.sendMoneyButton.click();

        var selectcountry =
            sendmoneyFlowPage.countryLI.count().then(function(countCountries) {
                var ran = Math.floor((Math.random() * countCountries) + 1);
                sendmoneyFlowPage.country.element(by.css('input#country-select')).click();
                sendmoneyFlowPage.country.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
            });

        browser.sleep(2000);

        sendmoneyFlowPage.currency.isDisplayed().then(function(rs){
            if(rs){
                console.log("This have more than 1 currency available");
                var selectcurrency =
                    sendmoneyFlowPage.currencyLI.count().then(function(countCurrencies) {
                        browser.sleep(5000);
                        var ran = Math.floor((Math.random() * countCurrencies) + 1);
                        sendmoneyFlowPage.currency.element(by.css('input#recipient-currency-select')).click();
                        sendmoneyFlowPage.currency.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                    });
            }else{
                console.log("The actual country only has one currency available");
            }
            browser.sleep(2000);
        });

        sendmoneyFlowPage.secondButton.isPresent().then(function(rs){
            if(rs) {
                var button = Math.floor((Math.random() * 2) + 1);
                if(button==1){
                    sendmoneyFlowPage.firstButton.click();
                }else{
                    sendmoneyFlowPage.secondButton.click();
                }
            }else{
                sendmoneyFlowPage.firstButton.click();
            }

           /* if (sendmoneyFlowPage.firstButton==element(by.partialButtonText('Bank Deposit'))||
                sendmoneyFlowPage.firstButton== element(by.partialButtonText('Banco'))){
                console.log("si es");
            }else{
                console.log("no es");
            }*/
            browser.sleep(2000);

            sendmoneyFlowPage.state.isPresent().then(function(rs){
                if(rs) {
                    var selectstate =
                        sendmoneyFlowPage.stateLI.count().then(function(countstates) {
                            var ran = Math.floor((Math.random() * countstates) + 1);
                            sendmoneyFlowPage.state.element(by.css('input#states-select')).click();
                            sendmoneyFlowPage.state.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                            console.log("States available"+ ran);
                        });

                    browser.sleep(2000);

                    var selectcity =
                        sendmoneyFlowPage.cityLI.count().then(function(countcities) {
                            var ran = Math.floor((Math.random() * countcities) + 1);
                            sendmoneyFlowPage.city.element(by.css('input#cities-select')).click();
                            sendmoneyFlowPage.city.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                            console.log("Cities available" +ran);

                        });

                    browser.sleep(2000);

                    var selectregionalnetwork =
                        sendmoneyFlowPage.regionalLI.count().then(function(countregional) {
                            var ran = Math.floor((Math.random() * countregional) + 1);
                            sendmoneyFlowPage.regional.element(by.css('input#regional-networks-select')).click();
                            sendmoneyFlowPage.regional.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                            console.log("Regional Networks available" +ran);
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
            sendmoneyFlowPage.amount.sendKeys(numbergenerator(1, 3000));
            sendmoneyFlowPage.continueButton.click();
        });

        browser.pause();

    }, 120000);

});

numbergenerator = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
};
