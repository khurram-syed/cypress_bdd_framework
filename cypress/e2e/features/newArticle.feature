@newArticle
Feature: 3-Add new articles

  Scenario: 31-Create a new Article
    Given I am logged in with valid credentials
    When I navigate to the New Article page
    And I create the new article with the following details
      | Field       | Value                                         |
      | Title       | New Article                                   |
      | Description | This is a new article                         |
      | Body        | This is to test the cypress testing framework |
      | Tags        | QACypress                                     |
    Then I should see the article page with title "New Article"
