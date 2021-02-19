const path = require("path");
const JSONpackage = require("../package.json");

const aliasConfig = (dir) => {
  const aliasList = {};
  Object.keys(JSONpackage.alias).forEach((key) => {
    aliasList[key] = path.resolve(dir, JSONpackage.alias[key]);
  });
  return aliasList;
};

module.exports = aliasConfig;
