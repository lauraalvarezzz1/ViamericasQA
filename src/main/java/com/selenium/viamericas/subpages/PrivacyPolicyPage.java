package com.selenium.viamericas.subpages;

import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.By;

/**
 * Created by lauraalvarez on 1/02/17.
 */
public class PrivacyPolicyPage {

    public static By ADMINLabeloption = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[5]/a");
    public static By PrivacyPolicyOption = By.xpath("html/body/div[2]/div/div[1]/div[1]/header/div/ul/li[5]/ul/li[1]/a");
    public static By UploadNewFileButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[2]/button");
    public static By BrowseButton = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[1]/div[2]/div/form/label");

    public static By PrivacyPolicyHeader = By.xpath("/html/body/div[2]/div/div[1]/div[1]/header/nav-viamericas/nav/div[1]/ul[2]/li[2]/a");

    public static void gototheprivacypolicy() throws Exception {
        Start.driver.findElement(PrivacyPolicyHeader).click();
        Thread.sleep(2000);
    }
}
