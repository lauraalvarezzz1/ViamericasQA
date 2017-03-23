package com.selenium.viamericas.pages;


import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;

public class ContactUsPage {
    public static By ContactLabel = By.xpath("/html/body/div[2]/div/div[2]/footer/div/nav/ul[2]/li[3]/a");

    public static By yourname = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[1]/input");
    public static By youremailaddress = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[2]/input");
    public static By message = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[1]/div[2]/div[3]/textarea");
    public static By nosoyrobot = By.xpath("//*[@id=\"recaptcha-anchor\"]/div[5]");
    public static By sendMessageButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/form/div[2]/button");

    public static void gotocontact() throws Exception {
        Start.driver.findElement(ContactLabel).click();
        Thread.sleep(5000);
    }

    public static void setyourname() throws Exception {
        Start.driver.findElement(yourname).sendKeys("Laura Alvarez");
        Thread.sleep(5000);
    }

    public static void setYouremailaddress() throws Exception {
        Start.driver.findElement(youremailaddress).sendKeys("laura.alvarez@talosdigital.com");
        Thread.sleep(5000);
    }

    public static void setMessage() throws Exception {
        Start.driver.findElement(message).sendKeys("It's a test, please don't answer");
        Thread.sleep(5000);
    }

    /*public static void setNosoyrobot() throws Exception {
        Start.driver.findElement(nosoyrobot).click();
        Thread.sleep(5000);
    }*/

    public static void setSendMessageButton() throws Exception {
        Start.driver.findElement(sendMessageButton).click();
        Thread.sleep(5000);
    }


}
