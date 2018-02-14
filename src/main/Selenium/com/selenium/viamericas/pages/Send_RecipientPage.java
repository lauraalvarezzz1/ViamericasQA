package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.DataGenerators;
import com.selenium.viamericas.utility.Utility;
import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

/**
 * Created by talosdigital on 1/28/17.
 */
public class Send_RecipientPage {
    public static Utility language = new Utility();

    //<---------OBLIGATORY--------->
    public static By addNewRecipientButton = By.id("add-new-recipient");
    public static By firstName = By.id("first-name-recipient");
    public static By middleName = By.id("middle-name-recipient");
    public static By lastMame = By.id("last-name-recipient");
    public static By secondLastName = By.id("second-last-name-recipient");
    public static By birthday = By.id("birthday-recipient");
    public static By phonenumber = By.id("mobile-phone-recipient");
    public static By address = By.id("address-1-recipient");
    public static By moreAddress = By.id("address-2-recipient");
    public static By emailaddress = By.id("email-recipient");
    public static By accountNickname = By.id("account-nickname-recipient");
    public static By accountNumber = By.id("account-number-recipient");
    public static By continueButton = By.id("continue-recipient");

    //Inputs
    public static By stateInput = By.cssSelector("section#address-recipient dropdown-viamericas#state-select-recipient input#dropdown-input");
    public static By cityInput = By.cssSelector("section#address-recipient dropdown-viamericas#city-select-recipient input#dropdown-input");
    public static By accountTypeInput = By.cssSelector("section#info-account dropdown-viamericas#account-type-select-recipient input#dropdown-input");

    // LI
    public static By stateLI = By.cssSelector("section#address-recipient dropdown-viamericas#state-select-recipient li#dropdown-list");
    public static By cityLI = By.cssSelector("section#address-recipient dropdown-viamericas#city-select-recipient li#dropdown-list");
    public static By accountTypeLI = By.cssSelector("section#info-account dropdown-viamericas#account-type-select-recipient li#dropdown-list");





    public static void clickAddRecipient() throws Exception {
        if (Utility.isSomethingDisplayed(addNewRecipientButton)) {
            Start.driver.findElement(addNewRecipientButton).click();
        }
    }

    public static void firstName() throws Exception {
        Start.driver.findElement(firstName).sendKeys("Test Recipient Name");
        Thread.sleep(2000);
    }

    public static void lastName() throws Exception {
        Start.driver.findElement(lastMame).sendKeys("Test Recipient Last Name");
        Thread.sleep(1500);
    }
    public static void middleName() throws Exception {
        Start.driver.findElement(middleName).sendKeys("Test Recipient Last Name");
        Thread.sleep(1500);
    }
    public static void secondLastName() throws Exception {
        Start.driver.findElement(secondLastName).sendKeys("Test Recipient Last Name");
        Thread.sleep(1500);
    }
    public static void address() throws Exception {
        Start.driver.findElement(address).sendKeys("4525 North Oracle Rd. ");
        Thread.sleep(2000);
    }
    public static void moreAdress() throws Exception {
        Start.driver.findElement(moreAddress).sendKeys("4525 North Oracle Rd. ");
        Thread.sleep(2000);
    }
    public static void selectstate() throws Exception {
        Thread.sleep(3000);
        if (Utility.isSomethingClickable(stateInput)){
            Start.driver.findElement(stateInput).click();
            Start.driver.findElement(stateInput).sendKeys(Keys.ARROW_DOWN);
            Start.driver.findElement(stateLI).sendKeys(Keys.ENTER);
            Thread.sleep(3000);
        }
    }

    public static void selectcity() throws Exception {
        Thread.sleep(3000);
        if (Utility.isSomethingClickable(cityInput)){
            Start.driver.findElement(cityInput).click();
            Start.driver.findElement(cityInput).sendKeys(Keys.ARROW_DOWN);
            Start.driver.findElement(cityLI).sendKeys(Keys.ENTER);
            Thread.sleep(3000);
        }
    }

    // COLOMBIA, Costa Rica, Ecuador
    public static void completephonenumber(String country) throws Exception {
        if(country.equals("COLOMBIA")){
            Start.driver.findElement(phonenumber).sendKeys("3000000000");
        }
        if(country.equals("ECUADOR")){
            Start.driver.findElement(phonenumber).sendKeys("093 900 1046");
        }
        if(country.equals("COSTA RICA")){
            Start.driver.findElement(phonenumber).sendKeys("5720 0097");
        }
        Thread.sleep(1500);
    }
    public static void emailaddress() throws Exception {
        Start.driver.findElement(emailaddress).sendKeys("recipient+"+ DataGenerators.generateemails()+"@talosdigital.com");
        Thread.sleep(2000);
    }
    public static void addBirthday() throws Exception {
        Start.driver.findElement(birthday).sendKeys("1999/12/26");
        Thread.sleep(1500);
    }

    public static void accountNickname() throws Exception {
        Start.driver.findElement(accountNickname).sendKeys("NicknameAddress");
        Thread.sleep(1500);
    }
    public static void accountNumber() throws Exception {
        Start.driver.findElement(accountNumber).sendKeys("3654456");
        Thread.sleep(1500);
    }
    public static void accountType() throws Exception {
        Thread.sleep(3000);
      /*  if (Utility.isSomethingClickable(accountTypeInput)){
            Start.driver.findElement(accountTypeInput).click();
            Start.driver.findElement(accountTypeInput).sendKeys(Keys.ARROW_DOWN);
            Start.driver.findElement(accountTypeLI).sendKeys(Keys.ENTER);
            Thread.sleep(3000);
        }*/
        Start.driver.findElement(accountTypeInput).sendKeys("Savings Account");


    }



    public static void continuebutton() throws Exception {
        Start.driver.findElement(continueButton).click();
        Thread.sleep(4000);

    }
}
