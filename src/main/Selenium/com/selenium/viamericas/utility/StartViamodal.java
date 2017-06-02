package com.selenium.viamericas.utility;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

/**
 * Created by lauraalvarez on 2/03/17.
 */
public class StartViamodal {

    public static WebDriver driver;

    public static String baseurl = "https://modallive.govianex.com/";

    public static void initiate(String Server) {


        if (Server.equals("viamodal")) {

            System.setProperty("webdriver.chrome.driver", "src/chromedriver");
            driver = new ChromeDriver();
            driver.manage().window().maximize();
            driver.navigate().to(baseurl);
            driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

        }
    }
}
