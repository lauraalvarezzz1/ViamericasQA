/**
 * Created by lauraalvarez on 5/06/17.
 */
/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var recipientsPage = function () {

    this.addnewrecipientButton = element(by.id('add-new-recipient-recipients'));
    this.editButton = element(by.id('edit-recipients'));
    this.deleteRecipientButton = element(by.id('delete-recipients'));
    this.deleteAccountButton = element(by.id('delete_account-recipient-details'));
    this.updateRecipientButton = element(by.id('update-recipient-details'));
    this.createrecipientButton = element(by.id('create-recipient-details'));
    this.addbankaccount = element(by.id('add-account-recipient-details'));
    this.sendmoneyButton = element(by.id('send-money-recipients'));
    this.cancelButton = element(by.id("go-back-recipient-details"));
    this.confirmButton = element(by.xpath("/html/body/div[4]/div[2]/button[1]"));
    this.editButton = element(by.id("edit-recipients"));

    //Recipient information page
    this.first_name = element(by.id('first-name-recipient-details'));
    this.middle_name_optional = element(by.id('middle-name-recipient-details'));
    this.last_name = element(by.id('last-name-recipient-details'));
    this.secondlast_name_optional = element(by.id('second-last-name-recipient-details'));
    this.mobile_phone_optional = element(by.id('mobile-phone-recipient-details'));
    this.email_optional = element(by.id('email-recipient-details'));
    this.address_line1 = element(by.id('address-1-recipient-details'));
    this.moreaddressinformation = element(by.id('address-2-recipient-details'));
    this.dateofbirth = element(by.id('birthday-recipient-details'));
    this.zipcode = element(by.id('zip-code-recipient-details'));
    this.cpfbrazil = element(by.id('number-id-bra-recipient-details'));

    //Dropdown LI
    this.countryLI = element.all(by.css('dropdown-viamericas#country-select-recipient-details ul.dropdown-viam-list li'));
    this.stateLI = element.all(by.css('dropdown-viamericas#state-select-recipient-details ul.dropdown-viam-list li'));
    this.cityLI = element.all(by.css('dropdown-viamericas#city-select-recipient-details ul.dropdown-viam-list li'));
    this.currencyLI = element.all(by.css('dropdown-viamericas#currency-select-recipient-details ul.dropdown-viam-list li'));
    this.chooseabankLI = element.all(by.css('dropdown-viamericas#banks-select-recipient-details ul.dropdown-viam-list li'));
    this.accounttypeLI = element.all(by.css('dropdown-viamericas#account-type-select-recipient-details ul.dropdown-viam-list li'));
    this.IFSCIndiaLI = element.all(by.css('dropdown-viamericas#india-extra-info-select-recipient-details ul.dropdown-viam-list li'));
    this.statesIndiaLI = element.all(by.css('dropdown-viamericas#india-states-select-recipient-details ul.dropdown-viam-list li'));
    this.ifscCodeLI = element.all(by.css('dropdown-viamericas#india-ifsc-select-recipient-details ul.dropdown-viam-list li'));
    this.dialCodeLI = element.all(by.css('dropdown-viamericas#country-code-select-recipient-details ul.dropdown-viam-list li'));

    //Dropdown
    this.country = element(by.css('dropdown-viamericas#country-select-recipient-details'));
    this.state = element(by.css('dropdown-viamericas#state-select-recipient-details'));
    this.city = element(by.css('dropdown-viamericas#city-select-recipient-details'));
    this.currency = element(by.css('dropdown-viamericas#currency-select-recipient-details'));
    this.chooseabank = element(by.css('dropdown-viamericas#banks-select-recipient-details'));
    this.accounttype = element(by.css('dropdown-viamericas#account-type-select-recipient-details'));
    this.IFSCIndia = element(by.css('dropdown-viamericas#india-extra-info-select-recipient-details'));
    this.statesIndia = element(by.css('dropdown-viamericas#india-states-select-recipient-details'));
    this.dialCode = element(by.css('dropdown-viamericas#country-code-select-recipient-details'));

    //Recipient Bank Account page in My Account
    this.accountnumber = element(by.id('account-number-recipient-details'));
    this.accountnickname = element(by.id('holder-name-recipient-details')); //Its tha name of the recipient.

    //Auxiliary fields
    this.ifscCodeIndia = element(by.css('dropdown-viamericas#india-ifsc-select-recipient-details'));
    this.closepopup = element(by.xpath("/html/body/div[4]/div[2]/button[1]"));
    this.closepopuprecipient = element(by.xpath("/html/body/div[4]/div[2]/span"));
    this.aditionalfieldAUS_CA_HG_SW_UK = element(by.id('aux-code-other-recipient-details'));
    this.aditionalfieldBRA = element(by.id('aux-code-bra-recipient-details'));
    this.aditionalfieldIND = element(by.id('aux-code-ind-recipient-details')); //IFSC Number India

    //SEND MONEY FLOW PAGE
    this.addnewrecipientButton_send = element(by.id('add-new-recipient'));
    this.first_name_send = element(by.id('first-name-recipient'));
    this.middle_name_optional_send = element(by.id('middle-name-recipient'));
    this.last_name_send = element(by.id('last-name-recipient'));
    this.secondlast_name_optional_send = element(by.id('second-last-name-recipient'));
    this.mobile_phone_optional_send = element(by.id('mobile-phone-recipient'));
    this.email_optional_send = element(by.id('email-recipient'));
    this.address_line1_send = element(by.id('address-1-recipient'));
    this.moreaddressinformation_send = element(by.id('address-2-recipient'));
    this.dateofbirth_send = element(by.id('birthday-recipient'));
    this.zipcode_send = element(by.id('zipcode-recipient'));
    this.cpfbrazil_send = element(by.id('number-id-bra-recipient'));

    //Dropdown LI - Send Money Flow
    this.statesendLI = element.all(by.css('dropdown-viamericas#state-select-recipient ul.dropdown-viam-list li'));
    this.citysendLI = element.all(by.css('dropdown-viamericas#city-select-recipient ul.dropdown-viam-list li'));
    this.accounttype_sendLI = element.all(by.css('dropdown-viamericas#account-type-select-recipient ul.dropdown-viam-list li'));
    this.chooseoptionindiasendLI = element.all(by.css('dropdown-viamericas#india-extra-info-select-recipient ul.dropdown-viam-list li'));
    this.stateindiasendLI = element.all(by.css('dropdown-viamericas#india-states-select-recipient ul.dropdown-viam-list li'));
    this.ifsccodeindiasendLI = element.all(by.css('dropdown-viamericas#india-ifsc-select-recipient ul.dropdown-viam-list li'));
    this.statesend = element(by.css('dropdown-viamericas#state-select-recipient'));

    //Dropdown - Send Money flow
    this.citysend = element(by.css('dropdown-viamericas#city-select-recipient'));
    this.accounttype_send = element(by.css('dropdown-viamericas#account-type-select-recipient'));
    this.chooseoptionindiasend = element(by.css('dropdown-viamericas#india-extra-info-select-recipient'));
    this.stateindiasend = element(by.css('dropdown-viamericas#india-states-select-recipient'));
    this.ifsccodeindiasend = element(by.css('dropdown-viamericas#india-ifsc-select-recipient'));

    //Recipient bank account - Send Money Flow and auxiliary fields
    this.accountnumber_send = element(by.id('account-number-recipient'));
    this.accountnickname_send = element(by.id('account-nickname-recipient'));
    this.aditionalfieldAUS_CA_HG_SW_UK_send = element(by.id('aux-code-other-recipient'));
    this.aditionalfieldBRA_send = element(by.id('aux-code-bra-recipient'));
    this.aditionalfield_sendIND = element(by.id('aux-code-ind-recipient'));
    this.continueButtonRecipient = element(by.id('continue-recipient'));

};

module.exports = new recipientsPage();