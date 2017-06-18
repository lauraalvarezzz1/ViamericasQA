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
                console.log(ran);

            });

        browser.sleep(5000);

        sendmoneyFlowPage.currency.isDisplayed().then(function(rs){
            console.log(rs);
            if(rs){
                console.log("This have more than 1 currency available");
                var selectcurrency =
                    sendmoneyFlowPage.currencyLI.count().then(function(countCurrencies) {
                        browser.sleep(5000);
                        var ran = Math.floor((Math.random() * countCurrencies) + 1);
                        sendmoneyFlowPage.currency.element(by.css('input#recipient-currency-select')).click();
                        sendmoneyFlowPage.currency.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                        console.log(ran);
                    });
            }else{
                console.log("The actual country only has one currency available");
            }
            browser.sleep(5000);
        });

        sendmoneyFlowPage.secondButton.isPresent().then(function(rs){
            console.log(rs);
            if(rs) {
                var button = Math.floor((Math.random() * 2) + 1);
                if(button==1){
                    sendmoneyFlowPage.firstButton.click();
                }else{
                    sendmoneyFlowPage.secondButton.click();
                }
            }else{
                console.log("solo hay uno");
                sendmoneyFlowPage.firstButton.click();
            }
        });

        browser.pause();
    });



});

