/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Updating a recipient already created', function () {

    beforeAll(function () {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        homePage = require('../../../po/homePage');
        recipientPage = require('../../../po/recipientsPage');
        loginPage = require('../../../po/loginPage');
    });

    it('Updating a existing recipient', function () {
        homePage.loginHeader.click();
        loginPage.userName.isPresent().then(function () {
            loginPage.userName.sendKeys("testingviamericas@gmail.com");
            loginPage.password.sendKeys("Viamericas123");
            loginPage.loginButton.click();

            browser.sleep(2000);

            homePage.myaccountheader.isPresent().then(function () {
                homePage.myaccountheader.click();
            });
            homePage.recipientsButton.click();

            recipientPage.editButton.isPresent().then(function () {
                recipientPage.editButton.click();

                recipientPage.first_name.clear();
                recipientPage.first_name.sendKeys("EditFirstName");
                recipientPage.middle_name_optional.clear();
                recipientPage.middle_name_optional.sendKeys("MiddleName");
                recipientPage.last_name.clear();
                recipientPage.last_name.sendKeys("LastName");
                recipientPage.secondlast_name_optional.clear();
                recipientPage.secondlast_name_optional.sendKeys("SecondLast");
                recipientPage.dateofbirth.sendKeys("2000/01/30")
                recipientPage.address_line1.clear();
                recipientPage.address_line1.sendKeys("Street 5 - Updating Address Line1");
                recipientPage.email_optional.clear();
                recipientPage.email_optional.sendKeys("recipient@gmail.com");
                recipientPage.moreaddressinformation.clear();
                recipientPage.moreaddressinformation.sendKeys("moreaddressinformation testing");
                recipientPage.updateRecipientButton.click();
            });
            browser.sleep(2000);
            expect(browser.getCurrentUrl()).toEqual('https://test.govianex.com/#/account/recipients');
        });
    });

});

numbergenerator = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
};
