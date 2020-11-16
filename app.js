require("dotenv").config();
const {
  setPassword,
  getPassword,
  deletePasswordByName,
} = require("./lib/passwords");
const {
  askForMasterPassword,
  askForNext,
  newPassword,
  readPassword,
  passwordToDelete,
} = require("./lib/questions");
const { isMasterPasswordCorrect } = require("./lib/validation");
const { connect, close } = require("./lib/database");

async function run() {
  console.log("Connection to database...");
  await connect(process.env.DB_URL, process.env.DB_NAME);
  console.log("Connectet to database!");

  const masterPassword = await askForMasterPassword();

  if (!(await isMasterPasswordCorrect(masterPassword))) {
    console.error("You are not welcome here! 👿 Try again!");
    return run();
  }

  const nextToDo = await askForNext();
  console.log(nextToDo);

  if (nextToDo === "set") {
    const [newPasswordName, newPasswordValue] = await newPassword();
    await setPassword(newPasswordName, newPasswordValue);
    console.log(`Password ${newPasswordName} set 🎉`);
  }

  if (nextToDo === "read") {
    const passwordName = await readPassword();
    const passwordValue = await getPassword(passwordName);
    console.log(`Your password is ${passwordValue} 🎉`);
  }

  if (nextToDo === "delete") {
    const deletedPassword = await passwordToDelete();
    await deletePasswordByName(deletedPassword);
    console.log(`Your password ${deletedPassword} is deleted`);
  }

  if (nextToDo === "update") {
    console.log("work in progress");
  }

  // masterpassword in dotenv

  await close();
}

run();
