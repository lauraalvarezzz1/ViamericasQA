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

    public static Utility language = new Utility();
    public static By countrydropdown = By.xpath("//*[@placeholder='"+ language.getCountry()+"']");
    public static By countryDestinations = By.id("country-select-destination");
    public static By sendAmount = By.id("amount-destination");

    public static By bankdropdown = By.xpath(".//*[@placeholder='"+ language.getChoosebank()+"']");
    public static By continueButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[2]");
    public static By backButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[1]");
    public static By exchangerate = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[6]/div");
    public static By sendAmountLocalCurrency = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/div[1]/div/input");
    public static By oklahomaState = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/label/div/ins");
    public static By oklahoma = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/label/div/ins");

    //Country random selector
    public static By countryLI = By.cssSelector("section#country-reception dropdown-viamericas#country-select-destination input#dropdown-input");
    public static By currencyLI = By.cssSelector("section#country-reception dropdown-viamericas#recipient-currency-select-destination input#dropdown-input");
    public static By bankDeposit = By.id("payment-mode-C-destination");
    public static By cashPickup = By.id("payment-mode-P-destination");
    public static By bankLI = By.cssSelector("section#select-bank dropdown-viamericas#banks-select-destination input#dropdown-input");




    public static void selectCountry(String country) throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(countryDestinations).click();
        Thread.sleep(3000);
        Start.driver.findElement(countryLI).sendKeys(country);
        Start.driver.findElement(countryLI).sendKeys(Keys.DOWN);
        Start.driver.findElement(countryLI).sendKeys(Keys.ENTER);
        Thread.sleep(3000);

        if (Utility.isSomethingDisplayed(currencyLI)) {
            Start.driver.findElement(currencyLI).click();
        }

    }

    public static void howMoneyRecieved() throws Exception {
        Thread.sleep(3000);
        if (Utility.isSomethingClickable(bankDeposit)) {
            Start.driver.findElement(bankDeposit).click();
        } else if (Utility.isSomethingClickable(cashPickup)) {
            Start.driver.findElement(cashPickup).click();
        }
    }

    public static void chooseBank(int banks) throws Exception {
        int n = 0;
        Thread.sleep(3000);
        Start.driver.findElement(bankLI).click();
        while (banks > n) {
            Start.driver.findElement(bankLI).sendKeys(Keys.DOWN);
            n++;
        }
        Start.driver.findElement(bankLI).sendKeys(Keys.ENTER);
        Thread.sleep(3000);
    }

    public static void selectamounttoSend() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(sendAmount).sendKeys("500");
    }

    public static void selectamounttoSendGuest() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(sendAmountLocalCurrency).sendKeys("500");
    }

    public static void goandcontinue() throws Exception {
        Start.driver.findElement(continueButton).click();
        Thread.sleep(4000);}

    public static void setOklahoma() throws Exception {
        Start.driver.findElement(oklahoma).click();
        Thread.sleep(3000);}

    public static void setDestinationPageWithFirstButton(){
        Start.driver.findElement(countrydropdown).sendKeys("");
        //Start.driver.findElement(firstButton).click();
    }


}



