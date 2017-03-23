package com.selenium.viamericas.pages.viaModal;

import com.selenium.viamericas.utility.StartViamodal;
import org.openqa.selenium.By;

/**
 * Created by lauraalvarez on 10/03/17.
 */
public class LoginPage {

    public static By goToLogin = By.xpath("/html/body/div[2]/div/div[1]/div[2]/div/div[2]/div[2]/button[1]");


    public static void GotoLogin() throws Exception{

        StartViamodal.driver.findElement(goToLogin).click();
        Thread.sleep(2000);
    }
}
