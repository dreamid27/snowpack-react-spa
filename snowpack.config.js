// const webpackConfig = require("./webpack.config");
const aliasConfig = require("./utils/alias");

module.exports = {
  plugins: [
    "@snowpack/plugin-dotenv",
    "snowpack-sass-compiler",
    [
      "@snowpack/plugin-webpack",
      {
        sourceMap: true,
        //   extendConfig: (config) => {
        //     const finalConfig = config;
        //     const rulesList = config.module.rules;

        //     rulesList[0].test = /\.(js|jsx)$/;
        //     rulesList[0].use[0].options = {
        //       configFile: false,
        //       babelrc: false,
        //       compact: true,
        //       presets: [
        //         "@babel/preset-react",
        //         [
        //           "@babel/preset-env",
        //           {
        //             targets:
        //               ">0.75%, not ie 11, not UCAndroid >0, not OperaMini all",
        //             bugfixes: true,
        //             modules: false,
        //             useBuiltIns: "usage",
        //             corejs: 3,
        //           },
        //         ],
        //       ],
        //     };

        //     rulesList[1] = webpackConfig.module.rules[1];
        //     rulesList[3].exclude = [/\.(js|jsx)?$/, /\.json?$/, /\.(sa|sc|c)ss$/];

        //     finalConfig.module.rules = rulesList;

        //     finalConfig.entry = webpackConfig.entry;
        //     finalConfig.resolve = webpackConfig.resolve;

        //     return finalConfig;
        //   },
      },
    ],
  ],
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
  devOptions: {
    port: 3000,
  },
  mount: {
    src: "/",
    public: "/",
  },
  alias: aliasConfig(__dirname),
};
