package com.selenium.viamericas.tests.Steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import com.selenium.viamericas.pages.*;
import com.selenium.viamericas.utility.Start;
import org.testng.Assert;

public class LoginSteps {

    @Given("^I open Browser to test Environment$")
    public void iOpenBrowserToTestEnvironment() throws Throwable {
        Thread.sleep(3000);
    }

    @And("^I enter the following in Login$")
    public void iEnterTheFollowingInLogin(DataTable table) throws Throwable {

    }

    @And("^I click login$")
    public void iClickLogin() throws Throwable {
        LoginPage.clicklogin();
    }

    @Then("^I should see the userForm page$")
    public void iShouldSeeTheUserFormPage() throws Throwable {
        Thread.sleep(3000);
        Assert.assertTrue(Start.driver.getCurrentUrl().contains("transaction") || Start.driver.getCurrentUrl().contains("sendmoney/destination"));

    }

    @And("^I enter ([^\"]*) and ([^\"]*)$")
    public void iEnterUsernameAndPassword(String username, String password) throws Throwable {
        LoginPage.login(username, password);
    }


}


