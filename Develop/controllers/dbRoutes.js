const router = require("express").Router();

const db = require("../db/db.json");

router.get("/notes", (req, res) => {
  getNotes().then((notes) => {
    res.json(notes);
  });
});

router.post("/", async (req, res) => {
  saveNote().then((note) => {
    res.json(note);
  });
});
module.exports = router;
