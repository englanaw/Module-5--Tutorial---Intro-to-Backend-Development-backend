const express = require("express");
const Song = require("./models/song");

const app = express();
var cors = require("cors");

app.use(cors());

app.use(express.json());
const router = express.Router();

// grab all songs
router.get("/songs", async (req, res) => {
  try {
    const songs = await Song.find({});
    res.json(songs);
  } catch (err) {
    res.status(400).send(err);
  }
});

// grab a single song by id
router.get("/songs:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.json(song);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/songs", async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).json(song);
    console.log(song);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/songs:id", async (req, res) => {
  try {
    await Song.findByIdAndUpdate(req.params.id, req.body);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.use("/api", router);
app.listen(3000);
