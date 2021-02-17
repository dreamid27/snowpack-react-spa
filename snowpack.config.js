module.exports = {
  plugins: ["@snowpack/plugin-dotenv"],
  // packageOptions: {
  //   source: 'remote',
  // },
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
  devOptions: {
    port: 3000,
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2017",
  },
  mount: {
    src: "/",
    public: "/",
  },
};
