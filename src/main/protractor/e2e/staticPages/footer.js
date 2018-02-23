/**
 * Created by lauraalvarez on 12/11/17.
 */


describe('Footer testing Web App', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        footerPages = require('../../../po/mytransactionsPage');
    });

    it('About Us information', function() {
        footerPages.aboutuslink.isPresent().then(function () {
            footerPages.aboutuslink.click();
            footerPages.unoRanked.click();
            footerPages.InternationalFinanceCorporation.click();
            footerPages.april.click();
        });
    });

    it('Leadership information', function() {
        footerPages.leadershiplink.isPresent().then(function () {
            footerPages.leadershiplink.click();
        });
    });

    it('Leadership information', function() {
        footerPages.leadershiplink.isPresent().then(function () {
            footerPages.leadershiplink.click();
        });
    });

});

