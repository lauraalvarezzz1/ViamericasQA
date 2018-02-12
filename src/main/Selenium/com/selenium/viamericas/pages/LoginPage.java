package com.selenium.viamericas.pages;
import org.openqa.selenium.By;
import com.selenium.viamericas.utility.Start;
import java.util.Iterator;
import java.util.Set;

public class LoginPage {

    public static By email = By.id("username-login");
    public static By logo = By.id("home-logo");
    public static By password = By.id("password-login");
    public static By loginButtonHeader = By.id("login-button-header");
    public static By loginLoginModal = By.id("login-login");
    public static By wrongcredentials = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/message-viamericas/div/p");
    public static By forgotpasswordlink = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div[2]/div/form/div[5]/a");
    public static By logOutButton = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[7]/a");

    public static void login(String user, String pass)throws Exception{

        Start.driver.findElement(email).sendKeys(user);
        Start.driver.findElement(password).sendKeys(pass);
        Start.driver.findElement(loginLoginModal).click();
        Thread.sleep(5000);
        Start.driver.findElement(logo).click();
    }

    public static void typeemail (String mail) throws Exception{
        Thread.sleep(5000);
        Start.driver.switchTo().activeElement();
        Start.driver.findElement(email).sendKeys(mail);

    }

    public static void typepassword (String p) throws Exception{
        Thread.sleep(5000);
        Start.driver.switchTo().activeElement();
        Start.driver.findElement(password).sendKeys(p);
    }

    public static void clicklogin () throws Exception{
        Thread.sleep(2000);
        Start.driver.findElement(loginButtonHeader).click();
        Thread.sleep(2000);
    }

    public static void clearfields(){
        Start.driver.switchTo().activeElement();
        Start.driver.findElement(email).clear();
        Start.driver.findElement(password).clear();
    }
    public static boolean isLoggedIn()
    {
        try
        {
            Start.driver.findElement(logOutButton).click();
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }
    public static void clickforgotpassword(){
        Start.driver.findElement(forgotpasswordlink).click();
    }
}
