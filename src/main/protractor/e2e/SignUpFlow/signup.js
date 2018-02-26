describe('Sign up testing Web App', function() {

    beforeEach(function() {
        browser.get('https://test.govianex.com/#/');
        signUpPage = require('../../po/signupPage');
        homePage = require('../../po/homePage');

    });

    it('Sign Up form', function() {

        homePage.signUpHeader.click();
        browser.sleep(5000);

        signUpPage.firstname.isPresent().then(function () {
            signUpPage.firstname.sendKeys("Viamericas");
            signUpPage.lastname.sendKeys("Testing");
            signUpPage.mobilephone.sendKeys("5158380290");
            signUpPage.email.sendKeys("viamericas.testing+" + numbergenerator(0000000000, 9999999999) + "@gmail.com");
            signUpPage.password.sendKeys("Viamericas123");
        });

        //Go to LOGIN FORM or SIGN UP FLOW

        var gotoanyflow = Math.floor((Math.random() * 2) + 1);
        if (gotoanyflow == 1) {
            signUpPage.loginbutton.click();
            expect(browser.getCurrentUrl()).toEqual('https://dev.govianex.com/#/account/login');
        } else {
            signUpPage.signupButton.click();
            var signuporsendmoney = Math.floor((Math.random() * 2) + 1);
            if (signuporsendmoney == 1) {
                signUpPage.justwantsignup.click();

                //Complete sign up form
                signUpPage.first_name.sendKeys("Testing");
                signUpPage.middle_name_optional.sendKeys("Testing");
                signUpPage.last_name.sendKeys("Testing");
                signUpPage.secondlast_name_optional.sendKeys("Testing");
                signUpPage.mobile_phone_optional.sendKeys(numbergenerator(312000000, 312999999));
                signUpPage.address_line1.sendKeys("Street 5 - Testing Address Line1");

                signUpPage.month.sendKeys(numbergenerator(0, 1));
                if (signUpPage.month >= 1) {
                    signUpPage.month.sendKeys(numbergenerator(0, 2));
                } else {
                    signUpPage.month.sendKeys(numbergenerator(1, 9));
                }

                signUpPage.year.sendKeys(numbergenerator(1900, 1998));

                if (signUpPage.month == 02) {
                    signUpPage.day.sendKeys(numbergenerator(0, 2));
                    if (signUpPage.day == 0) {
                        signUpPage.day.sendKeys(numbergenerator(1, 9));
                    } else if (signUpPage.day == 1) {
                        signUpPage.day.sendKeys(numbergenerator(0, 9));
                    } else {
                        signUpPage.day.sendKeys(numbergenerator(0, 8));
                    }
                } else {
                    signUpPage.day.sendKeys(numbergenerator(0, 3));
                    if (signUpPage.day == 3) {
                        if (signUpPage.month == 04 || signUpPage.month == 06 || signUpPage.month == 09 || signUpPage.month == 11) {
                            signUpPage.day.sendKeys(numbergenerator(0, 0));
                        } else {
                            signUpPage.day.sendKeys(numbergenerator(0, 1));
                        }
                    } else {
                        if (signUpPage.day == 0) {
                            signUpPage.day.sendKeys(numbergenerator(1, 9));
                        } else {
                            signUpPage.day.sendKeys(numbergenerator(0, 9));
                        }
                    }
                }

                signUpPage.zipcode.sendKeys("90001"); //Pending for send aleatory zip codes
                var selectcity =
                    signUpPage.cityLI.count().then(function(countcities) {
                        var ran = Math.floor((Math.random() * countcities) + 1);
                        signUpPage.city.element(by.css('input#city-select')).click();
                        signUpPage.city.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                        console.log("Cities available" + ran);

                    });

                //Register the user with/without program
                var programornot = Math.floor((Math.random() * 2) + 1);
                if (programornot == 1) {
                    var selectprogram =
                        signUpPage.programLI.count().then(function(countprograms) {
                            var ran = Math.floor((Math.random() * countprograms) + 1);
                            signUpPage.program.element(by.css('input#partner-id-select')).click();
                            signUpPage.program.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                            console.log("Programs available" + ran);

                        });
                    browser.sleep(2000);

                    var selectunion =
                        signUpPage.unionNameLI.count().then(function(countunions) {
                            var ran = Math.floor((Math.random() * countunions) + 1);
                            signUpPage.unionName.element(by.css('input#affiliate-name-select')).click();
                            signUpPage.unionName.element(by.css('ul.dropdown-viam-list li:nth-child(' + ran + ')')).click();
                            console.log("Unions available" + ran);

                        });
                }
                signUpPage.createAccountButton.click();
                expect(browser.getCurrentUrl()).toEqual('https://dev.govianex.com/#/sendmoney/destination');

            } else {
                console.log("Go to fast send money flow");
            }

        }
    });
});

numbergenerator = function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
};