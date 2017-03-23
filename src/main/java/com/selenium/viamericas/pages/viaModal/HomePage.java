package com.selenium.viamericas.pages.viaModal;

import com.selenium.viamericas.utility.StartViamodal;
import org.openqa.selenium.By;

/**
 * Created by lauraalvarez on 10/03/17.
 */
public class HomePage {

    public static By SendMoneyButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/button");
    public static By LoginButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[2]/div[2]/button[1]");
    public static By SignupButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[2]/div[2]/button[2]");
    public static By GetaQuoteLabel = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[2]/div[3]/button[1]/span");
    public static By FindaLocationLabel = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[2]/div[3]/button[2]/span");

    public static void GotoSendMoney() throws Exception{
        StartViamodal.driver.findElement(SendMoneyButton).click();
        Thread.sleep(2000);
    }

    public static void GotoLogin() throws Exception{
        StartViamodal.driver.findElement(LoginButton).click();
        Thread.sleep(2000);
    }

    public static void GotoSingup() throws Exception{
        StartViamodal.driver.findElement(SignupButton).click();
        Thread.sleep(2000);
    }

    public static void GetaQuoteLabel() throws Exception{
        StartViamodal.driver.findElement(GetaQuoteLabel).click();
        Thread.sleep(2000);
    }

    public static void FindaLocationLabel() throws Exception{
        StartViamodal.driver.findElement(FindaLocationLabel).click();
        Thread.sleep(2000);
    }
}
