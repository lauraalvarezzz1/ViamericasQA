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
    var createbutton = browser.element(by.partialButtonText('Create'));


    //var dropdowncountry = element(by.model('dropdown.selectedText'));


    beforeEach(function() {
        browser.get('https://dev.govianex.com/#/account/login');
    });

    it('Creating a new Recipient', function() {

        Username.sendKeys("viamericas.testing@gmail.com");
        password.sendKeys("Viamericas123");
        LoginHomePage.click();
        browser.sleep(7000);


        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.sleep(5000);

        gomyaccount.click();
        gorecipients.click();

        browser.sleep(6000);
        createbutton.click(); // No esta encontrando el boton :(
        browser.pause();

        browser.ignoreSynchronization = false;
    });

});


