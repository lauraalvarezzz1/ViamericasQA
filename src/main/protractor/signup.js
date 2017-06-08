

describe('Sign up testing Web App', function() {

    var Signup = element(by.partialButtonText('Sign Up For Free'));
    var Username = element(by.model('preRegister.newUserDTO.email'));
    var password = element(by.model('preRegister.newUserDTO.password'));
    var SignUpButton = element(by.partialButtonText('Sign Up'));
    var ijustwanttosignupButton = element(by.partialButtonText('I just want to sign up'));

    var firstname = element(by.model('register.formData.firstName'));
    var lastname = element(by.model('register.formData.lastName'));
    var mobilephonenumber = element(by.model('register.formData.phone1'));
    var addressline1 = element(by.model('register.formData.address1'));
    var zipcode = element(by.model('register.formData.zipCode'));
    var selectDropdownElement = element(by.model('dropdown.selectedText'));



    beforeEach(function() {
        browser.get('https://dev.govianex.com/#/');
    });

    it('Sign Up form', function() {
        Signup.click();
        Username.sendKeys("viamericas.testing+1@gmail.com");
        password.sendKeys("Viamericas123");
        SignUpButton.click();

        ijustwanttosignupButton.click();
        firstname.sendKeys("Viamericas");
        lastname.sendKeys("Testing");
        mobilephonenumber.sendKeys("3122342323");
        addressline1.sendKeys("Testing");
        zipcode.sendKeys("33233");

        selectDropdownElement.all(by.tagName('12'))
            .then(function (options) {
                options[0].click();
            });

        browser.pause();
    });

});

