

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.driver.get('http://www.govianex.com');

    element(by.partialButtonText('Log In')).click();

    element(by.model('login.user.username')).sendKeys('viamericas.testing@gmail.com');
    element(by.model('login.user.password')).sendKeys('Viamericas123');
    element(by.partialButtonText('Log In')).click();
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    element(by.partialButtonText('Back')).click();

    browser.pause();

    browser.ignoreSynchronization = false;

  });
});
