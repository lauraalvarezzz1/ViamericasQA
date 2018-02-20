/**
 * Created by lauraalvarez on 20/02/18.
 */



describe('Profile settings Testing - Updating the sender information from my account', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/#/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../../../po/homePage');
        profilePage = require('../../../po/profilePage');
        loginPage = require('../../../po/loginPage');
    });

    it('Updating the sender information', function () {
        homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("testingviamericas@gmail.com");
            loginPage.password.sendKeys("Viamericas123");
            loginPage.loginButton.click();

            browser.sleep(4000);

            homePage.myaccountheader.isPresent().then(function () {
                homePage.myaccountheader.click();
            });

            profilePage.firsNameProfile.clear();
            profilePage.firsNameProfile.sendKeys("ViamericasFirstNameUpdated");

            profilePage.middleNameProfile.clear();
            profilePage.middleNameProfile.sendKeys("ViamericasMiddleNameUpdated");

            profilePage.lastnameProfile.clear();
            profilePage.lastnameProfile.sendKeys("ViamericasLastNameUpdated");

            profilePage.secondlastnameProfile.clear();
            profilePage.secondlastnameProfile.sendKeys("ViamericasSecondLastNameUpdated");

            profilePage.address1Profile.clear();
            profilePage.address1Profile.sendKeys("ViamericasAddressInformationUpdated");

            profilePage.moreaddressinfoProfile.clear();
            profilePage.moreaddressinfoProfile.sendKeys("ViamericasMoreAddressInformationUpdated");

            profilePage.zipcodeProfile.clear();
            profilePage.zipcodeProfile.sendKeys("90001");

            var selectCityProfile =
                profilePage.cityProfileLI.count().then(function (countcities) {
                    console.log("Profile Settings - Cities available for the zip code " + countcities);
                    var ran = Math.floor((Math.random() * countcities) + 1);
                    profilePage.cityProfile.element(by.css('input#dropdown-input')).click();
                    profilePage.cityProfile.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                    console.log("Profile Settings - City selected:  " + ran);
                });

            profilePage.phonenumberProfile.clear();
            profilePage.phonenumberProfile.sendKeys("2122222222");

            var selectlanguage =
                profilePage.languageProfileLI.count().then(function (lg) {
                    var ran = Math.floor((Math.random() * lg) + 1);
                    profilePage.languageProfile.element(by.css('input#dropdown-input')).click();
                    profilePage.languageProfile.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                    console.log("Profile Settings - Language selected:  " + ran);
                });

            profilePage.updateButtonProfile.click();
            browser.sleep(2000);

            profilePage.accountupdatedpopup.isPresent().then(function () {
                profilePage.accountupdatedpopup.click();
                browser.sleep(2000);
                homePage.recipientsButton.click();
                browser.sleep(2000);
                homePage.profilesettingsButton.click();

            });
            browser.sleep(2000);
            expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/account/profile');
        });

    });

});
