/**
 * Created by lauraalvarez on 06/01/18.
 */

describe('Compliance information', function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;

    beforeAll(function () {
        browser.get('https://test.govianex.com/#!/');
    });
    beforeEach(function () {
        footerPages = require('../../po/staticPages/footerPages');
    });
    it('Viamericas State Licensing Information', function () {
        footerPages.compliancelink.isPresent().then(function () {
            footerPages.compliancelink.click();
            i = 0;
            footerPages.stateComLI.count().then(function (countstates) {
                for (var i = 1; i < countstates; ++i) {
                    var func = (function () {

                        footerPages.stateCom.element(by.css('input#dropdown-input')).click();
                        footerPages.stateCom.element(by.css('ul.dropdown-viam-list li:nth-child(' + i + ')')).click();
                        footerPages.licences.click();
                        appendOutput(i);
                        footerPages.stateCom.element(by.css('i#dropdown-clear')).click();
                    })();
                }
            });
            expect(browser.driver.getCurrentUrl()).toEqual("https://test.govianex.com/#/compliance");
        });

    });


});
function appendOutput(i) {

    browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[handles.length - 1]).then(function () {
            /* if (i == 1) {
             //ALABAMA LICENCE
             expect(browser.getCurrentUrl()).toEqual("http://cdn.govianex.com/state-licenses/alabama.pdf");
             } else {
             console.log("aqui vamos");
             }*/
        });
        browser.switchTo().window(handles[0]);
    });

}

