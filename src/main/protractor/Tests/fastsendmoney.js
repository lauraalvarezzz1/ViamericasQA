/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Fast send money Testing - Viamericas Web App', function() {
    var Country = browser.element(by.css("dropdown-viamericas#country-select"));
    var Currency = browser.element(by.css("dropdown-viamericas#recipient-currency-select"));

    beforeEach(function() {

        browser.get('https://dev.govianex.com/#/fast-send/destination');

    });

    it('should start out with an empty memory', function () {
        browser.sleep(4000);
        var plot0 = element(by.css('body'));
        browser.actions()
            .mouseMove(plot0, {x: 100, y: 100})
            .mouseDown()
            .mouseMove({x: 400, y: 0}) // 400px to the right of current location
            .perform();
        browser.sleep(2000);
        element(by.css('.intercom-launcher-frame')).click();
        element(by.css('.intercom-launcher-frame')).click();
        browser.sleep(2000);

        var selectcountry =
            element.all(by.css('dropdown-viamericas#country-select ul.dropdown-viam-list li'))
                .count().then(function(countCountries) {
                var ran = Math.floor((Math.random() * countCountries) + 1);
                Country.element(by.css('input#country-select')).click();
                Country.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                console.log(ran);

            });

        browser.sleep(5000);

        element(by.css('dropdown-viamericas#recipient-currency-select')).isDisplayed().then(function(rs){
            console.log(rs);
            if(rs){
                console.log("This have more than 1 currency available");
                var selectcurrency =
                    element.all(by.css('dropdown-viamericas#recipient-currency-select ul.dropdown-viam-list li'))
                        .count().then(function(countCurrencies) {
                        browser.sleep(5000);
                        var ran = Math.floor((Math.random() * countCurrencies) + 1);
                        Currency.element(by.css('input#recipient-currency-select')).click();
                        Currency.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                        console.log(ran);
                    });
            }else{
                console.log("The actual country only has one currency available");
            }
            browser.sleep(5000);
        });

        

    });



});

