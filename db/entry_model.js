const mongoose = require("./connection");

const EntryModel = mongoose.model(
  "Entry",
  new mongoose.Schema({
    category: {
      type: String,
      required: true,
    },
    entry: {
      type: String,
      required: true,
    },
  })
);

module.exports = EntryModel;
