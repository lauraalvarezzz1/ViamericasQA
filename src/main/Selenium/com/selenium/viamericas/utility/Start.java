package com.selenium.viamericas.utility;

import io.github.bonigarcia.wdm.ChromeDriverManager;
import io.github.bonigarcia.wdm.PhantomJsDriverManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.Collections;
import java.util.concurrent.TimeUnit;


public class Start
{
    final static Logger logger = Logger.getLogger(Start.class);
    public static WebDriver driver;
    String currentServer;

    /**
     * This constructor checks if you're running from an IDE a sole test or you're running with the test goal in maven
     *
     * @param Server String with the server ( dev | qa )
     */
    public static void initiate(String Server)
    {

        String s = System.getProperty("use.driver");

        if (!Server.isEmpty() && s == null)
        {

			/*
			Comment or uncomment when testing individual methods with ChromeDriver or PhantomJS
			 */

            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.addArguments("--ignore-certificate-errors");
            String chromedriverversion = Utility.getProperty("chromedriver.version");
            ChromeDriverManager.getInstance().version(chromedriverversion).arch64().setup();
            driver = new ChromeDriver(chromeOptions);

/*            DesiredCapabilities desiredCapabilities = DesiredCapabilities.phantomjs();
            desiredCapabilities.setCapability("phantomjs.cli.args", Collections.singletonList("--ignore-ssl-errors=true"));
            String phantomjsversion = Utility.getProperty("phantomjs.version");
            PhantomJsDriverManager.getInstance().version(phantomjsversion).arch64().setup();
            driver = new PhantomJSDriver(desiredCapabilities);*/

            switch (Server)
            {
                case "dev":
                    System.setProperty("current.server", Utility.getProperty("server.dev"));
                    driver.navigate().to(Utility.getProperty("server.dev"));
                    break;
                case "test":
                    System.setProperty("current.server", Utility.getProperty("server.test"));
                    driver.navigate().to(Utility.getProperty("server.test"));
                    break;
                case "stage":
                    System.setProperty("current.server", Utility.getProperty("server.stage"));
                    driver.navigate().to(Utility.getProperty("server.stage"));
                    break;
            }
            driver.manage().timeouts().implicitlyWait(20000, TimeUnit.MILLISECONDS);
            driver.manage().timeouts().pageLoadTimeout(25000, TimeUnit.MILLISECONDS);

        }
        else
        {
            try
            {
                String connectTo;
                switch (System.getProperty("end.server"))
                {
                    case "dev":
                        System.setProperty("current.server", Utility.getProperty("server.dev"));
                        connectTo = Utility.getProperty("server.dev");
                        break;
                    case "test":
                        System.setProperty("current.server", Utility.getProperty("server.test"));
                        connectTo = Utility.getProperty("server.tests");
                        break;
                    case "stage":
                        System.setProperty("current.server", Utility.getProperty("server.stage"));
                        connectTo = Utility.getProperty("server.stage");
                        break;
                    default:
                        connectTo = Utility.getProperty("server.dev");
                }

                switch (System.getProperty("use.driver"))
                {
                    case "chrome":
                        ChromeOptions chromeOptions = new ChromeOptions();
                        chromeOptions.addArguments("--ignore-certificate-errors");
                        String chromedriverversion = Utility.getProperty("chromedriver.version");
                        ChromeDriverManager.
                                getInstance().
                                version(chromedriverversion).
                                arch64().
                                setup();
                        driver = new ChromeDriver(chromeOptions);
                        driver.manage().window().maximize();
                        driver.navigate().to(connectTo);
                        driver.manage().timeouts().implicitlyWait(20000, TimeUnit.MILLISECONDS);
                        driver.manage().timeouts().pageLoadTimeout(25000, TimeUnit.MILLISECONDS);
                        break;
                    case "phantomjs":
                        String phantomjsversion = Utility.getProperty("phantomjs.version");
                        DesiredCapabilities desiredCapabilities = DesiredCapabilities.phantomjs();
                        desiredCapabilities.setCapability("phantomjs.cli.args", Collections.singletonList("--ignore-ssl-errors=true"));
                        PhantomJsDriverManager.
                                getInstance().
                                version(phantomjsversion).
                                arch64().
                                setup();
                        driver = new PhantomJSDriver(desiredCapabilities);
                        driver.manage().window().maximize();
                        driver.navigate().to(connectTo);
                        driver.manage().timeouts().implicitlyWait(20000, TimeUnit.MILLISECONDS);
                        driver.manage().timeouts().pageLoadTimeout(25000, TimeUnit.MILLISECONDS);
                        break;
                    default:
                        String phantomjsversion2 = Utility.getProperty("phantomjs.version");
                        DesiredCapabilities desiredCapabilities2 = DesiredCapabilities.phantomjs();
                        desiredCapabilities2.setCapability("phantomjs.cli.args", Collections.singletonList("--ignore-ssl-errors=true"));
                        PhantomJsDriverManager.
                                getInstance().
                                version(phantomjsversion2).
                                arch64().
                                setup();
                        driver = new PhantomJSDriver(desiredCapabilities2);
                        driver.manage().window().maximize();
                        driver.navigate().to(connectTo);
                        driver.manage().timeouts().implicitlyWait(20000, TimeUnit.MILLISECONDS);
                        driver.manage().timeouts().pageLoadTimeout(25000, TimeUnit.MILLISECONDS);
                }
            }
            catch (Exception e)
            {
                logger.error(e.getMessage());
            }
        }
    }
}
