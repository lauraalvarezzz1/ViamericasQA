package com.selenium.viamericas.subpages;

import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;

/**
 * Created by lauraalvarez on 1/02/17.
 */
public class TCPPHistoryPage {

    public static By ADMINLabeloption = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[5]/a");
    public static By TCPPHistory = By.xpath("html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[5]/ul/li[3]/a");
    public static By UploadNewFileButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[2]/button");
    public static By firstemail = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/table/tbody/tr[1]/td[1]/a");

    public static By nextpageButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div/a[2]");
    public static By previouspageButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div/div/a[1]");
    public static By GoBackToSendersListButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[4]/a");

    public static void gotoadminlabeloption() throws Exception {
        Start.driver.findElement(ADMINLabeloption).click();
        Thread.sleep(2000);
    }

    public static void clickAcceptedTCPPHistory () throws Exception{
        Start.driver.findElement(TCPPHistory).click();
        Thread.sleep(2000);
    }

    public static void clickonthefirsemail () throws Exception{
        Start.driver.findElement(firstemail).click();
        Thread.sleep(2000);
    }

    public static void clickonnextpage () throws Exception{
        Start.driver.findElement(nextpageButton).click();
        Thread.sleep(2000);
    }

    public static void clickonpreviouspage () throws Exception{
        Start.driver.findElement(previouspageButton).click();
        Thread.sleep(2000);
    }

    public static void ClickGoBackToSendersListButton () throws Exception{
        Start.driver.findElement(GoBackToSendersListButton).click();
        Thread.sleep(2000);
    }

}
