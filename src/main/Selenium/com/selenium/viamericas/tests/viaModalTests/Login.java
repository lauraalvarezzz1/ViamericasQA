package com.selenium.viamericas.tests.viaModalTests;
import com.selenium.viamericas.pages.viaModal.LoginPage;
import com.selenium.viamericas.pages.viaModal.HomePage;
import com.selenium.viamericas.pages.viaModal.mainPage;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.StartViamodal;
import org.testng.Assert;
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
        HomePage.Goto("login");
    }

    @Test(enabled = true, priority = 1)
    public void verifyemail(){
        Assert.assertNotNull(LoginPage.email, "Was not found");
    }

    @Test(enabled = true, priority = 2)
    public void verifypassword(){
        Assert.assertNotNull(LoginPage.password, "Was not found");
    }

    @Test(enabled = true, priority = 3)
    public void verifywrongemail() throws Exception {
        LoginPage.typeemail("viamericas.com");
        LoginPage.typepassword("Test4echo");
        LoginPage.clicklogin();
        Assert.assertNotNull(LoginPage.wrongcredentials);
    }

    @Test(enabled = true, priority = 4)
    public void verifywrongpassword() throws Exception {
        LoginPage.clearfields();
        LoginPage.typeemail("laura.alvarez@talosdigital.com");
        LoginPage.typepassword("Laura123123");
        LoginPage.clicklogin();
        Assert.assertNotNull(LoginPage.wrongcredentials);
    }

    @Test(enabled = true, priority = 5)
    public void validationpassword() throws Exception {
        LoginPage.clearfields();
        LoginPage.typeemail("laura.alvarez@talosdigital.com");
        LoginPage.typepassword("1234567");
        LoginPage.clicklogin();
        Assert.assertNotNull(LoginPage.wrongcredentials);
    }

    @Test(enabled = true, priority = 6)
    public void correctlogin() throws Exception{
        LoginPage.clearfields();
        LoginPage.typeemail("laura.alvarez@talosdigital.com");
        LoginPage.typepassword("Test4echo");
        LoginPage.clicklogin();
        Thread.sleep(2000);
        Assert.assertFalse(Start.driver.getCurrentUrl().contains("account/login"));
    }
}
