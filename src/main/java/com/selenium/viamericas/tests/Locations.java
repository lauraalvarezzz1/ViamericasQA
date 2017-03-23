package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LocationsPage;
import com.selenium.viamericas.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.selenium.viamericas.utility.Start;

public class Locations {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login("cristhian.preciado@talosdigital.com", "Test4echo");
        HomePage.Goto("locations");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void verifyMapfunctionality() throws Exception {
    }

    @Test(enabled = true, priority = 1)
    public void checklocationsintexasLinkExist(){
        Assert.assertNotNull(LocationsPage.locationsTexas);
    }
    @Test(enabled = true, priority = 2)
    public void verifyMap(){
        Assert.assertNotNull(LocationsPage.map);
    }

    @Test(enabled = true, priority = 3)
    public void verifywrongpassword() throws Exception {
    }

    @Test(enabled = true, priority = 4)
    public void validationpassword(){
    }

}
