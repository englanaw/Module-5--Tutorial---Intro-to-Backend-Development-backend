const express = require("express");
var cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
const router = express.Router();

// starting webserer, app.listen(portnumber, function)

// making api's using routes
// routes handle browers requests

router.get("/songs", function (req, res) {
  const songs = [
    {
      title: "we found love",
      artist: "Rihanna",
      popularity: 10,
      release_date: new Date(2011, 9, 22),
      genere: ["electro house"],
    },
    {
      title: "Happy",
      artist: "Pharrell Williams",
      popularity: 10,
      release_date: new Date(2013, 10, 21),
      genere: ["soul", "new soul"],
    },
  ];
  res.json(songs);
});

app.use("/api", router);
app.listen(3000);
