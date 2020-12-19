import { addPerson, getPersons } from "./db.mjs";

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World Bilal!");
});

app.get("/person", async (req, res) => {
  let persons = await getPersons();
  res.send(persons);
});

app.post("/person", async (req, res) => {
  console.log(req);
  let persons = await addPerson(req.body.name);
  res.send(persons);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
