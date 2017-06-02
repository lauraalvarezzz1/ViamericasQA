package com.selenium.viamericas.subpages;

import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;

public class Terms_and_ConditionsPage {

    public static By ADMINLabeloption = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[5]/a");
    public static By TermsandConditionsOption = By.xpath("html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[5]/ul/li[2]/a");
    public static By UploadNewFileButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[2]/button");
    public static By BrowseButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div[2]/div/form/label");

    public static By TermsandConditionsHeader = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div[1]/ul[2]/li[1]/a");

    public static void gotothetermsandconditions() throws Exception {
        Start.driver.findElement(TermsandConditionsHeader).click();
        Thread.sleep(2000);
    }

}
