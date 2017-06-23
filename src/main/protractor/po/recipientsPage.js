/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var recipientsPage = function() {

      this.createButton = element(by.id('create-recipient-2'));
      this.editButton = element(by.id('edit'));
      this.deleteButton = element(by.id('delete'));

      //Recipient information page
      this.first_name = element(by.id('first-name'));
      this.middle_name_optional = element(by.id('middle-name'));
      this.last_name = element(by.id('last-name'));
      this.secondlast_name_optional = element(by.id('second-last-name'));
      this.mobile_phone_optional = element(by.id('mobile-phone'));
      this.email_optional = element(by.id('email'));
      this.address_line1 = element(by.id('address-1'));
      this.month = element(by.xpath(".//*[@placeholder='Month']"));
      this.day = element(by.xpath(".//*[@placeholder='Day']"));
      this.year = element(by.xpath(".//*[@placeholder='Year']"));
      this.zipcode = element(by.id('zipcode'));
      this.cpfbrazil = element(by.id('number-id-bra'));

      this.countryLI = element.all(by.css('dropdown-viamericas#country-select ul.dropdown-viam-list li'));
      this.country = element(by.css('dropdown-viamericas#country-select'));

      this.staterLI = element.all(by.css('dropdown-viamericas#state-select ul.dropdown-viam-list li'));
      this.stater = element(by.css('dropdown-viamericas#state-select'));

      this.cityLI = element.all(by.css('dropdown-viamericas#city-select ul.dropdown-viam-list li'));
      this.city = element(by.css('dropdown-viamericas#city-select'));

      this.currencyLI = element.all(by.css('dropdown-viamericas#currency-select ul.dropdown-viam-list li'));
      this.currency = element(by.css('dropdown-viamericas#currency-select'));

      this.chooseabankLI = element.all(by.css('dropdown-viamericas#bank-select ul.dropdown-viam-list li'));
      this.chooseabank = element(by.css('dropdown-viamericas#bank-select'));

      this.createRecipientButton = element(by.id('create-recipient'));
      this.closepopup = element(by.xpath("/html/body/div[3]/div[2]/span"));

      //Recipient Bank Account page
      this.accountnumber = element(by.id('account-number'));
      this.accountholdername=element(by.id('holder-name'));
      this.aditionalfieldAUS_CA_HG_SW_UK = element(by.id('aux-code-other'));
      this.aditionalfieldBRA = element(by.id('aux-code-bra'));
      this.aditionalfieldIND = element(by.id('aux-code-ind'));
      this.aditionalfieldUS = element(by.id('routing-number'));
      this.accounttypeLI = element.all(by.css('dropdown-viamericas#account-type-select ul.dropdown-viam-list li'));
      this.accounttype = element(by.css('dropdown-viamericas#account-type-select'));

};

module.exports = new recipientsPage();