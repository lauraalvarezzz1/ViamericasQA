/**
 * Created by lauraalvarez on 12/11/17.
 */


describe('Fast send money Testing - Viamericas Web App', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/#/compliance');
    });

    beforeEach(function() {
        footerpage = require('../../po/staticPages/footerPages');
    });

    it('Checking all the states in Compliance page', function () {
        browser.sleep (7000);
        browser.executeScript('window.scrollTo(0,700);').then(function () {

            var selectstate =
                footerpage.stateComLI.count().then(function(countStates) {
                    var stateselected = Math.floor((Math.random() * countStates) + 1);
                    footerpage.stateCom.element(by.css('input#dropdown-input')).click();
                    footerpage.stateCom.element(by.css('ul.dropdown-viam-list li:nth-child('+stateselected+')')).click();
                    console.log(stateselected);
                })
        })

    });

}, 120000);

numbergenerator = function(min, max){

    return parseInt(Math.random() * (max - min) + min);
};

