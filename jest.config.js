module.exports = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: [],
  setupFilesAfterEnv: ["./jest.setup.js"],
  transformIgnorePatterns: [
    `node_modules/(?!${[
      "(jest-)?react-native",
      "@react-native",
      "@react-native-community",
      "@react-navigation",
      "@react-navigation/.*",
      "@react-hook/.*",
      "expo(nent)?",
      "@expo(nent)?/.*",
      "@expo-google-fonts/.*",
      "@unimodules/.*",
      "unimodules",
      "react-native-svg",
      "ky",
    ].join("|")})`,
  ],
};
