console.log("Starting app.js");

const yargs = require("yargs");
const notes = require("./notes.js");
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log("adding notes");
  notes.addingNotes(title, body);
} else if (command === "remove") {
  console.log("removing notes");
  notes.removeNotes(title);
} else if (command === "read") {
  console.log("reading notes");
  notes.readNotes(title, body);
} else if (command === "list") {
  console.log("listing notes");
  notes.listNotes(title, body);
} else {
  console.log("command unknown");
}
