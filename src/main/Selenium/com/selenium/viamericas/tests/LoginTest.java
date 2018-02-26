package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.utility.Utility;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.selenium.viamericas.utility.Start;

public class LoginTest {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("dev");
        Thread.sleep(5000);
        LoginPage.clicklogin();
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void verifyemail(){
        Assert.assertNotNull(LoginPage.email, "Was not found");
    }

    @Test(enabled = true, priority = 1)
    public void verifypassword(){
        Assert.assertNotNull(LoginPage.password, "Was not found");
    }

    @Test(enabled = true, priority = 3)
    public void ClickLoginBUtton() throws Exception {
        LoginPage.login("esneider.gaviria@talosdigital.com","Test4echo");
    }

    @Test(enabled = true, priority = 2)
    public void verifywrongemailorPassword() throws Exception {
        LoginPage.typeemail("viamericas.com");
        LoginPage.typepassword("Test4echo");
    }

}
