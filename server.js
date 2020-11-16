require("dotenv").config();
const express = require("express");
const { connect } = require("./lib/database");
const {
  getPassword,
  deletePasswordByName,
  setPassword,
} = require("./lib/passwords");

const app = express();
app.use(express.json());
const port = 3600;

app.get("/api/passwords/:name", async (request, response) => {
  const { name } = request.params;
  try {
    const passwordValue = await getPassword(name);
    if (!passwordValue) {
      response
        .status(404)
        .send("Could not find the password you have specified");
      return;
    }
    response.send(`Your password is ${passwordValue}`);
  } catch (error) {
    console.log(error);
    response.status(500).send("An internal server error occured");
  }
});

app.post("/api/passwords", async (request, response) => {
  const password = request.body;

  try {
    await setPassword(password.name, password.value);
    response.send(`Successfully set ${password.name}`);
  } catch (error) {
    response.status(500).send("An unexpected error occured.");
  }
});

app.delete("/api/passwords/:name", async (request, response) => {
  try {
    const { name } = request.params;
    const result = await deletePasswordByName(name);
    if (result.deletedCount === 0) {
      return response.status(404).send("Couldnt find password)");
    }
    response.send(`Your password ${name} is deleted`);
  } catch (error) {
    console.error(error);
    response.status(500).send("Unexpected error");
  }
});

async function run() {
  console.log("Connection to database...");
  await connect(process.env.DB_URL, process.env.DB_NAME);
  console.log("Connectet to database!");

  app.listen(port, () => {
    console.log(`PW4U API listening at http://localhost:${port}`);
  });
}

run();
