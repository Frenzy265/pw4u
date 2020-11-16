const fs = require("fs").promises;

async function readMasterPassword() {
  return await fs.readFile("./.masterpassword", "utf8");
}

exports.readMasterPassword = readMasterPassword;
