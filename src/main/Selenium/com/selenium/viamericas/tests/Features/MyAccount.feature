Feature: My Account

  Scenario: Profile Information
    Given The user is Logged in
    And The User click on My Account
    And The User edits Personal Information
    And The user edits Address Information
    When The user Clicks Update
    Then THe user should see Confirmation Pop up


    Scenario: Change Password
      Given The user is Logged in
      And The user Clicks on My account
      And The user clicks on change Password
      And The user types the current password
      And The user clicks Continue to confirm password
      And the user Types the Confirm password
      When the user clicks continue
      Then the User changes the password

      Scenario: Add new Recipient
        Given The user is Logged in
        And The user Clicks on My account
        And The user clicks on Recipients
