@articles
Feature: 1-Articles in Signed-out state

  @smoke
  Scenario: 11-Verify First Article in Signed-out state
    Given I navigate to the Conduit home page
    And I should see the user is logged out
    When I click on the first article
    Then I should see the article name "Discover Bondar Academy:"
    And I should see the tag "QA Skills"
