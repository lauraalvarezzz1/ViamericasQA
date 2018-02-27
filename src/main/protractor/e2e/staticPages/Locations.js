/**
 * Created by lauraalvarez on 12/11/17.
 */


describe('Fast send money Testing - Viamericas Web App', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/#/location/payers');
    });

    beforeEach(function() {
        locationspage = require('../../po/staticPages/locations');
        homepage = require('../../po/homePage');
    });

    it('Checking all the states in payer network page (International Pickup)', function () {
        //homepage.locationsNav.click();
        locationspage.internationalPickup.click();
            var selectstate =
                locationspage.icountryLI.count().then(function(countCountry) {
                    var countryselected = Math.floor((Math.random() * countCountry) + 1);
                    browser.executeScript('window.scrollTo(0,700);');
                    locationspage.icountryI.element(by.css('input#dropdown-input')).click();
                    locationspage.icountryI.element(by.css('ul.dropdown-viam-list li:nth-child('+countryselected+')')).click();
                    console.log(countryselected);
                })
    });

    it('USA AGENT or locations)', function () {
        browser.executeScript('window.scrollTo(0,-500);');

        locationspage.usaAgent.isPresent().then(function () {
            locationspage.usaAgent.click();
        });

        browser.sleep(2000);
        locationspage.allowButton.isPresent().then(function () {
            var randombutton = Math.floor((Math.random() * 2) + 1);
            if (randombutton == 1){
                locationspage.allowButton.click();

                locationspage.okButton.isPresent().then(function () {
                    locationspage.okButton.click();
                });

            }else{
                locationspage.dontallowButton.click();
            }
        });


        browser.pause();
    });

}, 120000);

numbergenerator = function(min, max){

    return parseInt(Math.random() * (max - min) + min);
};


