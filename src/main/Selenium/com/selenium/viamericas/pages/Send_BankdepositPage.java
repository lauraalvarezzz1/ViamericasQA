package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.Utility;
import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;


public class Send_BankdepositPage {

    public static Utility language = new Utility();

    public static By accountholdername = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[2]/input");
    public static By accountnumber = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[3]/input");
    public static By accounttypedropdown = By.xpath(".//*[@placeholder='"+ language.getaccountType()+"']");
    public static By continueButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[2]");
    public static By backButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[1]");


    public static void Completeaccountname() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(accountholdername).sendKeys("Test Bank Deposit");
    }

    public static void Completeaccountnumber() throws Exception {
        Thread.sleep(4000);
        Start.driver.findElement(accountnumber).sendKeys("12345678");
    }

    public static void selectaccounttype() throws Exception {
        Start.driver.findElement(accounttypedropdown).sendKeys("Checking");
        Start.driver.findElement(accounttypedropdown).sendKeys(Keys.DOWN);
        Thread.sleep(3000);
        Start.driver.findElement(accounttypedropdown).sendKeys(Keys.ENTER);
        Thread.sleep(3000);
    }

    
    public static void goandcontinue() throws Exception {
        Start.driver.findElement(continueButton).click();
        Thread.sleep(5000);

    }

    public static void setBankDeposit(){

    }
}
