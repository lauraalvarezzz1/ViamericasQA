/**
 * Created by lauraalvarez on 5/06/17.
 */
describe('Fees and Rates Testing - Viamericas Web App', function() {

    //Login Form
    var goLoginHomePage = browser.element(by.partialButtonText('Log In'));
    var LoginForm = browser.element(by.partialButtonText('Log In'));
    var Username = browser.element(by.model('login.user.username'));
    var password = browser.element(by.model('login.user.password'));

    //Fees and Rates
    var goToFeesAndRates = browser.element(by.linkText('Fees and Rates'));
    var country = browser.element(by.xpath(".//*[@placeholder='Country']"));
    var amount = browser.element(by.id('amount'));
    var bankDepositButton = browser.element(by.partialButtonText('/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[1]/div[3]/div[1]/div[1]/div'));
    var cashPickupButton = browser.element(by.partialButtonText('Cash Pickup'));
    var feesAndRatesButton = browser.element(by.id('send-money'));


    beforeEach(function() {
        browser.get('https://dev.govianex.com/');
    });


  it('Not logged in', function() {
    goToFeesAndRates.click();
    //Wait for angular
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(2000);
    country.sendKeys("COLOMBIA");
    amount.sendKeys("180");
    browser.sleep(5000);
    bankDepositButton.click();
    browser.sleep(5000);
    feesAndRatesButton.click();

    browser.ignoreSynchronization = false;
  });


  it('Logged in', function() {

        //Login
        goLoginHomePage.click();
        Username.sendKeys("viamericas.testing@gmail.com");
        password.sendKeys("Viamericas123");
        LoginForm.click();
        browser.sleep(2000);

        //Wait for angular
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.sleep(2000);
        goToFeesAndRates.click();
        country.sendKeys("COLOMBIA");
        amount.sendKeys("180");
        browser.sleep(2000);

        bankDepositButton.click();
        feesAndRatesButton.click();

        browser.pause();
        browser.ignoreSynchronization = false;


    });

});
