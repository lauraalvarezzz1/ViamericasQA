package com.selenium.viamericas.pages;


import java.util.Calendar;

import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Utility;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class Send_FundingPage {
    public static Utility language = new Utility();


    //Radio Buttons
    public static By bankAccountRadiobutton = By.id("checkbox-funding-A-funding");
    public static By creditRadioButton = By.id("checkbox-funding-D-funding");
    public static By debitRadioButton = By.id("checkbox-funding-K-funding");

    public static By continueButton = By.id("continue-funding");
    public static By backButton = By.id("back-funding");

    //<--------BANK ACCOUNT BUTTON--------->
    //Inputs
    public static By savedBankAccountsInput = By.cssSelector("section#saved-accounts dropdown-viamericas#saved-bank-select-bank input#dropdown-input");
    public static By monthExpirationDateInput = By.cssSelector("section#credit-card-extra-info dropdown-viamericas#expiration-month-select-card input#dropdown-input");
    public static By yearExpirationDateInput = By.cssSelector("section#credit-card-extra-info dropdown-viamericas#expiration-year-select-card input#dropdown-input");

    // LI
    public static By savedBankAccountsLI = By.cssSelector("section#saved-accounts dropdown-viamericas#saved-bank-select-bank li#dropdown-list");
    public static By monthExpirationDateLI = By.cssSelector("section#credit-card-extra-info dropdown-viamericas#expiration-month-select-card li#dropdown-list");
    public static By yearExpirationDateLI = By.cssSelector("section#credit-card-extra-info dropdown-viamericas#expiration-year-select-card li#dropdown-list");


    //<--------CREDIT/DEBIT BUTTON----------->
    public static By cardholdername = By.xpath("cardholder-name-card");
    public static By cardnickname = By.xpath("card-nickname-card");
    public static By cardnumber = By.xpath("card-number-card");
    public static By CVVcode = By.xpath("cvv-code-card");

    public static boolean selectaccount() throws Exception {

        Thread.sleep(3000);
        if (Utility.isSomethingClickable(savedBankAccountsInput)) {
            Thread.sleep(3000);
            return true;
        } else
            return false;
    }

    //Bank account
    public static void selectSavedBankAccount() throws Exception {
        Thread.sleep(3000);
        if (Utility.isSomethingClickable(savedBankAccountsInput)) {
            Start.driver.findElement(savedBankAccountsInput).click();
            Start.driver.findElement(savedBankAccountsInput).sendKeys(Keys.ARROW_DOWN);
            Start.driver.findElement(savedBankAccountsLI).sendKeys(Keys.ENTER);
            Thread.sleep(3000);
        }
    }


    //Credit/Debit
    public static void selectCreditCard() throws Exception {
        Start.driver.findElement(creditRadioButton).click();
        Thread.sleep(1000);

    }

    public static void selectDebitCard() throws Exception {
        Start.driver.findElement(debitRadioButton).click();
        Thread.sleep(1000);
    }

    public static void cardHolderName() throws Exception {
        //Thread.sleep(3000);
        //Start.driver.findElement(cardholdername).sendKeys("JAYDEN ADRIAN TEST");
    }

    public static void cardHickName() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(cardnickname).sendKeys("Card NickName");
    }

    public static void cardNumber() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(cardnumber).sendKeys("5405010000000090");
    }

    public static void selectmonth() throws Exception {
        int year = Calendar.getInstance().get(Calendar.YEAR);

        // Start.driver.findElement(monthExpirationDateInput).sendKeys(year);

        Thread.sleep(1000);
    }

    public static void selectyear() throws Exception {

        Thread.sleep(1000);
    }

    public static void addcvvcode() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(CVVcode).sendKeys("505");
    }

    public static void continuebutton() throws Exception {
        Thread.sleep(4000);
        Start.driver.findElement(continueButton).click();

    }

}

