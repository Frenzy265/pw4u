require("dotenv").config();
const express = require("express");
const { connect } = require("./lib/database");
const { getPassword, deletePasswordByName } = require("./lib/passwords");

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

app.post("/api/passwords", (request, response) => {
  response.send("under construction");
});

app.delete("/api/passwords/:name", async (request, response) => {
  const { name } = request.params;
  await deletePasswordByName(name);
  response.send(`Your password ${name} is deleted`);
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
