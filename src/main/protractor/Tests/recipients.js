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
    var createbutton = browser.element(by.id('create-recipient-2'));

    //Recipient information page
    var first_name = browser.element(by.id('first-name'));
    var middle_name_optional = browser.element(by.id('middle-name'));
    var last_name = browser.element(by.id('last-name'));
    var secondlast_name_optional = browser.element(by.id('second-last-name'));
    var mobile_phone_optional = browser.element(by.id('mobile-phone'));
    var email_optional = browser.element(by.id('email'));
    var address_line1 = browser.element(by.id('address-1'));
    var Month = browser.element(by.xpath(".//*[@placeholder='Month']"));
    var Day = browser.element(by.xpath(".//*[@placeholder='Day']"));
    var Year = browser.element(by.xpath(".//*[@placeholder='Year']"));
    //var Country = browser.element(by.xpath(".//*[@placeholder='Country']"));
    //var option_list = Country.children().length;
    var Country = browser.element(by.id("country-select"));
    var memory =
        element.all(by.repeater('item in dropdown.list | filter : dropdown.filterElementsCriteria(dropdown.selectedText) | orderBy : dropdown.alphabeticalOrder : false : dropdown.orderElementsCriteria as filteredList'));



    beforeEach(function() {
        browser.get('https://dev.govianex.com/#/account/login');

    });


    it('Creating a new Recipient', function() {

        //Login
        Username.sendKeys("viamericas.testing@gmail.com");
        password.sendKeys("Viamericas123");
        LoginHomePage.click();
        browser.sleep(7000);

        //Wait for angular
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.sleep(5000);

        //Go to recipients
        gomyaccount.click();
        gorecipients.click();
        browser.sleep(6000);
        createbutton.click();

        //Complete the fields

        first_name.sendKeys("Testing");
        middle_name_optional.sendKeys("Testing");
        last_name.sendKeys("Testing");
        secondlast_name_optional.sendKeys("Testing");
        mobile_phone_optional.sendKeys(numbergenerator(312000000, 312999999));
        email_optional.sendKeys("Testing"+numbergenerator(1,9999)+"@gmail.com");
        address_line1.sendKeys("Street 5 - Testing Address Line1");

        Month.sendKeys(numbergenerator(0,1));
        if (Month >= 1){
            Month.sendKeys(numbergenerator(0,2));
        } else{
            Month.sendKeys(numbergenerator(1,9));
        }
        browser.sleep(6000);

        Year.sendKeys(numbergenerator(1900,1998));
        browser.sleep(6000);


        if (Month >= 02){
            Day.sendKeys(numbergenerator(0,2));
            if (Day >= 0 || Day >= 1){
                Day.sendKeys(numbergenerator(1,9));
            }else{
                Day.sendKeys(numbergenerator(0,8));
            }
        } else{
            Day.sendKeys(numbergenerator(0,3));
            if (Month==04 || Month==06 || Month==09 || Month==11 && Day==3){
                Day.sendKeys(numbergenerator(0,0));
            }else{
            Day.sendKeys(numbergenerator(1,9));
            }
            browser.sleep(6000);
        }

        browser.ignoreSynchronization = false;
        browser.pause();
    });


});

numbergenerator = function(min, max){
    return parseInt(Math.random() * (max - min) + min);
};

