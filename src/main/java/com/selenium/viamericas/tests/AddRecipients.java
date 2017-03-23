package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.pages.MyAccount;
import com.selenium.viamericas.subpages.Recipients;
import com.selenium.viamericas.utility.Start;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AddRecipients {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login("laura.alvarez@talosdigital.com", "Laura123");
        HomePage.Goto("recipients");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void gotoRecipients() throws Exception {
        MyAccount.goMyAccountlabel();
        Recipients.GotoRecipients();
        Recipients.clickOnCreate();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipients"));
    }

    @Test(enabled = true, priority = 1)
    public void Createrecipient() throws Exception {
        Recipients.completethefirstName();
        Recipients.completetheMiddleName();
        Recipients.completetheLastName();
        Recipients.completethesecondName();
        Recipients.completethemobilesecondnumber();
        Recipients.setEmailAddressOptional();
        Recipients.providethemonth();
        Recipients.providetheday();
        Recipients.providetheyear();
        Recipients.setAddressLine1();
        Recipients.setAddressLine2();
        Recipients.providethecountry();
        Recipients.setzipcode();
        Recipients.providethestate();
        Recipients.providethecity();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipients"));
    }

    @Test(enabled = true, priority = 2)
    public void Addanewbankaccount() throws Exception {
        Recipients.setChooseabank();
        Recipients.setAccountHolderName();
        Recipients.setAccountNumber();
        Recipients.setAccountType();
        Recipients.createrecipient();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipients"));
    }
}
