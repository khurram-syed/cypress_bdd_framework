import report from 'multiple-cucumber-html-reporter';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Check if cucumber json report exists
const cucumberJsonPath = join(__dirname, 'cypress/reports/cucumber-json/cucumber-report.json');

if (!fs.existsSync(cucumberJsonPath)) {
  console.log('⚠️  No Cucumber JSON report found. Skipping HTML report generation.');
  console.log('Please run tests first: npm run cy:run');
  process.exit(0);
}

// Read package.json
const packageJson = JSON.parse(
  readFileSync(join(__dirname, 'package.json'), 'utf-8')
);

// Generate report
report.generate({
  jsonDir: 'cypress/reports/cucumber-json',
  reportPath: 'cypress/reports/cucumber-html',
  reportName: 'Cypress BDD Cucumber Report',
  pageTitle: 'Conduit Test Automation Report',
  displayDuration: true,
  displayReportTime: true,
  durationInMS: true,
  
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local Test Machine',
    platform: {
      name: process.platform,
      version: process.version
    }
  },
  
  customData: {
    title: 'Test Run Information',
    data: [
      { label: 'Project', value: packageJson.name },
      { label: 'Version', value: packageJson.version },
      { label: 'Author', value: packageJson.author },
      { label: 'Execution Date', value: new Date().toLocaleString() },
      { label: 'Environment', value: 'https://conduit.bondaracademy.com' },
      { label: 'Test Type', value: 'BDD Cucumber Tests' }
    ]
  },
  
  // Customize styling
  customStyle: '',
  overrideStyle: '',
  
  // Display options
  openReportInBrowser: false,
  saveCollectedJSON: true,
  disableLog: false,
  pageFooter: '<div><p>Automated by Cypress BDD Framework</p></div>',
});

console.log('✅ Cucumber HTML report generated successfully!');
console.log('📊 Report location: cypress/reports/cucumber-html/index.html');