module.exports = {
  collectCoverage: true,
  projects: [
    {
      displayName: "test",
      preset: "ts-jest",
      testPathIgnorePatterns: ["/node_modules/", "/dist/"]
    },
    {
      displayName: "lint:prettier",
      preset: "jest-runner-prettier",
      testPathIgnorePatterns: ["/node_modules/", "/coverage/", "/dist/"]
    }
  ]
};
