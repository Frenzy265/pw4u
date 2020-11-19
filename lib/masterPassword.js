const fs = require("fs").promises;

async function readMasterPassword() {
  return procecc.env.MASTER_PASSWORD;
}

exports.readMasterPassword = readMasterPassword;
