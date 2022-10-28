const router = require("express").Router();
const fs = require("fs");

const db = require("../db/db.json");

router.get("/notes", (req, res) => {
  fs.readFile("../db/db.json").then((data) => {
    const notes = JSON.parse(data);
    return res.json(notes);
  });
});
router.post("/notes", (req, res) => {
  fs.readFile("../db/db.json").then((data) => {
    const notes = JSON.parse(data);
    const newNote = req.body;
    db.create(newNote);
    saveNote().then((newNote) => {
      res.json(newNote);
      notes.push(newNote);
    });
  });
});

module.exports = router;
