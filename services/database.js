const fs = require("fs");

const saveJSON = (path, payload) => {
  let data = JSON.stringify(payload, null, 2);

  fs.writeFile(path, data, (err) => {
    if (err) throw err;
    console.log(`Data written to ${path}`);
  });
};

module.exports = { saveJSON };
