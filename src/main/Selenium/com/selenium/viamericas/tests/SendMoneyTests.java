package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.*;
import com.selenium.viamericas.tests.viaModalTests.Login;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Utility;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class SendMoneyTests {

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("dev");
        Thread.sleep(3000);
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test (enabled = true, priority = 0)
    public void login() throws Exception {
        LoginPage.clicklogin();
        LoginPage.login(Utility.getProperty("test.acc"), Utility.getProperty("test.pass"));

    }

    @Test (enabled = true, priority = 1)
    public void fillDestinationInformation() throws Exception {
        Thread.sleep(3000);
        HomePage.Goto("sendmoney");
        String randomCountry = Utility.getDestinationCountry();
        Send_DestinationPage.selectCountry(randomCountry);
        Send_DestinationPage.howMoneyRecieved();
        Send_DestinationPage.chooseBank(Utility.getRandomNumber());
        Assert.assertNotNull(Send_DestinationPage.exchangerate);
        Send_DestinationPage.selectAmountToSend();
        Send_DestinationPage.goandcontinue();
        //Assert.assertTrue(Start.driver.getPageSource().contains("By clicking on Log In or Sign Up you agree to Viamericas"));
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipient"));
    }

    @Test (enabled = true, priority = 2)
    public void RecipientInformation() throws Exception {
        Send_RecipientPage.completename();
        Send_RecipientPage.completelastname();
        Send_RecipientPage.completephonenumber();
        Send_RecipientPage.addadressline1();
        Send_RecipientPage.emailaddress();
        Send_RecipientPage.selectmonth();
        Send_RecipientPage.selectday();
        Send_RecipientPage.selectyear();
        Send_RecipientPage.selectstate();
        Send_RecipientPage.selectcity();
        Send_RecipientPage.continuebutton();
        //Assert.assertTrue(Start.driver.getCurrentUrl().contains("bankdeposit"));
    }
    /*


    @Test (enabled = false, priority = 2)
    public void RecipientBankDeposit() throws Exception {
        Send_BankdepositPage.Completeaccountname();
        Send_BankdepositPage.Completeaccountnumber();
        Send_BankdepositPage.selectaccounttype();
        //Send_BankdepositPage.goandcontinue();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("fast-send/funding"));
    }

    @Test (enabled = true, priority = 3)
    public void FundingPagewithBankAccount() throws Exception {
        Send_FundingPage.selectaccount("bankaccount");
        Send_FundingPage.continuebutton();
        Send_FundingPage.addbankholdername();
        Send_FundingPage.addbanknickname();
        Send_FundingPage.addroutingnumber();
        Send_FundingPage.addnumber();
        Send_FundingPage.selecttype();
        //Send_FundingPage.continuebutton();
        //Assert.assertTrue(Start.driver.getCurrentUrl().contains("review"));
    }

    @Test (enabled = false, priority = 3)
    public void FundingPagewithCardAccount() throws Exception {
        Send_FundingPage.selectaccount("creditdebitbutton");
        Send_FundingPage.continuebutton();
        Send_FundingPage.selectcreditordebit();
        Send_FundingPage.addcardholdername();
        Send_FundingPage.addcardnumber();
        Send_FundingPage.selectmonth();
        Send_FundingPage.selectyear();
        Send_FundingPage.addcvvcode();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("review"));

    }


    @Test(enabled = true, priority = 4)
    public void gotothefirstform() throws Exception {
        SignUpPage.addemailaddress();
        SignUpPage.addpassword("test4echo");
        SignUpPage.clickonsignupbutton();
    }

    @Test(enabled = true, priority = 5)
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

    @Test(enabled = true, priority = 6)
    public void selectcity() throws Exception {
        Thread.sleep(2000);
        SignUpPage.selectcity("LOS ANGELES");
        Assert.assertNotNull(SignUpPage.cityDropdown);
    }

    @Test(enabled = true, priority = 7)
    public void closepopupandwheredoyousendmoney() throws Exception {
        //SignUpPage.setclosepupo();
        SignUpPage.setWheredoyousendmoney("COLOMBIA");
        //Assert.assertTrue(Start.driver.getCurrentUrl().contains("confirmation"));
    }

    @Test(enabled = true, priority = 8)
    public void createbutton() throws Exception {
        SignUpPage.acceptTCPP();
        SignUpPage.createbutton();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("review"));
    }


    @Test (enabled = true, priority = 9)
    public void ReviewPage() throws Exception {

        Send_ReviewPage.sendmoneybutton();
        //Assert.assertTrue(Start.driver.getCurrentUrl().contains("account/pre-register"));
        //Send_FundingPage.setClosepopup();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("revie"));
    }
    */
}
