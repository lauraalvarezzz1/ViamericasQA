/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Creating a new recipient with bank account', function() {

    beforeAll(function() {
        browser.get('https://test.govianex.com/');
    });

    beforeEach(function() {
        homePage = require('../po/homePage');
        loginPage = require('../po/loginPage');
        paymentOptionsPage = require('../po/paymentOptionsPage');
    });


    it('Creating a new Recipient', function() {
        homePage.logInButtonXpath.click();
        //Login
        loginPage.userName.sendKeys("viamericas.testing@gmail.com");
        loginPage.password.sendKeys("Viamericas123");
        loginPage.loginButton.click();
//        browser.sleep(5000);

//    promiseExpected(element(by.linkText('Log Out'))).then(function() {
//
//
//    return promiseExpected(1);
//        browser.pause();
//        });

    });

    it('click', function() {
        homePage.gomyaccount.click();
        homePage.goToPayments.click();
    });

});

function promiseExpected(elements){
    return new Promise(function (fulfill, reject){
            var counter = 0;
            var flag = false;
            while(!flag && counter < 10){
                if(expect(elements.isDisplayed())){
                    fulfill("esta bueno!!");
                }
                counter ++;
                browser.sleep(2000);
          }
    });
}


numbergenerator = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
};
