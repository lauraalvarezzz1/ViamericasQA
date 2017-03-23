package com.selenium.viamericas.pages;

import org.openqa.selenium.By;
import com.selenium.viamericas.utility.Start;

public class TransactionHistoryPage {

    public static By historylabel = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div/div[1]/ul/li[1]/a");
    public static By pendinglabel = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div/div[1]/ul/li[2]/a");
    public static By title = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div/div[2]/div[1]/div/h2");
    public static By repeattransactionbutton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div/div/div/div[2]/div[2]/div/div[1]/div/div/div[7]/button");

    public static void repeattransaction(){
        Start.driver.findElement(repeattransactionbutton).click();
    }

}
