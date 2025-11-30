import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin} from '@badeball/cypress-cucumber-preprocessor/esbuild'

export default defineConfig({
  e2e: {
    baseUrl: "https://conduit.bondaracademy.com",
    specPattern: "cypress/e2e/**/*.feature",
    
    // Screenshot configuration
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    
    // Video configuration
    video: true,
    videoCompression: 32,
    videosFolder: 'cypress/videos',

   // Reporter configuration
    reporter: 'spec',

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );

      // Screenshot logging
      on('after:screenshot', (details) => {
        console.log('Screenshot captured:', details.path);
      });
      return config;
    },
    env: {
      TAGS: ""
    }
  }
});
