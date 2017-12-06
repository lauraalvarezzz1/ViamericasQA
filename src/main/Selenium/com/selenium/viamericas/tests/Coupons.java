package com.selenium.viamericas.tests;
import com.selenium.viamericas.pages.*;
import com.selenium.viamericas.utility.Utility;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.selenium.viamericas.utility.Start;

/**
 * Created by lauraalvarez on 29/03/17.
 */
public class Coupons {
    /*Cases for obtain one discount.
    1. For the fast send money
    2. For the normal send money
    3. Create a new identifier as a user (the user already have an account)

    Test.
    1. Validate the Coupons
    2. Validate again the sign up process
    3. validate again the fast send money
    4. Validate again the send money flow
    5. Validate the review page
    6. Validate profile settings
    7. What happen if I have two different Coupons? By default this select the first option
     */

    /*
    Flow:
    1. As a guest
        -Go to destination information (Test with cash pickup and bank deposit)
        -Go to recipient information
        -Go to Recipient bank Account
        -Go to Funding Information (test with bank account and cards: credit and debit)
        -Go to Sign Up flow (Add identifier)
        -Go to Review Page (Review discount)
        -Complete the transaction

    2. As a user already registered and already created an identifier
        -Login
        -Go to destination information (Test with cash pickup and bank deposit)
        -Go to Recipient information
        -Go to Recipient bank Account
        -Go to Funding Information (test with bank account and cards: credit and debit)
        -Go to review page (review discount based in the identifier)
        -Complete the transaction

     3. As a user already registered but without create the identifier
        -Login
        -Go to profile settings
        -Create a new identifier
        -Go to destination screen (Test with cash pickup and bank deposit)
        -Go to Recipient information
        -Go to Recipient bank Account
        -Go to Funding Information (test with bank account and cards: credit and debit)
        -Go to review page (review discount based in the identifier)
        -Complete the transaction
     */

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
    }

    @AfterClass
    public void finish() {
        //Start.driver.quit();
    }

    @Test (enabled = true, priority = 0)
    public void FillSendMoneyAsaGuest() throws Exception {
        HomePage.Goto("sendmoney");
        String randomCountry = Utility.getDestinationCountry();
        Send_DestinationPage.selectCountry(randomCountry);
        Send_DestinationPage.howMoneyRecieved("BankDeposit");
        Send_DestinationPage.chooseBank();
        Assert.assertNotNull(Send_DestinationPage.exchangerate);
        Send_DestinationPage.selectamounttoSend();
        Send_DestinationPage.goandcontinue();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipient"));
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
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("bankdeposit"));
        Send_BankdepositPage.Completeaccountname();
        Send_BankdepositPage.Completeaccountnumber();
        Send_BankdepositPage.selectaccounttype();
        //Send_BankdepositPage.goandcontinue();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("fast-send/funding"));
        Send_FundingPage.selectaccount("bankaccount");
        Send_FundingPage.continuebutton();
        Send_FundingPage.addbankholdername();
        Send_FundingPage.addbanknickname();
        Send_FundingPage.addroutingnumber();
        Send_FundingPage.addnumber();
        Send_FundingPage.selecttype();
        //Send_FundingPage.continuebutton();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("account/pre-register"));

}

    @Test (enabled = true, priority = 1)
    public void FillSendMoneywithLogin() throws Exception {
        HomePage.Goto("login");
        LoginPage.typeemail("laura.alvarez@talosdigital.com");
        LoginPage.typepassword("Laura123");
        LoginPage.clicklogin();
        HomePage.Goto("sendmoney");
        String randomCountry = Utility.getDestinationCountry();
        Send_DestinationPage.selectCountry(randomCountry);
        Send_DestinationPage.howMoneyRecieved("BankDeposit");
        Send_DestinationPage.chooseBank();
        Assert.assertNotNull(Send_DestinationPage.exchangerate);
        Send_DestinationPage.selectamounttoSend();
        Send_DestinationPage.goandcontinue();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipient"));
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
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("bankdeposit"));
        Send_BankdepositPage.Completeaccountname();
        Send_BankdepositPage.Completeaccountnumber();
        Send_BankdepositPage.selectaccounttype();
        //Send_BankdepositPage.goandcontinue();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("funding"));
        Send_FundingPage.selectaccount("bankaccount");
        Send_FundingPage.continuebutton();
        Send_FundingPage.addbankholdername();
        Send_FundingPage.addbanknickname();
        Send_FundingPage.addroutingnumber();
        Send_FundingPage.addnumber();
        Send_FundingPage.selecttype();
        Send_FundingPage.setClosepopup();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("review"));
        Send_ReviewPage.sendmoneybutton();
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("confirmation"));

    }


}

