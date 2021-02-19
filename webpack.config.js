const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const aliasConfig = require("./utils/alias");

module.exports = {
  entry: {
    index: path.join(__dirname, "src/index.jsx"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
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
          {
            loader:
              "/Users/muhammadalfaris/Work/Personal/boilerplate/react-snowpack3/node_modules/.pnpm/registry.npmjs.org/@snowpack/plugin-webpack/2.3.0/node_modules/@snowpack/plugin-webpack/plugins/import-meta-fix.js",
          },
          {
            loader:
              "/Users/muhammadalfaris/Work/Personal/boilerplate/react-snowpack3/node_modules/.pnpm/registry.npmjs.org/@snowpack/plugin-webpack/2.3.0/node_modules/@snowpack/plugin-webpack/plugins/proxy-import-resolve.js",
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /.*/,
        exclude: [/\.(js|jsx)$/, /\.json?$/, /\.(sa|sc|c)ss$/],
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: aliasConfig(__dirname),
  },
};
