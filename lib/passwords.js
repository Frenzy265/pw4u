const CryptoJS = require("crypto-js");
const { collection } = require("./database");
const { readMasterPassword } = require("../lib/masterPassword");

async function findPasswordByName(passwordName) {
  const passwordObject = await collection("passwords").findOne({
    name: passwordName,
  });
  return passwordObject;
}

async function deletePasswordByName(deletePassword) {
  await collection("passwords").deleteOne({
    name: deletePassword,
  });
}

async function updatePasswordByName(passwordName, passwordValue) {
  await collection("passwords").updateOne(
    {
      name: passwordName,
    },
    {
      $set: {
        value: passwordValue,
      },
    }
  );
}

async function getPassword(passwordName) {
  const passwordObject = await findPasswordByName(passwordName);
  const passwordValue = passwordObject.value;
  const passwordBytes = CryptoJS.AES.decrypt(
    passwordValue,
    await readMasterPassword()
  );
  return passwordBytes.toString(CryptoJS.enc.Utf8);
}

async function setPassword(newPasswordName, newPasswordValue) {
  const encryptedValue = CryptoJS.AES.encrypt(
    newPasswordValue,
    await readMasterPassword()
  ).toString();
  await collection("passwords").insertOne({
    name: newPasswordName,
    value: encryptedValue,
  });
}

exports.getPassword = getPassword;
exports.setPassword = setPassword;
exports.deletePasswordByName = deletePasswordByName;
exports.updatePasswordByName = updatePasswordByName;
