package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.SignUpPage;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.selenium.viamericas.utility.Start;
import org.openqa.selenium.WebDriver;


public class SignUp {



    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void gotosignup() throws Exception {
        SignUpPage.gotosignupform();
    }

    @Test(enabled = true, priority = 1)
    public void gotothefirstform() throws Exception {
        SignUpPage.addemailaddress("test+1@test.com");
        SignUpPage.addpassword("test4echo");
        SignUpPage.clickonsignupbutton();
    }

    @Test(enabled = true, priority = 2)
    public void completestringfields() throws Exception {
        SignUpPage.addfirstname("LAURA");
        SignUpPage.addlastname("ALVAREZ");
        SignUpPage.addmobilephonenumber("3117224425");
        SignUpPage.addadressline1("Calle 10");
        SignUpPage.addday("01");
        SignUpPage.addmonth("11");
        SignUpPage.addyear("1998");
        SignUpPage.addzipcode("90001");

    }

    @Test(enabled = true, priority = 3)
    public void selectcity() throws Exception {
        Thread.sleep(2000);
        SignUpPage.selectcity("LOS ANGELES");
        Assert.assertNotNull(SignUpPage.cityDropdown);
    }

    @Test(enabled = true, priority = 4)
    public void createbutton() throws Exception {
        SignUpPage.acceptTCPP();
        SignUpPage.createbutton();
        //Assert.assertTrue(Start.driver.getCurrentUrl().contains("confirm"));
    }

}


