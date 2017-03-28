package com.selenium.viamericas.pages.viaModal;

import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.StartViamodal;
import org.openqa.selenium.By;

/**
 * Created by lauraalvarez on 10/03/17.
 */

public class LoginPage {

    public static By email = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[1]/input");
    public static By password = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[2]/input");
    public static By loginbutton = By.xpath("/html/body/div[2]/div/div[2]/button");
    public static By forgotpassword = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[5]/a");
    public static By logoutbutton = By.xpath("/html/body/div[2]/div/div[1]/div[1]/nav/div[2]/ul[2]/li[1]/a/i");
    public static By vianexlogo = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/logo-viamericas/div/a/img");


    public static void login(String user, String pass){
        Start.driver.findElement(email).sendKeys(user);
        Start.driver.findElement(password).sendKeys(pass);
        Start.driver.findElement(loginbutton).click();
    }

    public static void typeemail (String mail){
        Start.driver.findElement(email).sendKeys(mail);
    }

    public static void typepassword (String p) {
        Start.driver.findElement(password).sendKeys(p);
    }

    public static void clicklogin () throws Exception{
        Start.driver.findElement(loginbutton).click();
        Thread.sleep(2000);
    }

    public static void clearfields(){
        Start.driver.findElement(email).clear();
        Start.driver.findElement(password).clear();
    }

    public static boolean isLoggedIn()
    {
        try
        {
            Start.driver.findElement(logoutbutton).click();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }
    public static void clickforgotpassword(){
        Start.driver.findElement(forgotpassword).click();
    }

    public static void clickvianexlogo(){
        Start.driver.findElement(vianexlogo).click();
    }


}
