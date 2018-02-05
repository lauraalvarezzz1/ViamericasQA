package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.Utility;
import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.SystemClock;
import org.openqa.selenium.support.ui.Select;

import java.util.List;


public class Send_DestinationPage {

    //Id's
    public static Utility language = new Utility();
    public static By countryDestinations = By.id("country-select-destination");
    public static By sendAmount = By.id("amount-destination");
    public static By sendAmountLocalCurrency = By.id("receive-amount-destination");
    public static By continueButton = By.id("continue-destination");
    public static By cancelButton = By.id("back-destination");
    public static By bankDeposit = By.id("payment-mode-C-destination");
    public static By cashPickup = By.id("payment-mode-P-destination");
    public static By exchangerate = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[6]/div");

    //Inputs
    public static By countryInput = By.cssSelector("section#country-reception dropdown-viamericas#country-select-destination input#dropdown-input");
    public static By currencyInput = By.cssSelector("section#country-reception dropdown-viamericas#recipient-currency-select-destination input#dropdown-input");
    public static By stateInput = By.cssSelector("section#choose-other-location dropdown-viamericas#states-select-destination input#dropdown-input");
    public static By bankInput = By.cssSelector("section#select-bank dropdown-viamericas#banks-select-destination input#dropdown-input");

    // LI
    public static By bankLI = By.cssSelector("section#select-bank dropdown-viamericas#banks-select-destination li#dropdown-list");
    public static By stateLI = By.cssSelector("section#choose-other-location dropdown-viamericas#states-select-destination li#dropdown-list");



    public static void selectCountry(String country) throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(countryDestinations).click();
        Thread.sleep(3000);
        Start.driver.findElement(countryInput).clear();
        Start.driver.findElement(countryInput).sendKeys(country);
        //Start.driver.findElement(countryInput).sendKeys("Colombia");
        Start.driver.findElement(countryInput).sendKeys(Keys.ARROW_DOWN);
        Start.driver.findElement(countryInput).sendKeys(Keys.ENTER);
        Thread.sleep(3000);

        if (Utility.isSomethingDisplayed(currencyInput)) {
            Start.driver.findElement(currencyInput).click();
            Start.driver.findElement(currencyInput).sendKeys("DOLLAR");
            Start.driver.findElement(currencyInput).sendKeys(Keys.TAB);
            Start.driver.findElement(currencyInput).sendKeys(Keys.TAB);
        }
    }

    public static void howMoneyRecieved() throws Exception {
        Thread.sleep(3000);
        if (Utility.isSomethingClickable(bankDeposit)) {
            Start.driver.findElement(bankDeposit).click();
        } else if (Utility.isSomethingClickable(cashPickup)) {
            Start.driver.findElement(cashPickup).click();

            if (Utility.isSomethingClickable(stateInput)){
                Start.driver.findElement(stateInput).click();
                Start.driver.findElement(stateInput).sendKeys(Keys.ARROW_DOWN);

                Start.driver.findElement(stateLI).sendKeys(Keys.ENTER);
            }
        }
    }

    public static void chooseBank(int banks) throws Exception {
        int n = 0;
        Thread.sleep(3000);
        Start.driver.findElement(bankInput).click();
        Start.driver.findElement(bankInput).sendKeys(Keys.ARROW_DOWN);
        Start.driver.findElement(bankLI).sendKeys(Keys.ENTER);
        Thread.sleep(3000);
    }


    public static void selectAmountToSend() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(sendAmount).sendKeys("500");
        Start.driver.findElement(sendAmountLocalCurrency).click();
        Thread.sleep(3000);
    }

    public static void selectamounttoSendGuest() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(sendAmountLocalCurrency).sendKeys("500");
    }

    public static void goandcontinue() throws Exception {
        Start.driver.findElement(continueButton).click();
        Thread.sleep(4000);
    }

}



