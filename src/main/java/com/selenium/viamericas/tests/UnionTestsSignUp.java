package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.pages.SignUpPage;
import com.selenium.viamericas.utility.DataGenerators;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Language;
import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class UnionTestsSignUp {

    public Language language;

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
        SignUpPage.addemailaddress("test@test.com");
        SignUpPage.addpassword("test4echo");
        SignUpPage.clickonsignupbutton();
    }

    @Test(enabled = true, priority = 2, invocationCount = 1)
    public void completestringfields() throws Exception {
        if (LoginPage.isLoggedIn() == false){
            gotosignup();
            gotothefirstform();
        }
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


