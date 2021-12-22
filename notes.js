const fs = require("fs");
const { title } = require("process");

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (err) {
    notes = [];
  }
};

const addingNotes = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body,
  };
  notes.push(note);
  fs.writeFileSync("notes.txt", JSON.stringify(notes));
};

const removeNotes = (title) => {
  var notes = fetchNotes();

  var filterNotes = notes.filter((note) => note.title !== title);

  fs.writeFileSync("notes.txt", JSON.stringify(filterNotes));
};

const readNotes = (title, body) => {
  var notes = fetchNotes();

  var noteToRead = notes.filter((note) => note.title === title);
  fs.readFileSync("notes.txt", "utf-8", noteToRead);
  console.log(notes);
};

const listNotes = (title, body) => {
  var notes = fetchNotes();

  fs.readFileSync("notes.txt", notes);
  console.log(notes);
};
module.exports = { addingNotes, removeNotes, readNotes, listNotes };
