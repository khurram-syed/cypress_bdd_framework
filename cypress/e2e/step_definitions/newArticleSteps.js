import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';
import NewArticlePage from '../../pages/NewArticlePage';
import ArticlePage from '../../pages/ArticlePage';

const login = new LoginPage();
const newArticle = new NewArticlePage();
const article = new ArticlePage();

Given("I am logged in with valid credentials", () => {
    //login.visit()
    cy.login();
})

When("I navigate to the New Article page", () => {
  newArticle.visit();
});

When("I create the new article with the following details", (dataTable) => {
  const data = dataTable.rowsHash();
  newArticle.createNewArticle(data);
});

Then("I should see the article page with title {string}", (title) => {
   article.verifyArticleTitle(title);
});