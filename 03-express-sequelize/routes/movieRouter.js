const express = require("express");
const {
  getAllMovies,
  getMovieByID,
  addMovies,
  deleteMovie,
  updateMovie,
} = require("../controllers/movies");
const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getMovieByID);
router.post("/", addMovies);
router.delete("/:id", deleteMovie);
router.put("/:id", updateMovie);

module.exports = router;
