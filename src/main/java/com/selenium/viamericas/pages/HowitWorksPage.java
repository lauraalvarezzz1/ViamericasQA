package com.selenium.viamericas.pages;

import org.openqa.selenium.By;
import com.selenium.viamericas.utility.Start;

public class HowitWorksPage {

    public static By sendmoneyButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div/button");
    public static By nextarrrow = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/section[1]/div[2]/span");
    public static By backarrow = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/section[1]/div[2]/span[1]");

    //Images
    public static By imageslide1 = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/section[1]/ul/li[1]/img");
    public static By imageslide2 = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/section[1]/ul/li[2]/img");
    public static By imageslide3 = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/section[1]/ul/li[3]/img");
    public static By imageslide4 = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/section[1]/ul/li[4]/img");

    //Link
    public static By locationlink = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/section[2]/div/div[1]/figure/figcaption/p/a/span");


    public static void clickonSendMoney() throws Exception {
        Start.driver.findElement(sendmoneyButton).click();
        Thread.sleep(3000);
    }

    public static void gothroughslider(){
        Start.driver.findElement(nextarrrow).click();
    }

    public static void gobackthroughslider(){
        Start.driver.findElement(backarrow).click();
    }

    public static void clickonlocationslink() throws Exception {
        Start.driver.findElement(locationlink).click();
        Thread.sleep(2000);
    }
}
