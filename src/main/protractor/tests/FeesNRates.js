/**
 * Created by lauraalvarez on 5/06/17.
 */

describe('Fees and Rates Testing - Viamericas Web App', function() {

    beforeEach(function() {
        browser.get('https://dev.govianex.com/');
        homePage = require('../po/homePage');
        feesAndRatesPage = require('../po/feesandRatesPage');
        loginPage = require('../po/loginPage');
    });


  it('Not logged in', function() {

      var plot0 = element(by.css('body'));
      browser.actions()
          .mouseMove(plot0, {x: 100, y: 100})
          .mouseDown()
          .mouseMove({x: 400, y: 0}) // 400px to the right of current location
          .perform();
      browser.sleep(2000);

      element(by.css('.intercom-launcher-frame')).click();
      element(by.css('.intercom-launcher-frame')).click();

      homePage.feesAndRatesButton.click();

      var selectcountry =
            feesAndRatesPage.countryLI.count().then(function(count) {
            var ran = Math.floor((Math.random() * count) + 1);
            feesAndRatesPage.country.element(by.css('input#countries-select')).click();
            feesAndRatesPage.country.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
            console.log(ran);

        });

      feesAndRatesPage.amount.sendKeys("180");
      feesAndRatesPage.bankDepositButton.click();
      homePage.feesAndRatesButton.click();
  });

 });