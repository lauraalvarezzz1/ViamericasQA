package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.DataGenerators;
import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class Send_FundingPage {

    public static By bankaccountbutton = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[1]/div[1]/div/div");
    public static By creditaccountbutton = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div");
    public static By continueButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[2]");
    public static By backButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button[1]");

    //<--------BANK ACCOUNT BUTTON--------->
    public static By accountholdername = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[2]/input");
    public static By accountnickname = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[3]/input");
    public static By routingname = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/input");
    public static By accountnumber = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[5]/input");
    public static By accounttype = By.xpath(".//*[@placeholder='Account Type']");

    //<--------CREDIT/DEBIT BUTTON----------->
    public static By cardholdername = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[3]/input");
    public static By cardnickname = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[4]/input");
    public static By cardnumber = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[5]/input");
    public static By monthdropdown = By.xpath(".//*[@placeholder='Month]");
    public static By yeardropdown = By.xpath(".//*[@placeholder='Year']");
    public static By CVVcode = By.xpath("html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[7]/input");
    public static By closepopup = By.xpath("/html/body/div[3]/div[2]/button[1]");

    public static void selectaccount(String selectaccountoption) throws Exception {
        Thread.sleep(3000);
        if (selectaccountoption.equalsIgnoreCase("bankaccount")) {
            Start.driver.findElement(bankaccountbutton).click();
        } else if (selectaccountoption.equalsIgnoreCase("creditdebitbutton")) {
            Start.driver.findElement(creditaccountbutton).click();
        }
    }

    //Bank Account
    public static void addbankholdername() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(accountholdername).sendKeys("LAURA ALVAREZ");
    }

    public static void addbanknickname() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(accountnickname).sendKeys("LAURA ALVAREZ");
    }

    public static void addroutingnumber() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(routingname).sendKeys("021000021");
    }

    public static void addnumber() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(accountnumber).sendKeys(DataGenerators.generateAccountnumber());
    }

    public static void selecttype() throws Exception {
        Start.driver.findElement(accounttype).sendKeys("SAVING");
        Start.driver.findElement(accounttype).sendKeys(Keys.DOWN);
        Start.driver.findElement(accounttype).sendKeys(Keys.ENTER);
        Thread.sleep(1000);
    }

    //Credit/Debit
    public static void addcardholdername() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(cardholdername).sendKeys("JAYDEN ADRIAN");
    }

    public static void addcardnickname() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(cardnickname).sendKeys("JAYDEN ADRIAN");
    }

    public static void addcardnumber() throws Exception {
        Thread.sleep(3000);
        Start.driver.findElement(cardnumber).sendKeys("4716402875575");
    }

    public static void selectmonth() throws Exception {
        Start.driver.findElement(monthdropdown).sendKeys("01");
        Start.driver.findElement(monthdropdown).sendKeys(Keys.DOWN);
        Start.driver.findElement(monthdropdown).sendKeys(Keys.ENTER);
        Thread.sleep(1000);
    }

    public static void selectyear() throws Exception {
        Start.driver.findElement(yeardropdown).sendKeys("2018");
        Start.driver.findElement(yeardropdown).sendKeys(Keys.DOWN);
        Start.driver.findElement(yeardropdown).sendKeys(Keys.ENTER);
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

    public static void setClosepopup() throws Exception {
        Thread.sleep(4000);
        Start.driver.findElement(closepopup).click();

    }
}

