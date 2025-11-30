Feature: 2-Login functionality

  Scenario: 21-Check for invalid login
    Given I navigate to the login page
    When I enter login credentials
      | username              | password |
      | emailkasyed@gmail.com |    11111 |
    Then I should see the login error "email or password is invalid"

  Scenario: 22-Check for valid login
    Given I navigate to the login page
    When I enter login credentials
      | username              | password |
      | emailkasyed@gmail.com | 12345678 |
    Then I should be logged in successfully
