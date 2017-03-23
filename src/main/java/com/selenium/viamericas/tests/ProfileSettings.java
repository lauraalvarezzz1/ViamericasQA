package com.selenium.viamericas.tests;


import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.pages.MyAccount;
import com.selenium.viamericas.subpages.ProfileSettingsPage;
import com.selenium.viamericas.utility.Start;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class ProfileSettings {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login("laura.alvarez@talosdigital.com", "Laura123");
        HomePage.Goto("myaccount");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void gotoMyaccount() throws Exception {
        MyAccount.goMyAccountlabel();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("profile"));
    }

    @Test(enabled = true, priority = 1)
    public void Cleardropdowns() throws Exception {
        ProfileSettingsPage.cleandropdowns();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("profile"));
    }

    @Test(enabled = true, priority = 2)
    public void EditProfileSettings() throws Exception {

        ProfileSettingsPage.cleandropdowns();

        ProfileSettingsPage.changethefisrtname();
        ProfileSettingsPage.changetheLastNameField();
        ProfileSettingsPage.changetheMobilePhoneNumberField();
        ProfileSettingsPage.changetheaddressline1();
        ProfileSettingsPage.addtheoptionalfields();
        ProfileSettingsPage.changestate();


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

}

