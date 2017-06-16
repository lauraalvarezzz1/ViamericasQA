/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Fast send money Testing - Viamericas Web App', function() {
    var Country = browser.element(by.css("dropdown-viamericas#country-select"));
    var Currency= browser.element(by.css("dropdown-viamericas#recipient-currency-select"));

    beforeEach(function() {

        browser.get('https://dev.govianex.com/#/fast-send/destination');
        /*browser.wait(function() {
            browser.executeScript('window.scrollTo(0,200);').then(function () {
            })
        }, 3000);*/

    });

    it('should start out with an empty memory', function () {
        browser.sleep(2000);

        var plot0 = element(by.css('body'));
        browser.actions()
            .mouseMove(plot0, {x: 100, y: 100})
            .mouseDown()
            .mouseMove({x: 400, y: 0}) // 400px to the right of current location
            .perform();
        browser.sleep(2000);

        element(by.css('.intercom-launcher-frame')).click();

        element(by.css('.intercom-launcher-frame')).click();
        var selectcountry =
            element.all(by.css('dropdown-viamericas#country-select ul.dropdown-viam-list li'))
                .count().then(function(count) {
                var ran = Math.floor((Math.random() * count) + 1);
                Country.element(by.css('input#country-select')).click();
                Country.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                console.log(ran);

            });

        browser.sleep(2000);

        var Currency =
            element.all(by.css('dropdown-viamericas#recipient-currency-select ul.dropdown-viam-list li'))
                .isDisplayed().then(function (isVisible) {
            if (isVisible) {
                //Currency.element(by.css('input#recipient-currency-select')).click();
                console.log("lo muestra");
            } else {
                console.log("no lo muestra");
            }
        }, 3000);



    });



});
