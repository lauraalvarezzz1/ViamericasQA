package com.selenium.viamericas.tests.Steps;

import com.selenium.viamericas.pages.*;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Utility;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class SendMoneySteps {

    private static String randomCountry;
    private static boolean flag = false;

    @Given("^The user is Logged in$")
    public void theUserIsLoggedIn() throws Throwable {
        Assert.assertTrue(Start.driver.getPageSource().contains("My Account"));
    }

    @And("^I fill country Destination$")
    public void iFillCountryDestination() throws Throwable {
        TransactionHistoryPage.newTransactionButton();
        randomCountry = Utility.getDestinationCountry();
        Send_DestinationPage.selectCountry(randomCountry);
    }

    @And("^I Select Bank Deposit$")
    public void iSelectBankDeposit() throws Throwable {
        flag = Send_DestinationPage.howMoneyRecieved();

    }

    @And("^I Select The Bank$")
    public void iSelectTheBank() throws Throwable {
        Send_DestinationPage.chooseBank();

    }

    @And("^I enter the Amount$")
    public void iEnterTheAmount() throws Throwable {
        Send_DestinationPage.selectAmountToSend();

    }

    @When("^I Click Continue to Recipient$")
    public void iClickContinueToRecipient() throws Throwable {
        Send_DestinationPage.goandcontinue();

    }

    @Then("^I should see Recipient Page$")
    public void iShouldSeeRecipientPage() throws Throwable {
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipient"));
    }

    @Given("^The user passes Transaction Information$")
    public void theUserPassesTransactionInformation() throws Throwable {
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("recipient"));

    }

    @And("^Click add new recipient$")
    public void clickAddNewRecipient() throws Throwable {
        Send_RecipientPage.clickAddRecipient();

    }
    @And("^Fill Recipient Personal Information$")
    public void fillRecipientPersonalInformation() throws Throwable {
        Send_RecipientPage.firstName();
        Send_RecipientPage.lastName();
        Send_RecipientPage.middleName();
        Send_RecipientPage.secondLastName();
        Send_RecipientPage.addBirthday();
    }

    @And("^Fill Recipient Address Information$")
    public void fillRecipientAddressInformation() throws Throwable {
        Send_RecipientPage.address();
        Send_RecipientPage.moreAdress();
        Send_RecipientPage.selectstate();
        Send_RecipientPage.selectcity();
        Send_RecipientPage.emailaddress();
        Send_RecipientPage.completephonenumber(randomCountry);
    }

    @And("^Fill Recipient Bank Account$")
    public void fillRecipientBankAccount() throws Throwable {
        if (flag){
            Send_RecipientPage.accountNickname();
            Send_RecipientPage.accountNumber();
            Send_RecipientPage.accountType();
        }

    }

    @When("^I Click continue to Payment$")
    public void iClickContinueToPayment() throws Throwable {
        Send_RecipientPage.continuebutton();

    }

    @Then("^I should see payment page$")
    public void iShouldSeePaymentPage() throws Throwable {
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("funding"));
    }
    @Given("^The user passes Recipient Page$")
    public void theUserPassesRecipientPage() throws Throwable {
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("funding"));

    }

    @And("^Verify if the user has accounts and Select Saved or Create Credit/debit card$")
    public void verifyIfTheUserHasAccountsAndSelectSavedOrCreateCreditDebitCard() throws Throwable {
        int n = 0;
        if (Send_FundingPage.selectaccount()) {
            Send_FundingPage.selectSavedBankAccount();
            Thread.sleep(3000);
        } else {
            n = Utility.getRandomNumber(10);
            if (n < 5) {
                Send_FundingPage.selectCreditCard();
                Send_FundingPage.selectSavedDebitCards();
                Send_FundingPage.cardNickName();
                Send_FundingPage.cardNumber();
                Send_FundingPage.selectmonth();
                Send_FundingPage.selectyear();
                Send_FundingPage.addcvvcode();
            } else {
                Send_FundingPage.selectDebitCard();
                Send_FundingPage.selectSavedDebitCards();
                Send_FundingPage.cardNickName();
                Send_FundingPage.cardNumber();
                Send_FundingPage.selectmonth();
                Send_FundingPage.selectyear();
                Send_FundingPage.addcvvcode();
            }
            Thread.sleep(3000);
        }
    }

    @And("^I click Continue to Review Page$")
    public void iClickContinueToReviewPage() throws Throwable {
        Send_FundingPage.continuebutton();
    }

    @Then("^I should se Review Page$")
    public void iShouldSeReviewPage() throws Throwable {
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("review"));
    }

    @Given("^The User passes Payment page$")
    public void theUserPassesPaymentPage() throws Throwable {
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("review"));

    }

    @When("^The user Clicks on Finish Transaction Button$")
    public void theUserClicksOnFinishTransactionButton() throws Throwable {
        Send_ReviewPage.sendmoneybutton();
        Thread.sleep(3000);
    }

    @Then("^The User should see Confirmation Page$")
    public void theUserShouldSeeConfirmationPage() throws Throwable {
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("confirmation"));
    }
}
