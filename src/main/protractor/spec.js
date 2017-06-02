describe('Viamericas testing Web App', function() {
    var LoginHomepage = element(by.sref('login'));
    var Username = element(by.model('login.user.username'));
    var password = element(by.model('login.user.password'));
    var LoginForm = element(by.click('Login'));

    beforeEach(function() {
        browser.get('https://govianex.com/');
    });

    it('should have a title inside login form', function() {
        expect(browser.getText()).toEqual('Easy. Safe. Convenient.');
    });

    it('should go to login form and complete the information', function() {
        LoginHomePage.click();
        Username.sendKeys("viamericas.testing@gmail.com");
        Password.sendKeys("Viamericas123");
        LoginForm.click();
    });

});