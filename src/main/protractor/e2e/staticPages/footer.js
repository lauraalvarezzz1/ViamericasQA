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
        }, 2000);
    });

    it('Compliance information', function () {
        footerPages.compliancelink.isPresent().then(function () {
            footerPages.compliancelink.click();
            var selectstates =
                i = 0;
            footerPages.stateComLI.count().then(function (countbanks) {
                console.log("Destination - Banks available: " + countbanks);
                for (var i = 1; i < countbanks; ++i) {
                    console.log('1) i is: ', i);
                    var func = (function () {
                        footerPages.stateCom.element(by.css('input#dropdown-input')).click();
                        footerPages.stateCom.element(by.css('ul.dropdown-viam-list li:nth-child(' + i + ')')).click();
                        console.log("Destination - Bank selected: " + i);
                        footerPages.stateCom.element(by.css('i#dropdown-clear')).click();
                        var j = i;
                        return function () {
                            console.log('2) j is: ', j);
                            someArray[j] // 'j' takes the values of 0..2
                        }
                    })();
                }
            });

            expect(browser.driver.getCurrentUrl()).toEqual("https://test.govianex.com/#/compliance");
        }, 2000);
    });

    it('File a Complaint information', function () {
        footerPages.fileacomplaintlink.isPresent().then(function () {
            footerPages.fileacomplaintlink.click();
            expect(browser.driver.getCurrentUrl()).toEqual("https://test.govianex.com/#/file-complaint");
        }, 2000);

        // "Commerce.alaska" link
        element(by.xpath('/html/body/div[3]/div/div[1]/div[2]/div/div/div/div/ul[2]/li[1]/a')).click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[handles.length - 1]).then(function () {
                    expect(browser.getCurrentUrl()).toEqual("https://www.commerce.alaska.gov/web/portals/3/pub/complaint_form.pdf");
                });
                browser.switchTo().window(handles[0]);
            });
        }, 3000);

        // "dob.texas" link
        element(by.xpath('/html/body/div[3]/div/div[1]/div[2]/div/div/div/div/ul[9]/li[2]/a')).click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[handles.length - 1]).then(function () {
                    expect(browser.getCurrentUrl()).toEqual("http://www.dob.texas.gov/");
                });
                browser.switchTo().window(handles[0]);
            });
        }, 3000);

        // "DFI: Washington State Department of Financial Institutions" link
        element(by.xpath('/html/body/div[3]/div/div[1]/div[2]/div/div/div/div/ul[12]/li[2]/a')).click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[handles.length - 1]).then(function () {
                    expect(browser.getCurrentUrl()).toEqual("https://dfi.wa.gov/");
                });
                browser.switchTo().window(handles[0]);
            });
        }, 3000);
    });

    it('FAQs information', function () {
        footerPages.faqslink.isPresent().then(function () {
            footerPages.faqslink.click();
            expect(browser.driver.getCurrentUrl()).toEqual("https://test.govianex.com/#/faq");
        }, 2000);
    });

    it('Contact us information', function () {
        footerPages.contactusfooter.isPresent().then(function () {
            footerPages.contactusfooter.click();
            expect(browser.driver.getCurrentUrl()).toEqual("https://test.govianex.com/#/contact-us");
        }, 2000);
    });

    it('Terms and conditions', function () {
        // "Careers information" link
        element(by.id('terms-and-conditions-footer')).click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[handles.length - 1]).then(function () {
                    expect(browser.getCurrentUrl()).toEqual("https://s3.amazonaws.com/cdn.govianex.com/terms-and-conditions/test/viamericas_terms-and-conditions.pdf");
                });
                browser.switchTo().window(handles[0]);
            });
        }, 3000);
    });

    it('Privacy Policy', function () {
        // "Careers information" link
        element(by.id('privacy-policy-footer')).click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[handles.length - 1]).then(function () {
                    expect(browser.getCurrentUrl()).toEqual("https://s3.amazonaws.com/cdn.govianex.com/privacy-policy/test/viamericas_privacy-policy.pdf");
                });
                browser.switchTo().window(handles[0]);
            });
        }, 3000);
    });
});

