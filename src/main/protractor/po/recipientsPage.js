/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var recipientsPage = function() {

      this.addnewrecipientButton = element(by.id('add-new-recipient-recipients'));
      this.editButton = element(by.id('edit-recipients'));
      this.deleteRecipientButton = element(by.id('delete-recipients'));
      this.deleteAccountButton = element(by.id('delete_account-recipient-details'));
      this.updateRecipientButton = element (by.id('update-recipient-details'));
      this.createrecipientButton = element (by.id('create-recipient-details'));

      //Recipient information page
      this.first_name = element(by.id('first-name-recipient-details'));
      this.middle_name_optional = element(by.id('middle-name-recipient-details'));
      this.last_name = element(by.id('last-name-recipient-details'));
      this.secondlast_name_optional = element(by.id('second-last-name-recipient-details'));
      this.mobile_phone_optional = element(by.id('mobile-phone-recipient-details'));
      this.email_optional = element(by.id('email-recipient-details'));
      this.address_line1 = element(by.id('address-1-recipient-details'));
      this.moreaddressinformation = element (by.id('address-2-recipient-details'));
      this.dateofbirth = element(by.id('birthday-recipient-details'));
      this.zipcode = element(by.id('zip-code-recipient-details'));
      this.cpfbrazil = element(by.id('number-id-bra-recipient-details'));

      this.countryLI = element.all(by.css('dropdown-viamericas#country-select-recipient-details ul.dropdown-viam-list li'));
      this.country = element(by.css('dropdown-viamericas#country-select-recipient-details'));

      this.stateLI = element.all(by.css('dropdown-viamericas#state-select-recipient-details ul.dropdown-viam-list li'));
      this.state = element(by.css('dropdown-viamericas#state-select-recipient-details'));

      this.cityLI = element.all(by.css('dropdown-viamericas#city-select-recipient-details ul.dropdown-viam-list li'));
      this.city = element(by.css('dropdown-viamericas#city-select-recipient-details'));

      this.currencyLI = element.all(by.css('dropdown-viamericas#currency-select-recipient-details ul.dropdown-viam-list li'));
      this.currency = element(by.css('dropdown-viamericas#currency-select-recipient-details'));

      this.chooseabankLI = element.all(by.css('dropdown-viamericas#banks-select-recipient-details ul.dropdown-viam-list li'));
      this.chooseabank = element(by.css('dropdown-viamericas#banks-select-recipient-details'));

      this.closepopup = element(by.xpath("/html/body/div[3]/div[2]/span"));

      //Recipient Bank Account page
      this.accountnumber = element(by.id('account-number-recipient-details'));
      this.accountnickname=element(by.id('holder-name-recipient-details'));

      this.accounttypeLI = element.all(by.css('dropdown-viamericas#account-type-select ul.dropdown-viam-list li'));
      this.accounttype = element(by.css('dropdown-viamericas#account-type-select'));

      //Auxiliary fields
      this.aditionalfieldAUS_CA_HG_SW_UK = element(by.id('aux-code-other-recipient-details'));
      this.aditionalfieldBRA = element(by.id('aux-code-bra-recipient-details'));

      //IFSC Number India
      this.IFSCIndiaLI = element.all(by.css('dropdown-viamericas#india-extra-info-select-recipient-details ul.dropdown-viam-list li'));
      this.IFSCIndia = element(by.css('dropdown-viamericas#india-extra-info-select-recipient-details'));
      this.aditionalfieldIND = element(by.id('aux-code-ind-recipient-details'));

      this.statesIndiaLI = element.all(by.css('dropdown-viamericas#india-states-select-recipient-details ul.dropdown-viam-list li'));
      this.statesIndia = element(by.css('dropdown-viamericas#india-states-select-recipient-details'));

      this.ifscCodeLI = element.all(by.css('dropdown-viamericas#india-ifsc-select-recipient-details ul.dropdown-viam-list li'));
      this.ifscCodeIndia = element(by.css('dropdown-viamericas#india-ifsc-select-recipient-details'));

      //SEND MONEY FLOW PAGE
      this.addnewrecipientButton_send = element(by.id('add-new-recipient'));
      this.first_name_send = element(by.id('first-name-recipient'));
      this.middle_name_optional_send = element(by.id('middle-name-recipient'));
      this.last_name_send = element(by.id('last-name-recipient'));
      this.secondlast_name_optional_send = element(by.id('second-last-name-recipient'));
      this.mobile_phone_optional_send = element(by.id('mobile-phone-recipient'));
      this.email_optional_send = element(by.id('email-recipient'));
      this.address_line1_send = element(by.id('address-1-recipient'));
      this.moreaddressinformation_send = element (by.id('address-2-recipient'));
      this.dateofbirth_send = element(by.id('birthday-recipient'));
      this.zipcode_send = element(by.id('zipcode-recipient'));
      this.cpfbrazil_send = element(by.id('number-id-bra-recipient'));

      this.statesendLI = element.all(by.css('dropdown-viamericas#state-select-recipient ul.dropdown-viam-list li'));
      this.statesend = element(by.css('dropdown-viamericas#state-select-recipient'));

      this.citysendLI = element.all(by.css('dropdown-viamericas#city-select-recipient ul.dropdown-viam-list li'));
      this.citysend = element(by.css('dropdown-viamericas#city-select-recipient'));

      this.accountnumber_send = element(by.id('account-number-recipient'));
      this.accountnickname_send=element(by.id('account-nickname-recipient'));

      this.accounttype_sendLI = element.all(by.css('dropdown-viamericas#account-type-select-recipient ul.dropdown-viam-list li'));
      this.accounttype_send = element(by.css('dropdown-viamericas#account-type-select-recipient'));

      this.aditionalfieldAUS_CA_HG_SW_UK_send = element(by.id('aux-code-other-recipient'));
      this.aditionalfieldBRA_send = element(by.id('aux-code-bra-recipient'));

      this.chooseoptionindiasendLI = element.all(by.css('dropdown-viamericas#india-extra-info-select-recipient ul.dropdown-viam-list li'));
      this.chooseoptionindiasend = element(by.css('dropdown-viamericas#india-extra-info-select-recipient'));

      this.stateindiasendLI = element.all(by.css('dropdown-viamericas#india-states-select-recipient ul.dropdown-viam-list li'));
      this.stateindiasend = element(by.css('dropdown-viamericas#india-states-select-recipient'));

      this.ifsccodeindiasendLI = element.all(by.css('dropdown-viamericas#india-ifsc-select-recipient ul.dropdown-viam-list li'));
      this.ifsccodeindiasend = element(by.css('dropdown-viamericas#india-ifsc-select-recipient'));

      this.aditionalfield_sendIND = element(by.id('aux-code-ind-recipient'));
      this.continueButtonRecipient = element (by.id('continue-recipient'));

};

module.exports = new recipientsPage();