import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin} from '@badeball/cypress-cucumber-preprocessor/esbuild'

export default defineConfig({
  e2e: {
    baseUrl: "https://conduit.bondaracademy.com",
    specPattern: "cypress/e2e/**/*.feature",
    video: false,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );
      return config;
    },
    env: {
      TAGS: ""
    }
  }
});
