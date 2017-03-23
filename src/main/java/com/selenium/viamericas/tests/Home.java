package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.GetaQuotePage;
import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.selenium.viamericas.utility.Start;

public class Home {

    @BeforeClass
    public void start() throws Exception {

        Start.initiate("dev");
        HomePage.Goto("login");
        LoginPage.login("laura.alvarez@talosdigital.com", "Laura123");

    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void checkgotoGetaQuote() throws Exception {
        HomePage.clickGetaQuote();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("get-a-quote"));
    }

    @Test(enabled = true, priority = 1)
    public void checkgotoSignUpwithoutLogin() throws Exception {
        Thread.sleep(4000);
        HomePage.clickSignUp();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("account/pre-register"));
    }
    @Test(enabled = true, priority = 2)
    public void checkAboutUsPage() throws Exception {
        Start.driver.get(Start.baseurl);
        Thread.sleep(3000);
        HomePage.footerGoto("aboutus");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("about-us"));
    }

    @Test(enabled = true, priority = 3)
    public void checkLeadershipPage() throws Exception {
        HomePage.footerGoto("leadership");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("management"));
    }

    @Test(enabled = true, priority = 4)
    public void checkCarrersPage() throws Exception {
        HomePage.footerGoto("careers");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("careers"));
    }

    @Test(enabled = true, priority = 5)
    public void checkNewsPage() throws Exception{
        HomePage.footerGoto("news");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("news"));
    }


    @Test(enabled = true, priority = 6)
    public void checkPayerNetwork() throws Exception{
        HomePage.footerGoto("payernetwork");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("correspondents"));
    }

    @Test(enabled = true, priority = 7)
    public void checkFileCompliance() throws Exception{
        HomePage.footerGoto("file-complaint");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("file-complaint"));
    }

    @Test(enabled = true, priority = 8)
    public void checkCompliance() throws Exception{
        HomePage.footerGoto("compliance");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("compliance"));
    }

    @Test(enabled = true, priority = 9)
    public void checkFAQ() throws Exception{
        HomePage.footerGoto("faq");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("faq"));
    }

    @Test(enabled = true, priority = 10)
    public void checkConctUs() throws Exception{
        HomePage.footerGoto("contactus");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("contact-us"));
    }

    @Test(enabled = true, priority = 11)
    public void checkPrivacyPolicy() throws Exception{
        HomePage.footerGoto("privacypolicy");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("contact-us"));
    }

    @Test(enabled = true, priority = 12)
    public void checkTermsandConditions() throws Exception{
        HomePage.footerGoto("termsandconditions");
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("contact-us"));
    }

}

