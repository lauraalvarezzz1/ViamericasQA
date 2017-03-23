package com.selenium.viamericas.pages;


import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;

public class Send_ReviewPage {
    public static By verifyname = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[2]/label");
    public static By verifylastname = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/label");
    public static By verifynumberphone = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[6]/label");
    public static By verifycountry = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[7]/label");
    public static By verifycity = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[8]/label");

    public static By verifyamount = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[11]/div[1]/div[1]/div/div[2]");
    public static By verifyreceive = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[11]/div[1]/div[3]/div/div[2]");
    public static By SendmoneyButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[2]");

    public static void sendmoneybutton() throws Exception {
        Thread.sleep(5000);
        Start.driver.findElement(SendmoneyButton).click();

    }
}
