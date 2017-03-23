package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.pages.MyAccount;
import com.selenium.viamericas.subpages.Accounts;
import com.selenium.viamericas.utility.Start;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AddAccounts {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login("laura.alvarez@talosdigital.com", "Laura123");
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

    @Test(enabled = true, priority = 2)
    public void Createcardaccount() throws Exception {
        Accounts.clickoncreatebutton();
        Accounts.clickoncardAccount();
        Accounts.addthecardholdername();
        Accounts.addcardnumber();
        Accounts.selectmonth();
        Accounts.selectyear();
        Accounts.addcvvcode();
        Accounts.clickoncreateaccount();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("accounts"));
    }

    @Test(enabled = true, priority = 1)
    public void bankaccount() throws Exception {
        Accounts.clickoncreatebutton();
        Accounts.addbankholdername();
        Accounts.addbanknickname();
        Accounts.addroutingnumber();
        Accounts.addaccountnumber();
        Accounts.selecttype();
        Accounts.clickoncreateaccount();
        Accounts.clickonclosepopup();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("accounts"));
    }
}
