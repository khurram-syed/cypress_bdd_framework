import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

const login = new LoginPage();

Given("I navigate to the login page", () => {
  login.visit();
});

When("I enter login credentials", (dataTable) => {
  const credentials = dataTable.hashes();
  const username = credentials[0].username;
  const password = credentials[0].password;

  login.enterLoginCredentials(username,password);
});


Then("I should see the login error {string}", (msg) => {
  login.verifyError(msg);
});

Then("I should be logged in successfully", () => {
  login.verifyLoginSuccess();
});
