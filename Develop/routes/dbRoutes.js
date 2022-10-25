const express = require("express");

const db = require("../db/db.json");

const app = express();

app.use("/db", db);

module.exports = app;
