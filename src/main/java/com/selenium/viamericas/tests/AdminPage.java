package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.HomePage;
import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.subpages.PrivacyPolicyPage;
import com.selenium.viamericas.subpages.TCPPHistoryPage;
import com.selenium.viamericas.subpages.Terms_and_ConditionsPage;
import com.selenium.viamericas.utility.Start;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


public class AdminPage {
    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        HomePage.Goto("login");
        LoginPage.login("viamericas@gmail.com", "admin123");
        HomePage.Goto("adminpage");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test (enabled = true, priority = 0)
    public void gotoTCCPPHistory() throws Exception {
        TCPPHistoryPage.gotoadminlabeloption();
        TCPPHistoryPage.clickAcceptedTCPPHistory();
        TCPPHistoryPage.clickonthefirsemail();
        TCPPHistoryPage.ClickGoBackToSendersListButton();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("admin-accepted-tc-pp-history"));
    }

    @Test (enabled = true, priority = 2)
    public void gototermsandconditions() throws Exception {
        Terms_and_ConditionsPage.gotothetermsandconditions();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("admin-terms-and-conditions"));
    }

    @Test (enabled = true, priority = 1)
    public void gotoprivacypolicy() throws Exception {
        PrivacyPolicyPage.gototheprivacypolicy();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("admin-privacy-policy"));
    }

}
