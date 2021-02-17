module.exports = {
    plugins: ["@snowpack/plugin-dotenv"],
    packageOptions: {
        source: 'remote'
    },
    devOptions: {
        port: 3000,
    }
}