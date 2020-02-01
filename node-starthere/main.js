console.log(
  "Hi, we will spin up a little server that loads books from a local database"
);

const models = require("./models");

const express = require("express");
const app = express();
const port = 3000;

app.get("/books", async (req, res) => {
  res.json(await models.Book.findAll());
});

app.listen(port, () =>
  console.log(`Book Example app listening on port ${port}!`)
);
