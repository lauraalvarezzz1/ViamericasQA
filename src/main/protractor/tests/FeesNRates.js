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
    homePage.feesAndRatesButton.click();

   var memory =
           element.all(by.css('dropdown-viamericas#country-select ul.dropdown-viam-list li'))
               .count().then(function(count) {
               var ran = Math.floor((Math.random() * count) + 1);
               feesAndRatesPage.country.element(by.css('input#country-select')).click();
               feesAndRatesPage.country.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
               console.log(ran);
               browser.pause();

           });

    feesAndRatesPage.amount.sendKeys("180");
    feesAndRatesPage.bankDepositButton.click();
    homePage.feesAndRatesButton.click();
  });

 });