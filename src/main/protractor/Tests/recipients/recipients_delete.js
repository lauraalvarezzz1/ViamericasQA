/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Removing the recipient', function() {
    var deferred = protractor.promise.defer();

    beforeEach(function() {
        browser.get('https://dev.govianex.com/#/');
        homePage = require('../../po/homePage');
        recipientsPage = require('../../po/recipientsPage');
        loginPage = require('../../po/loginPage');

    });


    it('Creating a new Recipient', function() {

        homePage.logInButtonXpath.click();

        //Login
       /* loginPage.userName.sendKeys("viamericas.testing@gmail.com");
        loginPage.password.sendKeys("Viamericas123");
        loginPage.loginButton.click();
        homePage.gomyaccount.click();*/
        loginPage.userName.sendKeys("4");

        var completeusername = element(by.id('username'));
        getTextAsInteger(completeusername).then(
            function success(num) {
                console.log(num);
            },
            function error(reason) {
                console.error(reason);
            });


        browser.pause();
       /* browser.sleep(5000);
        browser.ignoreSynchronization = true;
        browser.waitForAngular();

        //Go to recipients
        homePage.gorecipients.click();
        recipientsPage.editButton.click();

        browser.sleep(5000);
        recipientsPage.deleteButton.click();

        browser.pause();*/
    });


});

numbergenerator = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
};

/*promise.then(function(value) {
    console.log('Yay, threw a ' + value + '.');
}, function(value) {
    console.log('Oh, noes, threw a ' + value + '.');
});
console.log('3');*/

function getTextAsInteger(element, radix) {
    radix = radix || 10;
    var deferred = protractor.promise.defer();
    element.getText().then(
        function success(text) {
            var num = parseInt(text, radix);
            if (!isNaN(num)) {
                deferred.fulfill(num);
            } else {
                deferred.reject('could not parse "$1" into an integer'
                    .replace('$1', text));
            }
        },
        function error(reason) {
            deferred.reject(reason);
        });
    return deferred.promise;
}


