package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.DataGenerators;
import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

/**
 * Created by talosdigital on 1/28/17.
 */
public class Send_RecipientPage {
    //<---------OBLIGATORY--------->
    public static By firstname = By.xpath("html/body/div[2]/div/div[1]/div[2]/div[1]/div/div/form/div[1]/div[2]/div[2]/input");
    public static By lastname = By.xpath("html/body/div[2]/div/div[1]/div[2]/div[1]/div/div/form/div[1]/div[2]/div[4]/input");
    public static By phonenumber = By.xpath("html/body/div[2]/div/div[1]/div[2]/div[1]/div/div/form/div[1]/div[2]/div[6]/input");
    public static By addressline1 = By.xpath("html/body/div[2]/div/div[1]/div[2]/div[1]/div/div/form/div[1]/div[2]/div[9]/input");
    public static By emailaddress = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div[1]/div/div/form/div[1]/div[2]/div[7]/input");

    public static By month = By.xpath(".//*[@placeholder='Month']");
    public static By day = By.xpath(".//*[@placeholder='Day']");
    public static By year = By.xpath(".//*[@placeholder='Year']");

    public static By state = By.xpath(".//*[@placeholder='State']");
    public static By city = By.xpath(".//*[@placeholder='City']");

    public static By continueButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[2]");

    public static void completename() throws Exception {
        Start.driver.findElement(firstname).sendKeys("Laura");
        Thread.sleep(2000);
    }

    public static void completelastname() throws Exception {
        Start.driver.findElement(lastname).sendKeys("Alvarez");
        Thread.sleep(1500);
    }

    public static void completephonenumber() throws Exception {
        Start.driver.findElement(phonenumber).sendKeys("3117224425");
        Thread.sleep(1500);
    }

    public static void selectmonth() throws Exception {
        Start.driver.findElement(month).sendKeys("01");
        Start.driver.findElement(month).sendKeys(Keys.DOWN);
        Start.driver.findElement(month).sendKeys(Keys.ENTER);
        Thread.sleep(1000);
    }

    public static void selectday() throws Exception {
        Start.driver.findElement(day).sendKeys("28");
        Start.driver.findElement(day).sendKeys(Keys.DOWN);
        Start.driver.findElement(day).sendKeys(Keys.ENTER);
        Thread.sleep(1000);
    }

    public static void selectyear() throws Exception {
        Start.driver.findElement(year).sendKeys("1998");
        Start.driver.findElement(year).sendKeys(Keys.DOWN);
        Start.driver.findElement(year).sendKeys(Keys.ENTER);
        Thread.sleep(1000);
    }

    public static void addadressline1() throws Exception {
        Start.driver.findElement(addressline1).sendKeys("Carrera 65");
        Thread.sleep(2000);
    }

    public static void emailaddress() throws Exception {
        Start.driver.findElement(emailaddress).sendKeys("laura.alvarez+"+ DataGenerators.generateemails()+"@talosdigital.com");
        Thread.sleep(2000);
    }

    public static void selectstate() throws Exception {
        Start.driver.findElement(state).sendKeys("ANTIOQUIA");
        Start.driver.findElement(state).sendKeys(Keys.DOWN);
        Start.driver.findElement(state).sendKeys(Keys.ENTER);
        Thread.sleep(1000);
    }

    public static void selectcity() throws Exception {
        Start.driver.findElement(city).sendKeys("MEDELLIN");
        Start.driver.findElement(city).sendKeys(Keys.DOWN);
        Start.driver.findElement(city).sendKeys(Keys.ENTER);
        Thread.sleep(2000);
    }

    public static void continuebutton() throws Exception {
        Thread.sleep(4000);
        Start.driver.findElement(continueButton).click();

    }
}
