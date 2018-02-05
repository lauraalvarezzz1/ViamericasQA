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
    public void goToAboutUs() throws Exception {
        Thread.sleep(2000);
        HomePage.footerGoto("aboutus");
        Assert.assertTrue(Start.driver.getPageSource().contains("About Us"));
    }

    @Test(enabled = true, priority = 1)
    public void goToLeadership() throws Exception {
        Thread.sleep(2000);
        HomePage.footerGoto("leadership");
        Assert.assertTrue(Start.driver.getPageSource().contains("Management"));

    }
    @Test(enabled = true, priority = 2)
    public void goToNews() throws Exception {
        Thread.sleep(2000);
        HomePage.footerGoto("news");
        Assert.assertTrue(Start.driver.getPageSource().contains("News"));

    }
    @Test(enabled = true, priority = 3)
    public void goToCompliance() throws Exception {
        Thread.sleep(2000);
        HomePage.footerGoto("compliance");
        Assert.assertTrue(Start.driver.getPageSource().contains("Compliance"));

    }
    @Test(enabled = true, priority = 4)
    public void goToFileAComplaint() throws Exception {
        Thread.sleep(2000);
        HomePage.footerGoto("fileAComplaint");
        Assert.assertTrue(Start.driver.getPageSource().contains("File a Complaint"));

    }
    @Test(enabled = true, priority = 5)
    public void goToFAQ() throws Exception {
        Thread.sleep(2000);
        HomePage.footerGoto("faq");
        Assert.assertTrue(Start.driver.getPageSource().contains("Frequently Asked Questions"));

    }
    @Test(enabled = true, priority = 6)
    public void goToContactUs() throws Exception {
        Thread.sleep(2000);
        HomePage.footerGoto("contactus");
        Assert.assertTrue(Start.driver.getPageSource().contains("Contact Us"));

    }
    @Test(enabled = true, priority = 7)
    public void goToCareers() throws Exception {
        Thread.sleep(2000);
        HomePage.footerGoto("careers");

    }
    @Test(enabled = true, priority = 8)
    public void goToPrivacyPolicy() throws Exception {
        Thread.sleep(2000);
        HomePage.footerGoto("privacypolicy");

    }
    @Test(enabled = true, priority = 9)
    public void goToTermsAndConditions() throws Exception {
        Thread.sleep(2000);
        HomePage.footerGoto("termsandconditions");

    }
}
