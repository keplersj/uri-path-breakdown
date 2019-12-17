const path = require("path");

module.exports = function(config) {
  config.set({
    mutate: ["src/**/*.ts", "!src/**/*@(.test|.spec|Spec).ts?(x)"],
    mutator: "typescript",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    coverageAnalysis: "off",
    jest: {
      projectType: "custom",
      // Only use the unit test project
      config: require(path.resolve(__dirname, "./jest.config.js")).projects[0],
      enableFindRelatedTests: true
    }
  });
};
