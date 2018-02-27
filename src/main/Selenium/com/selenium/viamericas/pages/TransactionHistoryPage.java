package com.selenium.viamericas.pages;

import org.openqa.selenium.By;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Utility;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TransactionHistoryPage {


    public static By newTransaction = By.id("new-transaction-transaction-history");
    public static By chatButtonOpen = By.cssSelector("div[id='my_custom_intercom_container'] [id='my_custom_intercom_link'] [class='intercom-launcher'] [class='intercom-launcher-open-icon']");
    public static By chatButtonClose = By.cssSelector("div[id='my_custom_intercom_container'] [id='my_custom_intercom_link'] [class='intercom-launcher'] [class='intercom-launcher-close-icon']");


    public static void newTransactionButton() throws Exception {
        Thread.sleep(3000);
        if (Utility.isSomethingClickable(newTransaction)) {
            Start.driver.findElement(newTransaction).click();
            Thread.sleep(3000);
        }
    }

    public static void closeIntercomChat() throws Exception {

        //Thread.sleep(3000);
        if (Utility.isSomethingClickable(chatButtonOpen)) {


            JavascriptExecutor executor = (JavascriptExecutor) Start.driver;
            executor.executeScript("arguments[0].click();", chatButtonOpen);

            WebDriverWait wait = new WebDriverWait(Start.driver, 5);

            Start.driver.findElement(chatButtonClose).click();
            Start.driver.findElement(chatButtonClose).click();
            Thread.sleep(3000);
        }
    }
}
