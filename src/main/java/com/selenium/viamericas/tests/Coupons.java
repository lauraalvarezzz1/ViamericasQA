package com.selenium.viamericas.tests;
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

    @BeforeClass
    public void start() throws Exception {
        Start.initiate("test");
    }

    @AfterClass
    public void finish() {
        Start.driver.quit();
    }


}
