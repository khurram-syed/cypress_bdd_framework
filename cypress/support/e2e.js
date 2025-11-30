// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands.js';

// Global before hook
before(() => {
  cy.log('🚀 Starting test suite execution');
});

// Before each test
beforeEach(function() {
  // Log test name
  cy.log(`▶️  Running: ${this.currentTest.title}`);
  
  // Clear cookies and local storage for clean state
  cy.clearCookies();
  cy.clearLocalStorage();
});

// After each test - capture screenshot on failure
afterEach(function() {
  if (this.currentTest.state === 'failed') {
    const testName = this.currentTest.title.replace(/[^a-zA-Z0-9]/g, '_');
    const featureName = this.currentTest.parent.title.replace(/[^a-zA-Z0-9]/g, '_');
    const timestamp = new Date().getTime();
    
    cy.screenshot(`${featureName}--${testName}--${timestamp}`, {
      capture: 'fullPage',
      overwrite: true
    });
    
    cy.log(`❌ Test Failed: Screenshot captured`);
  } else {
    cy.log(`✅ Test Passed`);
  }
});

// Global after hook
after(() => {
  cy.log('🏁 Test suite execution completed');
});

// Handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  // Only for specific errors you want to ignore
  console.error('Uncaught exception:', err.message);
  
  // Don't fail tests on certain errors
  if (err.message.includes('ResizeObserver') || 
      err.message.includes('Script error')) {
    return false;
  }
  
  return true;
});

// Take screenshot on test failure (additional handler)
Cypress.on('fail', (error, runnable) => {
  cy.screenshot('FAILURE', { capture: 'fullPage' });
  throw error;
});