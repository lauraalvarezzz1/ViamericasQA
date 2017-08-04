

describe('Viamericas testing Web App', function() {

    var LoginForm = element(by.partialButtonText('Log In'));
    var Username = element(by.model('login.user.username'));
    var password = element(by.model('login.user.password'));
    //var LoginForm = element(by.click('Log in'));

    beforeEach(function() {
        browser.get('https://govianex.com/#/account/login');
    });

    it('should have a title inside login form', function() {
    //gets the title of the
        expect(browser.getTitle()).toEqual('Send Money Online, Global Money Transfer | Vianex powered by Viamericas');
    });

    it('should go to login form and complete the information', function() {
        Username.sendKeys("viamericas.testing@gmail.com");
        password.sendKeys("Viamericas123");
        LoginForm.click();
        browser.pause();
    });

});

