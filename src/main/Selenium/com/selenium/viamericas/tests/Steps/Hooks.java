package com.selenium.viamericas.tests.Steps;

import com.selenium.viamericas.pages.LoginPage;
import com.selenium.viamericas.utility.Start;
import com.selenium.viamericas.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.After;
import org.testng.annotations.BeforeTest;


public class Hooks {
    private static boolean initialized = false;
    @Before
    public void InitializeTest(Scenario scn) throws Throwable{
        if (!initialized){
            if (scn.getName().equalsIgnoreCase("Login")){
                Start.initiate("test");
                initialized= false;
            }
            else{
                initialized = true;
                Start.initiate("test");
                LoginPage.clicklogin();
                LoginPage.login(Utility.getProperty("test.acc"), Utility.getProperty("test.pass"));
            }
        }
    }

    @After
    public void TearDownTests(Scenario scn){
        if (scn.getName().equalsIgnoreCase("Login") ||
                scn.getName().equalsIgnoreCase("Login")){
            Start.driver.quit();
        }
        else{

        }


    }


}
