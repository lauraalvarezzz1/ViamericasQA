/**
 * Created by lauraalvarez on 5/06/17.
 */


describe('Recipients Testing - Viamericas Web App', function() {

    beforeEach(function() {
        browser.get('https://dev.govianex.com/#/');
        homePage = require('../po/homePage');
        recipientsPage = require('../po/recipientsPage');
        loginPage = require('../po/loginPage');

    });


    it('Creating a new Recipient', function() {


        homePage.logInButtonXpath.click();
        //Login
        loginPage.userName.sendKeys("viamericas.testing@gmail.com");
        loginPage.password.sendKeys("Viamericas123");
        loginPage.loginButton.click();
        browser.sleep(5000);
        browser.ignoreSynchronization = true;
        browser.waitForAngular();

        //Go to recipients
        homePage.gomyaccount.click();
        homePage.gorecipients.click();
        recipientsPage.createButton.click();

        //Complete the fields

        recipientsPage.first_name.sendKeys("Testing");
        recipientsPage.middle_name_optional.sendKeys("Testing");
        recipientsPage.last_name.sendKeys("Testing");
        recipientsPage.secondlast_name_optional.sendKeys("Testing");
        recipientsPage.mobile_phone_optional.sendKeys(numbergenerator(312000000, 312999999));
        recipientsPage.email_optional.sendKeys("Testing"+numbergenerator(1,9999)+"@gmail.com");
        recipientsPage.address_line1.sendKeys("Street 5 - Testing Address Line1");

        recipientsPage.month.sendKeys(numbergenerator(0,1));
        if (recipientsPage.month >= 1){
            recipientsPage.month.sendKeys(numbergenerator(0,2));
        } else{
            recipientsPage.month.sendKeys(numbergenerator(1,9));
        }
        browser.sleep(6000);

        recipientsPage.year.sendKeys(numbergenerator(1900,1998));
        browser.sleep(6000);


        if (recipientsPage.month >= 02){
            recipientsPage.day.sendKeys(numbergenerator(0,2));
            if (recipientsPage.day >= 0 || Day >= 1){
                recipientsPage.day.sendKeys(numbergenerator(1,9));
            }else{
                recipientsPage.day.sendKeys(numbergenerator(0,8));
            }
        } else{
            recipientsPage.day.sendKeys(numbergenerator(0,3));
            if (recipientsPage.month==04 || recipientsPage.month==06 || recipientsPage.month==09 || recipientsPage.month==11 && recipientsPage.day==3){
                recipientsPage.day.sendKeys(numbergenerator(0,0));
            }else{
            recipientsPage.day.sendKeys(numbergenerator(1,9));
            }
        }
        browser.sleep(3000);

        var selectcountry =
            recipientsPage.countryLI.count().then(function(countCountries) {
                var ran = Math.floor((Math.random() * countCountries) + 1);
                recipientsPage.country.element(by.css('input#country-select')).click();
                recipientsPage.country.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                console.log("Countries available:" +ran);

            });
        browser.sleep(3000);

        var selectstate =
            recipientsPage.stateLI.count().then(function(countstates) {
                var ran = Math.floor((Math.random() * countstates) + 1);
                recipientsPage.state.element(by.css('input#state-select')).click();
                recipientsPage.state.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                console.log("States available"+ ran);

            });

        browser.sleep(3000);

        var selectcity =
            recipientsPage.cityLI.count().then(function(countcities) {
                var ran = Math.floor((Math.random() * countcities) + 1);
                recipientsPage.city.element(by.css('input#city-select')).click();
                recipientsPage.city.element(by.css('ul.dropdown-viam-list li:nth-child('+ran+')')).click();
                console.log("Cities available" +ran);

            });

        browser.pause();
    });


});

numbergenerator = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
};

