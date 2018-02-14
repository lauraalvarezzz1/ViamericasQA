package com.selenium.viamericas.tests;

import com.selenium.viamericas.pages.*;
import com.selenium.viamericas.tests.viaModalTests.Login;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Utility;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class SentScreenTests {

    String randomCountry;

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
        Thread.sleep(3000);
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }

    @Test(enabled = true, priority = 0)
    public void login() throws Exception {
        LoginPage.clicklogin();
        LoginPage.login(Utility.getProperty("test.acc"), Utility.getProperty("test.pass"));

    }

    @Test(enabled = true, priority = 1)
    public void fillDestinationInformation() throws Exception {
        boolean flag = false;
        Thread.sleep(3000);
//        TransactionHistoryPage.closeIntercomChat();
        TransactionHistoryPage.newTransactionButton();
        randomCountry = Utility.getDestinationCountry();
        Send_DestinationPage.selectCountry(randomCountry);
        flag = Send_DestinationPage.howMoneyRecieved();
        if (flag) {
            Send_DestinationPage.chooseBank(Utility.getRandomNumber(10));
        }

        Assert.assertNotNull(Send_DestinationPage.exchangerate);
        Send_DestinationPage.selectAmountToSend();
        Send_DestinationPage.goandcontinue();
        //Assert.assertTrue(Start.driver.getPageSource().contains("By clicking on Log In or Sign Up you agree to Viamericas"));
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipient"));
    }

    @Test(enabled = true, priority = 2)
    public void RecipientInformation() throws Exception {


        Send_RecipientPage.clickAddRecipient();
        Send_RecipientPage.firstName();
        Send_RecipientPage.middleName();
        Send_RecipientPage.lastName();
        Send_RecipientPage.secondLastName();
        Send_RecipientPage.completephonenumber(randomCountry);
        Send_RecipientPage.address();
        Send_RecipientPage.emailaddress();
        Send_RecipientPage.selectstate();
        Send_RecipientPage.selectcity();
        Send_RecipientPage.moreAdress();
        Send_RecipientPage.addBirthday();
        Send_RecipientPage.accountNickname();
        Send_RecipientPage.accountNumber();
        Send_RecipientPage.accountType();
        Send_RecipientPage.continuebutton();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("funding"));
    }


    @Test(enabled = true, priority = 3)
    public void fundingMethod() throws Exception {
        int n = 0;
        if (Send_FundingPage.selectaccount()) {
            Send_FundingPage.selectSavedBankAccount();
            Send_FundingPage.continuebutton();
        } else {
            n = Utility.getRandomNumber(10);
            if (n < 5) {
                Send_FundingPage.selectCreditCard();
                Send_FundingPage.cardHickName();
                Send_FundingPage.cardNumber();
                Send_FundingPage.selectmonth();
                Send_FundingPage.selectyear();
                Send_FundingPage.addcvvcode();
            } else {
                Send_FundingPage.selectDebitCard();
                Send_FundingPage.cardHickName();
                Send_FundingPage.cardNumber();
                Send_FundingPage.selectmonth();
                Send_FundingPage.selectyear();
                Send_FundingPage.addcvvcode();
            }
        }
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("review"));
    }
    @Test(enabled = true, priority = 4)
    public void reviewPage() throws Exception {
        Send_ReviewPage.sendmoneybutton();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("confirmation"));
    }

}
