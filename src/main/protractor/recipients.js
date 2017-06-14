/**
 * Created by lauraalvarez on 5/06/17.
 */
describe('Recipients Testing - Viamericas Web App', function() {
    //Login Form
    var LoginHomePage = browser.element(by.partialButtonText('Log In'));
    var LoginForm = browser.element(by.partialButtonText('Log In'));
    var Username = browser.element(by.model('login.user.username'));
    var password = browser.element(by.model('login.user.password'));

    //Go to Recipients page
    var gomyaccount = browser.element(by.linkText('My Account'));
    var gorecipients = browser.element(by.linkText('Recipients'));
    var createbutton = browser.element(by.id('create-recipient-2'));

    //Recipient page fields
    var recipientFirstName = browser.element(by.id('first-name'));
    var recipientLastName = browser.element(by.id('last-name'));
    var recipientMiddleName = browser.element(by.id('middle-name'));
    var recipientSecondLastName = browser.element(by.id('second-last-name'));
    var recipientPhone = browser.element(by.id('mobile-phone'));
    var recipientEmail = browser.element(by.id('email'));
    var month = browser.element(".//*[@placeholder='Month']"));
    var day = browser.element(by.xpath(".//*[@placeholder='Day']"));
    var year = browser.element(by.xpath(".//*[@placeholder='Year']"));
    var recipientAddressOne = browser.element(by.id('address-1'));
    var recipientAddressTwo = browser.element(by.id('address-2'));
    var recipientCountry = browser.element(by.xpath(".//*[@placeholder='Country']"));
    var recipientState = browser.element(by.xpath(".//*[@placeholder='State']"));
    var recipientZipcode = browser.element(by.id("zipcode"));
    var recipientCity = browser.element(by.xpath(".//*[@placeholder='City']"));




    //var dropdowncountry = element(by.model('dropdown.selectedText'));
    beforeEach(function() {
        browser.get('https://dev.govianex.com/#/account/login');
    });

    it('Creating a new Recipient', function() {

        Username.sendKeys("viamericas.testing@gmail.com");
        password.sendKeys("Viamericas123");
        LoginHomePage.click();


        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.sleep(5000);

        gomyaccount.click();
        gorecipients.click();
        createbutton.click();

        recipientFirstName.sendKeys("Testing First");
        recipientLastName.sendKeys("Testing last");
        recipientMiddleName.sendKeys("Testing middle");
        recipientSecondLastName.sendKeys("Testing second last");
        recipientPhone.sendKeys("2013340044");
        recipientEmail.sendKeys("protractor@testing.com");
        month.sendKeys("2");
        day.sendKeys("2");
        year.sendKeys("1986");
        recipientAddressOne.sendKeys("address one");
        recipientAddressTwo.sendKeys("address two");
        recipientCountry.sendKeys("COLOMBIA");
        recipientState.sendKeys("ANTIOQUIA");
        recipientZipcode.sendKeys("00057");
        recipientCity.sendKeys("MEDELLIN");

        browser.pause();

        browser.ignoreSynchronization = false;
    });

});


