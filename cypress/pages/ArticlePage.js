class ArticlePage {
 
/**
 * To Check Article Title
 * @param {string} title 
 */
  verifyArticleTitle(title) {
    cy.get("h1").should("contain", title);
  }

  /**
   * To Check the tag
   * @param {string} tag 
   */
  verifyTag(tag) {
    cy.get(".tag-pill").should("contain", tag);
  }
}

export default ArticlePage;
