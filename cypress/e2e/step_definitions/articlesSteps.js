import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";    
import ArticlePage from "../../pages/ArticlePage";
import HomePage from '../../pages/HomePage'


const home = new HomePage()
const article = new ArticlePage()

Given("I navigate to the Conduit home page",()=> {
  home.visit()
})

Given("I should see the user is logged out", () => {
  home.verifyLoggedOut();
});

When("I click on the first article", () => {
  home.clickFirstArticle();
});

Then("I should see the article name {string}", (title) => {
   article.verifyArticleTitle(title);
});

Then("I should see the tag {string}", (tag) => {
   article.verifyTag(tag);
});