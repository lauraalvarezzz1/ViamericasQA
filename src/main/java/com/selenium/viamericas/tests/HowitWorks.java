package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.HowitWorksPage;
import com.selenium.viamericas.pages.LocationsPage;
import com.selenium.viamericas.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.selenium.viamericas.utility.Start;

public class HowitWorks {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login("cristhian.preciado@talosdigital.com", "Test4echo");
        HomePage.Goto("howitworks");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void checkbuttonredirectstosendmoney() throws Exception {
        HowitWorksPage.clickonSendMoney();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("destination"));
    }

    @Test(enabled = true, priority = 1)
    public void checkSlidergonext() throws Exception {
        HomePage.Goto("howitworks");
        Assert.assertNotNull(HowitWorksPage.imageslide1);
        HowitWorksPage.gothroughslider();
        Assert.assertNotNull(HowitWorksPage.imageslide2);
        HowitWorksPage.gothroughslider();
        Assert.assertNotNull(HowitWorksPage.imageslide3);
        HowitWorksPage.gothroughslider();
        Assert.assertNotNull(HowitWorksPage.imageslide4);

    }

    @Test(enabled = true, priority = 2)
    public void checkSlidegoBack() {
        HowitWorksPage.gobackthroughslider();
        Assert.assertNotNull(HowitWorksPage.imageslide3);
        HowitWorksPage.gobackthroughslider();
        Assert.assertNotNull(HowitWorksPage.imageslide2);
        HowitWorksPage.gobackthroughslider();
        Assert.assertNotNull(HowitWorksPage.imageslide1);
    }

    @Test(enabled = true, priority = 3)
    public void checkLinkLocations() throws Exception {
        HowitWorksPage.clickonlocationslink();
        LocationsPage.allowcurrentlocation();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("locations"));
    }
}

