class HomePage {
    visit() {
        cy.visit('/');
    }

    verifyLoggedOut(){
        cy.contains("Sign in").should("be.visible");
        cy.contains("Sign up").should("be.visible");
    }

    clickFirstArticle() {
        cy.get("a.preview-link").first().click();
    }
}
export default HomePage