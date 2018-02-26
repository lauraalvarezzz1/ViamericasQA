/**
 * Created by lauraalvarez on 12/11/17.
 */


describe('Footer testing Web App', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        footerPages = require('../../po/staticPages/footerPages');
    });

    it('About Us information', function () {
        footerPages.aboutuslink.isPresent().then(function () {
            footerPages.aboutuslink.click();
            expect(browser.driver.getCurrentUrl()).toEqual("https://test.govianex.com/#/about-us");

            // "#1 ranked" link
            element(by.xpath('//*[@id="yui_3_16_0_ym19_1_1485211113917_117706"]/p[1]/a')).click().then(function () {
                browser.getAllWindowHandles().then(function (handles) {
                    browser.switchTo().window(handles[handles.length - 1]).then(function () {
                        expect(browser.getCurrentUrl()).toEqual("https://www.thedialogue.org/resources/remittance-transfers-scorecard-2016-test/");
                    });
                    browser.switchTo().window(handles[0]);
                });
            }, 3000);

            // "International Finance Corporation" link
            element(by.xpath('//*[@id="yui_3_16_0_ym19_1_1485211113917_117706"]/p[2]/a[1]')).click().then(function () {
                browser.getAllWindowHandles().then(function (handles) {
                    browser.switchTo().window(handles[handles.length - 1]).then(function () {
                        expect(browser.getCurrentUrl()).toEqual("http://www.ifc.org/wps/wcm/connect/corp_ext_content/ifc_external_corporate_site/home");
                    });
                    browser.switchTo().window(handles[0]);
                });
            }, 3000);

            // "April 2014" link
            element(by.xpath('//*[@id="yui_3_16_0_ym19_1_1485211113917_117706"]/p[2]/a[2]')).click().then(function () {
                browser.getAllWindowHandles().then(function (handles) {
                    browser.switchTo().window(handles[handles.length - 1]).then(function () {
                        expect(browser.getCurrentUrl()).toEqual("http://www.ifc.org/wps/wcm/connect/Topics_Ext_Content/IFC_External_Corporate_Site/FinTech+Home/Portfolio/");
                    });
                    browser.switchTo().window(handles[0]);
                });
            }, 3000);
        });
    });

    it('Leadership information', function () {
        footerPages.leadershiplink.isPresent().then(function () {
            footerPages.leadershiplink.click();
            expect(browser.driver.getCurrentUrl()).toEqual("https://test.govianex.com/#/management");
        });
    });

    it('Careers information', function () {
        // "Careers information" link
        element(by.id('careers-footer')).click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[handles.length - 1]).then(function () {
                    expect(browser.getCurrentUrl()).toEqual("http://corporate.viamericas.com/careers/");
                });
                browser.switchTo().window(handles[0]);
            });
        }, 3000);
    });

    it('News information', function () {
        footerPages.newslink.isPresent().then(function () {
            footerPages.newslink.click();
            expect(browser.driver.getCurrentUrl()).toEqual("https://test.govianex.com/#/news");
        });
    });

    it('Compliance information', function () {
        footerPages.compliancelink.isPresent().then(function () {
            footerPages.compliancelink.click();
            expect(browser.driver.getCurrentUrl()).toEqual("https://test.govianex.com/#/compliance");

            var selectstates =
                footerPages.stateComLI.count().then(function (countbanks) {
                    console.log("Destination - Banks available: " + countbanks);
                    i=0;
                    for (var i = 0; i < countbanks; ++i) {
                        console.log('1) i is: ', i);
                        var func = (function() {
                            footerPages.stateCom.element(by.css('input#dropdown-input')).click();
                            footerPages.stateCom.element(by.css('ul.dropdown-viam-list li:nth-child(' + i + ')')).click();
                            console.log("Destination - Bank selected: " + i);
                            var j = i;
                            return function() {
                                console.log('2) j is: ', j);
                                someArray[j] // 'j' takes the values of 0..2
                            }
                        })();
                        getPromise().then(func);
                    }
                });
            console.log('*  finished looping. i is: ', i);
        });
    });
});

