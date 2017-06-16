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

};

module.exports = new recipientsPage();