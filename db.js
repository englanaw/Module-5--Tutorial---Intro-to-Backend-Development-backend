const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sdev255:password255@SongDB.hqbmev7.mongodb.net/?appName=SongDB",
);

module.exports = mongoose;
