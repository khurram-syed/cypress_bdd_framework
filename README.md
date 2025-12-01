# Cypress BDD POM Framework

> A complete **Cypress + Cucumber (BDD) + Page Object Model (POM)** automation framework for scalable end-to-end UI testing.

## 🧪 Table of Contents

* About the Project
* Tech Stack
* Project Structure
* Getting Started

  * Prerequisites
  * Installation
* Scripts (from package.json)
* Running Tests
* BDD Workflow
* Reporting

---

## About the Project

This repository demonstrates a maintainable UI automation framework using:

* **Cypress** for browser automation
* **Cucumber (Gherkin)** for BDD-style scenarios
* **Page Object Model (POM)** for clean UI interaction separation
* **Multiple HTML reporting** via multiple-cucumber-html-reporter

The framework supports **tag-based execution**, **parallel test running (via Cypress)**, and **automatic report generation**.

---

## Tech Stack

* Cypress ^15.7.0
* Cucumber BDD (`@badeball/cypress-cucumber-preprocessor`)
* ESBuild for fast bundling
* Multiple Cucumber HTML Reporter
* Node.js (ESM enabled)

---

## Project Structure

```
/ (root)
│   package.json
│   cypress.config.js        # Cypress config with BDD setup
│   generate-cucumber-report.js
│
├── cypress/
│   ├── e2e/                 # Feature files (BDD)
│   │   └── *.feature
│   ├── pages/               # Page Object classes
│   ├── support/             # Custom commands, hooks
│   ├── fixtures/            # Test data
│   ├── reports/             # Auto-generated reports
│   ├── videos/              # Cypress video recordings
│   └── screenshots/         # Screenshots on failure
│
└── .github/workflows/       # (optional) CI pipeline
```

---

## Getting Started

### Prerequisites

* Node.js (LTS recommended)
* npm

### Installation

```bash
git clone https://github.com/khurram-syed/cypress_bdd_framework.git
cd cypress_bdd_framework
npm install
```

---

## Scripts (from package.json)

The framework includes multiple useful commands:

### 🚀 Open Cypress Test Runner

```bash
npm run cy:open
```

### ▶ Run All Tests (Headless)

```bash
npm run cy:run
```

### 🔥 Tagged Runs

```bash
npm run cy:run:smoke
npm run cy:run:login
npm run cy:run:articles
npm run cy:run:newArticle
```

### 🧪 CI Mode (Chrome Headless)

```bash
npm run test:ci
```

### 🖥 Headed Mode

```bash
npm run test:headed
```

### 🧹 Clean Reports

```bash
npm run clean:reports
```

### 📊 Run Tests + Generate Report

```bash
npm run test:report
```

### 🧪 Run All → Clean → Execute → Report

```bash
npm run test:all
```

---

## Running Tests

### Run a specific feature file

```
npx cypress run --spec "cypress/e2e/login.feature"
```

### Run with multiple tags

```
npx cypress run --env TAGS='@login or @smoke'
```

---

## BDD Workflow

```
Feature File (.feature)
    ↓
Step Definition (.js/.ts under e2e folder)
    ↓
Page Objects (cypress/pages)
    ↓
Cypress Actions & Assertions
```

### Example Feature

```gherkin
Feature: Login
  @login
  Scenario: Validate Successful Login
    Given I open the login page
    When I enter valid credentials
    Then I should see the user dashboard successfully
```

---

## Reporting

This framework uses **multiple-cucumber-html-reporter**.

After running:

```bash
npm run report:cucumber
```

A detailed report is generated under:

```
cypress/reports/html
```

Includes:

* Scenario & step results
* Tags
* Screenshots on failure
* Execution duration
* Test metadata

<img width="1825" height="800" alt="image" src="https://github.com/user-attachments/assets/35fac066-a541-427a-8fff-aef49d71dff6" />

