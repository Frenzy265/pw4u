const inquirer = require("inquirer");

async function askForMasterPassword() {
  const { masterPassword } = await inquirer.prompt([
    {
      type: "input",
      name: "masterPassword",
      message: "What is the super secret master password?",
    },
  ]);
  return masterPassword;
}

async function askForNext() {
  const { nextToDo } = await inquirer.prompt([
    {
      type: "list",
      name: "nextToDo",
      message: "What you want to do next?",
      choices: ["read", "set", "update", "delete"],
      filter: function (val) {
        return val.toLowerCase();
      },
    },
  ]);
  return nextToDo;
}

async function newPassword() {
  const { newPasswordName } = await inquirer.prompt([
    {
      type: "input",
      name: "newPasswordName",
      message: "Type your new password name",
    },
  ]);
  const { newPasswordValue } = await inquirer.prompt([
    {
      type: "input",
      name: "newPasswordValue",
      message: "Type your new password value",
    },
  ]);
  return [newPasswordName, newPasswordValue];
}

async function readPassword() {
  const { readPassword } = await inquirer.prompt([
    {
      type: "input",
      name: "readPassword",
      message: "Type the name of the password you want to read",
    },
  ]);
  return readPassword;
}

async function passwordToDelete() {
  const { deletePassword } = await inquirer.prompt([
    {
      type: "input",
      name: "deletePassword",
      message: "Which password you want to delete?",
    },
  ]);
  return deletePassword;
}

exports.askForMasterPassword = askForMasterPassword;
exports.askForNext = askForNext;
exports.newPassword = newPassword;
exports.readPassword = readPassword;
exports.passwordToDelete = passwordToDelete;
