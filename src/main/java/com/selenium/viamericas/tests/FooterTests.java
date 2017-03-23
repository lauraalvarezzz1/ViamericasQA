package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.ContactUsPage;
import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.utility.Start;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class FooterTests {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void Gotocontactus() throws Exception {
        ContactUsPage.gotocontact();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("contact-us"));
    }

    @Test(enabled = false, priority = 1)
    public void Completecontactform() throws Exception {
        ContactUsPage.setyourname();
        ContactUsPage.setYouremailaddress();
        ContactUsPage.setMessage();
       // ContactUsPage.setNosoyrobot();
        ContactUsPage.setSendMessageButton();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("contact-us"));
    }
}
