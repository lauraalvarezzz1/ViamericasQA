package com.selenium.viamericas.utility;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.concurrent.TimeUnit;

public class Start {

    public static WebDriver driver;

    public static String baseurl = "https://dev.govianex.com/#/";

    public static void initiate(String Server) {


        if (Server.equals("test")) {

            System.setProperty("webdriver.chrome.driver", "src/chromedriver");
            driver = new ChromeDriver();
            driver.manage().window().maximize();
            driver.navigate().to(baseurl);
            driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

        } else if (Server.equals("else")) {

            driver = new FirefoxDriver();
            driver.manage().window().maximize();
            driver.navigate().to("https://test.govianex.com/#/");
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

            /** }else if(Server.equals("phantomjs")){

             File src = new File("/Users/talosdigital/Documents/FSP_repo/FPS-QA/phantomjs");
             System.setProperty("phantomjs.binary.path", src.getAbsolutePath());
             driver = new PhantomJSDriver();
             driver.manage().window().maximize();
             driver.navigate().to("https://hybris.staging-west.farmaciasanpablo.com.mx:9002/");
             driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

             }**/

        }
    }
}