package com.selenium.viamericas.pages.viaModal;

import com.selenium.viamericas.utility.StartViamodal;
import org.openqa.selenium.By;

/**
 * Created by lauraalvarez on 2/03/17.
 */
public class mainPage {

    public static By sendNowButton = By.xpath("//*[@id=\"via-modal-advertisement-container\"]/button");


    public static void GotosendNow() throws Exception{

        StartViamodal.driver.findElement(sendNowButton).click();
        Thread.sleep(2000);
    }

}
