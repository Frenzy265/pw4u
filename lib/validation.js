const { readMasterPassword } = require("../lib/masterPassword");

async function isMasterPasswordCorrect(masterPassword) {
  return masterPassword === (await readMasterPassword());
}

exports.isMasterPasswordCorrect = isMasterPasswordCorrect;
