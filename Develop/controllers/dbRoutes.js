const router = require("express").Router();

const db = require("../db/db.json");

router.get("/notes", (req, res) => {
  db.getNotes().then((notes) => {
    return res.json(notes);
  });
});

router.post("/notes", (req, res) => {
  let newNote = req.body;
  db.push(newNote);
  saveNote().then((note) => {
    return res.json(note);
  });
});

router.delete("/notes/:id", (req, res) => {
  db.splice(req.params.id, 1);
  updateDb();
  console.log("Deleted note with id " + req.params.id);
  res.json("Note has been deleted!");
});
module.exports = router;
