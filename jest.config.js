module.exports = {
  preset: 'ts-jest',
    "transform": {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
    "^.+\\.ts$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  "moduleFileExtensions": [
    "js",
    "ts",
    "svelte"
  ],
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
}