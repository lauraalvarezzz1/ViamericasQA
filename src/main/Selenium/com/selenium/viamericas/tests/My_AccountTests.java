package com.selenium.viamericas.tests;


import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.pages.MyAccountPage;
import com.selenium.viamericas.subpages.ProfileSettingsPage;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Utility;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.util.Random;


public class My_AccountTests {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login(Utility.getProperty("test.acc2"), Utility.getProperty("test.pass2"));
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void gotoMyaccount() throws Exception {
        HomePage.Goto("myAccount");
    }

    @Test(enabled = true, priority = 1)
    public void addNewRecipient() throws Exception {
        MyAccountPage.clickRecipients();
        MyAccountPage.addNewRecipientRecipient();
        MyAccountPage.enterFirstNameRecipient();
        MyAccountPage.enterLastNameRecipient();
        MyAccountPage.enterMiddleNameRecipient();
        MyAccountPage.enterSecondLastNameRecipient();
        MyAccountPage.selectCountryRecipient();
        MyAccountPage.selectStateRecipient();
        MyAccountPage.selectCityRecipient();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("profile"));
    }

    @Test(enabled = true, priority = 2)
    public void EditProfileSettings() throws Exception {
        //MyAccountPage.goMyAccountlabel();
        ProfileSettingsPage.cleandropdowns();

        ProfileSettingsPage.changethefisrtname();
        ProfileSettingsPage.changetheLastNameField();
        ProfileSettingsPage.changetheMobilePhoneNumberField();
        ProfileSettingsPage.changetheaddressline1();
        ProfileSettingsPage.addtheoptionalfields();
        ProfileSettingsPage.changestate();
        ProfileSettingsPage.changeUnionPlusId("unionId");

        //ProfileSettingsPage.gotoclosepopup();
        ProfileSettingsPage.changecity();
        //ProfileSettingsPage.gotoclosepopup();


        ProfileSettingsPage.changeZipCode();
        ProfileSettingsPage.changecity();
        ProfileSettingsPage.setClosepopup();
    }

    @Test(enabled = false, priority = 3)
    public void ChangeLanguage() throws Exception {
        ProfileSettingsPage.changepreferences("English");
        ProfileSettingsPage.setClosepopup();
        ProfileSettingsPage.clickupdatebutton();
    }

    @Test(enabled = true, priority = 4)
    public void ChangePassword() throws Exception {
        ProfileSettingsPage.changePasswordProcess();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("profile"));
    }

    @Test(enabled = true, priority = 4)
    public void changeUnionPlus() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login(Utility.getProperty("test.acc2"), Utility.getProperty("test.pass2"));
        HomePage.Goto("myaccount");
        ProfileSettingsPage.changeUnionPlusId("unionId");
    }

    @Test(enabled = true, priority = 4)
    public void addUnionPlusAffiliate() throws Exception {
        Random rand = new Random();
        int randomNum = rand.nextInt(5-1)+1;
        HomePage.Goto("myaccount");
        String unionName =Utility.getProperty("test.UnionPlusName."+ randomNum);
        ProfileSettingsPage.addUnionPlusAffiliate(Utility.getProperty("test.UnionPlusProgram.1"),
                unionName,
                Utility.getProperty("111111"));
    }
}

