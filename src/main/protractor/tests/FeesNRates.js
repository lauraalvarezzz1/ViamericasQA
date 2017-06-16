/**
 * Created by lauraalvarez on 5/06/17.
 */

describe('Fees and Rates Testing - Viamericas Web App', function() {

    beforeEach(function() {
        browser.get('https://dev.govianex.com/');
        homePage = require('../pageobjects/homePage');
        feesAndRatesPage = require('../pageobjects/feesandRatesPage');
        loginPage = require('../pageobjects/loginPage');
    });


  it('Not logged in', function() {
    homePage.feesAndRatesButton.click();

    feesAndRatesPage.country.count().then(function(count) {
       var ran = Math.floor((Math.random() * count) + 1);
      feesAndRatesPage.countries.element(by.css('input#country-select')).click();
      feesAndRatesPage.countries.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
       console.log(ran);
       });

    feesAndRatesPage.amount.sendKeys("180");
    feesAndRatesPage.bankDepositButton.click();
    homePage.feesAndRatesButton.click();
  });

 });