package com.selenium.viamericas.pages;

import com.selenium.viamericas.utility.Utility;
import org.openqa.selenium.By;
import com.selenium.viamericas.utility.Start;


public class GetaQuotePage {
    public static Utility language = new Utility();
    public static By title = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/h1");
    public static By countrydropdown = By.xpath(".//*[@placeholder='"+ language.getCountry()+"']");
    public static By amountfield = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[1]/div[2]/div[1]/div/input");
    public static By bankdepositbutton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[1]/div[3]/div[1]/div/div");
    public static By cashpickupbutton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[1]/div[3]/div[1]/div[2]/div");
    public static By FeesandRatesButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[4]/button");
    public static By bestexhangeratetitle = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/div/h4");
    public static By sendmoneyButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[4]/button");


    public static String gettitle(){
        String Title =  Start.driver.findElement(title).getText();
        return Title;
    }

    public static void selectcountry(String count) throws Exception{
        Start.driver.findElement(countrydropdown).clear();
        Start.driver.findElement(countrydropdown).sendKeys(count);
    }

    public static void enteramount(String amount) throws Exception {
        Start.driver.findElement(amountfield).click();
        Start.driver.findElement(amountfield).clear();
        Thread.sleep(5000);
        Start.driver.findElement(amountfield).sendKeys(amount);
    }

    public static void selecttype(String type){
        if(type.equals("bankdeposit")){
            Start.driver.findElement(bankdepositbutton).click();
        }else if(type.equals("cashpickup")){
            Start.driver.findElement(cashpickupbutton).click();
        }
    }

    public static void getaquote() throws Exception {
        Start.driver.findElement(FeesandRatesButton).click();
        Thread.sleep(3000);
    }


}
