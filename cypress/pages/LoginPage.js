class LoginPage {
    visit(){
        cy.visit('/login')
    }
    /**
     * To fill-in the login
     * @param {string} username 
     * @param {string} password 
     */
    enterLoginCredentials(username,password){
        cy.get("input[placeholder='Email']").clear().type(username);
        cy.get("input[placeholder='Password']").clear().type(password);
        cy.get("button[type='submit']").click();
    }

    /**
     * To check the error message for invalid login credentials
     * @param {string} errorMsg 
     */
    verifyError(errorMsg){
        cy.contains(errorMsg).should("be.visible");
    }

    /**
     * To check successful Login
     */
    verifyLoginSuccess(){
        cy.contains("New Article").should("be.visible");
    }
}
export default LoginPage;