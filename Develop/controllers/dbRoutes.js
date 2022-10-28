const router = require("express").Router();

const db = require("../db/db.json");

let notes = json.parse(data);

router.get("/notes", (req, res) => {
  res.json(notes);
});

router.post("/notes", (req, res) => {
  let newNote = req.body;
  notes.push(newNote);
  saveNote().then((note) => {
    res.json(note);
  });
});

router.delete("/notes/:id", (req, res) => {
  notes.splice(req.params.id, 1);
  updateDb();
  console.log("Deleted note with id " + req.params.id);
  res.json("Note has been deleted!");
});
module.exports = router;
