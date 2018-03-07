package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class MyAccountPage {

    WebDriver driver;

    //Buttons sections
    public static By profileSettingsButton = By.id("profile-settings-account");
    public static By recipientsSettingsButton = By.id("recipients-account");
    public static By payementsSettingsButton = By.id("payments-account");


    // Profile Settings
    public static By firstNameProfile = By.id("first-name-profile");
    public static By middleNameProfile = By.id("middle-name-profile");
    public static By lastNameProfile = By.id("last-name-profile");
    public static By secondLastNameProfile = By.id("second-last-name-profile");
    public static By addressProfile = By.id("address-1-profile");
    public static By moreAddressProfile = By.id("address-2-profile");
    public static By zipCodeProfile = By.id("zipcode-profile");
    public static By phoneProfile = By.id("phone-profile");
    public static By changePwContinueButton = By.xpath("/html/body/div[4]/div[2]/button[1]");


    //Recipients
    public static By addNewRecipientButton = By.id("add-new-recipient-recipients");
    public static By firstNameRecipient = By.id("first-name-recipient-details");
    public static By middleNameRecipient = By.id("middle-name-recipient-details");
    public static By lastNameRecipient = By.id("last-name-recipient-details");
    public static By secondLastNameRecipient = By.id("second-last-name-recipient-details");
    public static By addressRecipient = By.id("address-1-recipient-details");
    public static By moreAddressRecipient = By.id("address-2-recipient-details");

    //Inputs
    public static By countryInput = By.cssSelector("section#address-recipient dropdown-viamericas#country-select-recipient-details input#dropdown-input");
    public static By stateInput = By.cssSelector("section#address-recipient dropdown-viamericas#state-select-recipient-details input#dropdown-input");
    public static By cityInput = By.cssSelector("section#address-recipient dropdown-viamericas#city-select-recipient-details input#dropdown-input");

    // LI
    public static By countryLi = By.cssSelector("section#address-recipient dropdown-viamericas#country-select-recipient-details li#dropdown-list");
    public static By stateLi = By.cssSelector("section#address-recipient dropdown-viamericas#state-select-recipient-details li#dropdown-list");
    public static By cityLi = By.cssSelector("section#address-recipient dropdown-viamericas#city-select-recipient-details li#dropdown-list");


    public MyAccountPage(WebDriver driver) {
        this.driver = driver;
    }

    public static void clickProfileSettings() throws Exception {
        Start.driver.findElement(profileSettingsButton).click();
        Thread.sleep(3000);
    }

    public static void clickRecipients() throws Exception {
        Start.driver.findElement(recipientsSettingsButton).click();
        Thread.sleep(3000);
    }

    public static void clickPayments() throws Exception {
        Start.driver.findElement(payementsSettingsButton).click();
        Thread.sleep(3000);
    }


    //profile
    public static void enterFirstNameProfile() throws Exception {
        Start.driver.findElement(firstNameProfile).sendKeys("ProfileName");
        Thread.sleep(3000);
    }

    public static void enterLastNameProfile() throws Exception {
        Start.driver.findElement(lastNameProfile).sendKeys("ProfileLastName");
        Thread.sleep(3000);
    }

    public static void enterMiddleNameProfile() throws Exception {
        Start.driver.findElement(middleNameProfile).sendKeys("ProfileMiddleName");
        Thread.sleep(3000);
    }

    public static void enterSecondLastNameProfile() throws Exception {
        Start.driver.findElement(secondLastNameProfile).sendKeys("ProfileSecondLastName");
        Thread.sleep(3000);
    }


//Recipient

    public static void addNewRecipientRecipient() throws Exception {
        Start.driver.findElement(addNewRecipientButton).click();
        Thread.sleep(3000);
    }

    public static void enterFirstNameRecipient() throws Exception {
        Start.driver.findElement(firstNameRecipient).sendKeys("RecipientName");
        Thread.sleep(3000);
    }

    public static void enterLastNameRecipient() throws Exception {
        Start.driver.findElement(lastNameRecipient).sendKeys("RecipientLastName");
        Thread.sleep(3000);
    }

    public static void enterMiddleNameRecipient() throws Exception {
        Start.driver.findElement(middleNameRecipient).sendKeys("RecipientMiddleName");
        Thread.sleep(3000);
    }

    public static void enterSecondLastNameRecipient() throws Exception {
        Start.driver.findElement(secondLastNameRecipient).sendKeys("RecipientSecondLastName");
        Thread.sleep(3000);
    }

    public static void selectCountryRecipient() throws Exception {
        Start.driver.findElement(countryInput).click();
        Start.driver.findElement(countryInput).sendKeys(Keys.ARROW_DOWN);
        Start.driver.findElement(countryLi).sendKeys(Keys.ENTER);
        Thread.sleep(3000);
    }

    public static void selectStateRecipient() throws Exception {
        Start.driver.findElement(stateInput).click();
        Start.driver.findElement(stateInput).sendKeys(Keys.ARROW_DOWN);
        Start.driver.findElement(stateLi).sendKeys(Keys.ENTER);
        Thread.sleep(3000);
    }

    public static void selectCityRecipient() throws Exception {
        Start.driver.findElement(cityInput).click();
        Start.driver.findElement(cityInput).sendKeys(Keys.ARROW_DOWN);
        Start.driver.findElement(cityLi).sendKeys(Keys.ENTER);
        Thread.sleep(3000);
    }

    public static void clickContinueChangePw() throws Exception {
        Start.driver.findElement(changePwContinueButton).click();
        Thread.sleep(3000);
    }
}

