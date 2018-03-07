Feature: Send Money Flow

  Scenario: Fill Transaction Information
    Given The user is Logged in
    And I fill country Destination
    And I Select Bank Deposit
    And I Select The Bank
    And I enter the Amount
    When I Click Continue to Recipient
    Then I should see Recipient Page

  Scenario: Fill Recipient Information
    Given The user passes Transaction Information
    And Click add new recipient
    And Fill Recipient Personal Information
    And Fill Recipient Address Information
    And Fill Recipient Bank Account
    When I Click continue to Payment
    Then I should see payment page

  Scenario: Fill Payment Page
    Given The user passes Recipient Page
    And Verify if the user has accounts and Select Saved or Create Credit/debit card
    And I click Continue to Review Page
    Then I should se Review Page

  Scenario: Finish Transaction
    Given The User passes Payment page
    When The user Clicks on Finish Transaction Button
    Then The User should see Confirmation Page



