const Movie = require("../models/Movie")

module.exports = {
  getAllMovies: async (req, res) => {
    const movies = await Movie.findAll()

    res.json({
      message: "success get all movies",
      data: movies
    })
  },

  getMovieByID: (req, res) => {
   
  },

  addMovies: async (req, res) => {
    const newMovie = req.body

    await Movie.create(newMovie)

    res.json({
      message: "success add data movie"
    })
  },

  deleteMovie: (req, res) => {},
  updateMovie: (req, res) => {}
}