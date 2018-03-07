Feature: LoginFeature
  This feature deals with Login of the App

  Scenario Outline: Login
    Given I open Browser to test Environment
    And I click login
    And I enter <username> and <password>
    Then I should see the userForm page
    Examples:
      | username                                | password   |
      | esneider.gaviria@talosdigital.com       | Test4echo |
      | esneider.gaviria_1@talosdigital.com     | Test4echo |
