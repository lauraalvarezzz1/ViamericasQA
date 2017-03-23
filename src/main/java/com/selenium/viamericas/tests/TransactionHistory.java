package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.pages.TransactionHistoryPage;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.selenium.viamericas.utility.Start;

public class TransactionHistory {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login("cristhian.preciado@talosdigital.com", "Test4echo");
        HomePage.Goto("transaction");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void verifytitle(){
        Assert.assertNotNull(TransactionHistoryPage.title);
    }

    @Test(enabled = true, priority = 1)
    public void verify(){
        Assert.assertNotNull(TransactionHistoryPage.repeattransactionbutton);
    }

    @Test(enabled = true, priority = 2)
    public void verifywrongemail(){
        Assert.assertNotNull(TransactionHistoryPage.historylabel);
    }

    @Test(enabled = true, priority = 3)
    public void verifywrongpassword(){
        Assert.assertNotNull(TransactionHistoryPage.pendinglabel);
    }



}
