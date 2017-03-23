package com.selenium.viamericas.tests.viaModalTests;
import com.selenium.viamericas.pages.viaModal.mainPage;
import com.selenium.viamericas.utility.StartViamodal;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

/**
 * Created by lauraalvarez on 2/03/17.
 */
public class Login {

    @BeforeClass
    public void start() throws Exception {
        StartViamodal.initiate("viamodal");
        System.out.println("//------------------");
    }

    @AfterClass
    public void finish() {
        StartViamodal.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void gotosend() throws Exception {
        mainPage.GotosendNow();
    }
}
