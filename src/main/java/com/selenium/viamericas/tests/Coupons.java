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
        Start.driver.quit();
    }


}
