class NewArticlePage {
  
    visit() {
        cy.contains("New Article").click();
    }

    /**
     * To create new articles with data table object as a rowsHash
     * @param {data} object => { Title, Description, Body, Tags }
     */
    createNewArticle({ Title, Description, Body, Tags }) {
        cy.get('input[placeholder="Article Title"]').clear().type(Title);
        cy.get('input[placeholder="What\'s this article about?"]').clear().type(Description);
        cy.get('textarea[placeholder="Write your article (in markdown)"]').clear().type(Body);
        cy.get('input[placeholder="Enter tags"]').clear().type(Tags + "{enter}");
        cy.contains("Publish Article").click();
    }
}

export default NewArticlePage;
