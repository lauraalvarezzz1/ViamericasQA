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
    public static By firstName = By.xpath("first-name-recipient");
    public static By middleName = By.xpath("middle-name-recipient");
    public static By lastMame = By.xpath("last-name-recipient");
    public static By secondLastName = By.xpath("second-last-name-recipient");
    public static By birthday = By.xpath("birthday-recipient");
    public static By phonenumber = By.xpath("mobile-phone-recipient");
    public static By addressline1 = By.xpath("address-1-recipient");
    public static By addressline2 = By.xpath("address-2-recipient");
    public static By emailaddress = By.xpath("email-recipient");


    public static By state = By.xpath(".//*[@placeholder='State']");
    public static By city = By.xpath(".//*[@placeholder='City']");

    public static By continueButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[2]");



    public static void clickAddRecipient() throws Exception {
        if (Utility.isSomethingClickable(addNewRecipientButton)) {
            Start.driver.findElement(addNewRecipientButton).click();
        }
    }

    public static void completename() throws Exception {
        Start.driver.findElement(firstName).sendKeys("Test Recipient Name");
        Thread.sleep(2000);
    }

    public static void completelastname() throws Exception {
        Start.driver.findElement(lastMame).sendKeys("Test Recipient Last Name");
        Thread.sleep(1500);
    }

    public static void completephonenumber() throws Exception {
        Start.driver.findElement(phonenumber).sendKeys("3117224425");
        Thread.sleep(1500);
    }



    public static void addadressline1() throws Exception {
        Start.driver.findElement(addressline1).sendKeys("4525 North Oracle Rd. ");
        Thread.sleep(2000);
    }

    public static void emailaddress() throws Exception {
        Start.driver.findElement(emailaddress).sendKeys("laura.alvarez+"+ DataGenerators.generateemails()+"@talosdigital.com");
        Thread.sleep(2000);
    }

    public static void selectstate() throws Exception {
        Start.driver.findElement(state).sendKeys("AHUACHAPAN");
        Start.driver.findElement(state).sendKeys(Keys.DOWN);
        Start.driver.findElement(state).sendKeys(Keys.ENTER);
        Thread.sleep(1000);
    }

    public static void selectcity() throws Exception {
        Start.driver.findElement(city).sendKeys("AHUACHAPAN");
        Start.driver.findElement(city).sendKeys(Keys.DOWN);
        Start.driver.findElement(city).sendKeys(Keys.ENTER);
        Thread.sleep(2000);
    }

    public static void continuebutton() throws Exception {
        Thread.sleep(4000);
        Start.driver.findElement(continueButton).click();

    }
}
