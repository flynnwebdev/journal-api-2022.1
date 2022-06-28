const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://cademo:cademo@cluster0.efrnd.mongodb.net/journal?retryWrites=true&w=majority"
  )
  .then(() =>
    console.log(
      mongoose.connection.readyState == 1
        ? "Mongoose connected!"
        : "Mongoose failed"
    )
  )
  .catch((err) => console.log(err));

module.exports = mongoose
