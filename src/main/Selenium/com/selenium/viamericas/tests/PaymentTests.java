package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.pages.MyAccount;
import com.selenium.viamericas.subpages.PaymentPage;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Utility;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class PaymentTests {
    WebDriver driver;

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login(Utility.getProperty("test.acc2"), Utility.getProperty("test.pass2"));
        HomePage.Goto("accounts");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void gotoMyaccount() throws Exception {
        MyAccount.goMyAccountlabel();
        MyAccount.goAccountsFunding();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("accounts"));
    }

    @Test(enabled = true, priority = 1)
    public void CreateBankAccount() throws Exception {
        PaymentPage.createNewBankAccount();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("settings/accounts"));
    }

    @Test(enabled = true, priority = 1)
    public void CreateCreditCard() throws Exception {
        PaymentPage.createNewCreditCard();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("settings/accounts"));

    }

    @Test(enabled = true, priority = 1)
    public void CreateDebitCard() throws Exception {
        PaymentPage.createNewDebitCard();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("settings/accounts"));
    }
}
