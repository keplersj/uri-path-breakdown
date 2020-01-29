const testPathIgnorePatterns = ["/node_modules/", "/coverage/", "/dist/"];

module.exports = {
  collectCoverage: true,
  projects: [
    {
      displayName: "test",
      preset: "ts-jest",
      testPathIgnorePatterns
    },
    {
      displayName: "lint:prettier",
      preset: "jest-runner-prettier",
      testPathIgnorePatterns
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      testMatch: [
        "<rootDir>/**/*.ts",
        "<rootDir>/**/*.tsx",
        "<rootDir>/**/*.js"
      ],
      testPathIgnorePatterns
    }
  ]
};
