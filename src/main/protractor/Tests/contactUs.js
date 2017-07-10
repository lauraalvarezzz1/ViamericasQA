/**
 * Created by juan muñoz on 30/06/17.
 */

describe('Contact us testing Web App', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/');
        contactUsPage = require('../po/contactUsPage');
        homePage = require('../po/homePage');

    });

    it('Contact us form', function() {
        //Go to contact us page
        homePage.customerServiceButton.click();

        //Filling the form
        contactUsPage.name.sendKeys("Name testing");
        contactUsPage.email.sendKeys("viamericas.testing" + numbergenerator(0000000000, 9999999999) + "@gmail.com");
        contactUsPage.comments.sendKeys("Comment testing");

        //Submit the form
        contactUsPage.sendMessageButton.click();

        //Asserts
        expect(contactUsPage.divMessage.getText()).toEqual("*Verify captcha and submit again");
    });
});

numbergenerator = function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
};