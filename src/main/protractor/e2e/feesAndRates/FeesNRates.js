/**
 * Created by lauraalvarez on 5/06/17.
 */

describe('Fees and Rates Testing - Viamericas Web App', function() {

    beforeEach(function() {
        browser.get('https://test.govianex.com/#/fees-and-rates');
        homePage = require('../../po/homePage');
        feesAndRatesPage = require('../../po/feesandRatesPage');
        loginPage = require('../../po/loginPage');
    });


  it('Not logged in', function() {

     // browser.sleep(2000);

      var selectcountry =
            feesAndRatesPage.countryLI.count().then(function(count) {
            var ran = Math.floor((Math.random() * count) + 1);
            feesAndRatesPage.country.element(by.css('input#dropdown-input')).click();
            browser.executeScript('window.scrollTo(0,250);');
            feesAndRatesPage.country.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
            console.log(ran);

        });

      var randomamount = Math.floor((Math.random() * 2) + 1);
      if (randomamount== 1){
          feesAndRatesPage.amount.sendKeys(numbergenerator(0,8000));

      }else{
          feesAndRatesPage.receive.sendKeys(numbergenerator(0,10000));
      }

      feesAndRatesPage.secondButton.isPresent().then(function(rs){
          console.log(rs);
          if(rs) {
              var button = Math.floor((Math.random() * 2) + 1);
              if(button==1){
                  feesAndRatesPage.firstButton.click();
              }else{
                  feesAndRatesPage.secondButton.click();
              }
          }else{
              console.log("Only one button is available");
              feesAndRatesPage.firstButton.click();
          }
      });

      //homePage.feesAndRatesButton.click();
  });

 });

numbergenerator = function(min, max){

    return parseInt(Math.random() * (max - min) + min);
};
