package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.SystemClock;


public class Send_DestinationPage {

    public static By countrydropdown = By.xpath(".//*[@placeholder='Country']");
    public static By sendAmount = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[5]/div[1]/div/input");
    public static By bankdepositButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[2]/div[1]/div[1]/div");
    public static By cashpickupbutton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[2]/div[1]/div[2]/div");
    public static By bankdropdown = By.xpath(".//*[@placeholder='Choose a Bank']");
    public static By continueButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[2]");
    public static By backButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[1]");
    public static By exchangerate = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[6]/div");

    public static By sendAmountGuest = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[5]/div[1]/div/input");
    public static By oklahomaState = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/label/div/ins");

    public static By oklahoma = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/label/div/ins");



    public static void selectCountry() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(countrydropdown).sendKeys("COLOMBIA");
        Start.driver.findElement(countrydropdown).sendKeys(Keys.DOWN);
        Start.driver.findElement(countrydropdown).sendKeys(Keys.ENTER);
        Thread.sleep(3000);

    }

    public static void howMoneyRecieved(String mode) throws Exception {
        Thread.sleep(3000);
        if (mode.equalsIgnoreCase("bankdeposit")) {
            Start.driver.findElement(bankdepositButton).click();
        } else if (mode.equalsIgnoreCase("cashpickup")) {
            Start.driver.findElement(cashpickupbutton).click();
        }

    }

    public static void chooseBank() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(bankdropdown).sendKeys("BANCOLOMBIA");
        Start.driver.findElement(bankdropdown).sendKeys(Keys.DOWN);
        Start.driver.findElement(bankdropdown).sendKeys(Keys.ENTER);
        Thread.sleep(3000);
    }


    public static void selectamounttoSend() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(sendAmount).sendKeys("100");
    }

    public static void selectamounttoSendGuest() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(sendAmountGuest).sendKeys("100");
    }

    public static void goandcontinue() throws Exception {
        Start.driver.findElement(continueButton).click();
        Thread.sleep(3000);

    }

    public static void setOklahoma() throws Exception {
        Start.driver.findElement(oklahoma).click();
        Thread.sleep(3000);

    }
}


