const path = require("path");

module.exports = {
  entry: {
    index: path.join(__dirname, "src/index.jsx"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        options: {
          configFile: false,
          babelrc: false,
          compact: true,
          presets: [
            "@babel/preset-react",
            [
              "@babel/preset-env",
              {
                targets:
                  ">0.75%, not ie 11, not UCAndroid >0, not OperaMini all",
                bugfixes: true,
                modules: false,
                useBuiltIns: "usage",
                corejs: 3,
              },
            ],
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
