package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.selenium.viamericas.utility.Start;

public class Login {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        System.out.println("//------------------");
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
    @Test(enabled = true, priority = 2)
    public void verifywrongemail() throws Exception {
        LoginPage.typeemail("viamericas.com");
        LoginPage.typepassword("Test4echo");
        LoginPage.clicklogin();
        Assert.assertNotNull(LoginPage.wrongcredentials);
    }

    @Test(enabled = true, priority = 3)
    public void verifywrongpassword() throws Exception {
        LoginPage.clearfields();
        LoginPage.typeemail("laura.alvarez@talosdigital.com");
        LoginPage.typepassword("Laura123123");
        LoginPage.clicklogin();
        Assert.assertNotNull(LoginPage.wrongcredentials);
    }

    @Test(enabled = true, priority = 4)
    public void validationpassword() throws Exception {
        LoginPage.clearfields();
        LoginPage.typeemail("laura.alvarez@talosdigital.com");
        LoginPage.typepassword("1234567");
        LoginPage.clicklogin();
        Assert.assertNotNull(LoginPage.wrongcredentials);
    }

    @Test(enabled = true, priority = 5)
    public void correctlogin() throws Exception{
        LoginPage.clearfields();
        LoginPage.typeemail("laura.alvarez@talosdigital.com");
        LoginPage.typepassword("Test4echo");
        LoginPage.clicklogin();
        Thread.sleep(2000);
        Assert.assertFalse(Start.driver.getCurrentUrl().contains("account/login"));
    }

}
