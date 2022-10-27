const router = require("express").Router();

const db = require("../../db/db.json");

router.get("/api/notes", (req, res) => {
  getNotes().then((notes) => {
    res.json(notes);
  });
});

router.post("/api/notes", async (req, res) => {
  saveNote().then((note) => {
    res.json(note);
  });
});
module.exports = router;
