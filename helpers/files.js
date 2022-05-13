const fs = require('fs');

const getJsonFromFile = async filePath => {
  const file = await fs.promises.readFile(filePath);
  console.log(JSON.parse(file));
  return JSON.parse(file);
};

module.exports = {
  getJsonFromFile,
};
