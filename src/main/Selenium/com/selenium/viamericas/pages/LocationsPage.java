package com.selenium.viamericas.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import com.selenium.viamericas.utility.Start;


public class LocationsPage {

    public static By allowButtonModal = By.xpath("/html/body/div[3]/div[2]/button[1]");
    public static By dontallowButton = By.xpath("/html/body/div[3]/div[2]/button[2]");
    public static By locationsTexas = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div[1]/div/div[1]/div/input");

    public static By typepostalcodefield = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div[1]/div/div[1]/div/input");
    public static By map = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div[2]/div/ui-gmap-google-map/div/div[1]/div/div/div[1]/div[3]");

    public static void allowcurrentlocation() throws Exception {
        Start.driver.findElement(allowButtonModal).click();
        Thread.sleep(1500);
    }

    public static void dontallowLocation(){
        Start.driver.findElement(dontallowButton).click();
    }

    public static void searchpostalcod(String code){
        Start.driver.findElement(typepostalcodefield).sendKeys(code);
        Start.driver.findElement(typepostalcodefield).sendKeys(Keys.ENTER);
    }
}
