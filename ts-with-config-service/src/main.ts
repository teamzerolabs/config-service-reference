console.log(
  "Hi, we will spin up a little server that loads books from a local database"
);

import config from "./config";
import { Book } from "./models";

const express = require("express");
const app = express();

app.get("/books", async (req, res) => {
  res.json(await Book.findAll());
});

app.get("/books/:id", async (req, res) => {
  const bookId = req.params["id"];
  if (bookId === undefined) {
    return res.status(404).json({ message: `Book not found: ${bookId}` });
  }
  res.json(
    await Book.findOne({
      where: {
        id: bookId
      }
    })
  );
});

app.listen(config.app.port, () =>
  console.log(`Book Example app listening on port ${config.app.port}!`)
);
