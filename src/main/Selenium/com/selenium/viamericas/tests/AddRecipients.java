package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.pages.MyAccount;
import com.selenium.viamericas.subpages.RecipientsPage;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Utility;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AddRecipients {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login(Utility.getProperty("test.acc2"), Utility.getProperty("test.pass2"));
        HomePage.Goto("recipients");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void gotoRecipients() throws Exception {
        MyAccount.goMyAccountlabel();
        RecipientsPage.GotoRecipients();
        RecipientsPage.clickOnCreate();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipients"));
    }

    @Test(enabled = true, priority = 1)
    public void Createrecipient() throws Exception {
        RecipientsPage.completethefirstName();
        RecipientsPage.completetheMiddleName();
        RecipientsPage.completetheLastName();
        RecipientsPage.completethesecondName();
        RecipientsPage.completethemobilesecondnumber();
        RecipientsPage.setEmailAddressOptional();
        RecipientsPage.providethemonth();
        RecipientsPage.providetheday();
        RecipientsPage.providetheyear();
        RecipientsPage.setAddressLine1();
        RecipientsPage.setAddressLine2();
        RecipientsPage.providethecountry();
        RecipientsPage.setzipcode();
        RecipientsPage.providethestate();
        RecipientsPage.providethecity();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipients"));
    }

    @Test(enabled = true, priority = 2)
    public void Addanewbankaccount() throws Exception {
        RecipientsPage.setChooseabank();
        RecipientsPage.setAccountHolderName();
        RecipientsPage.setAccountNumber();
        RecipientsPage.setAccountType();
        RecipientsPage.createrecipient();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipients"));
    }
}
