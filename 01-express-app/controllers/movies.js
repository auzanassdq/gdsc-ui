let movies = [
  {id: 1, title: "spiderman", year: 2023},
  {id: 2, title: "the flash", year: 2023},
  {id: 3, title: "insidious", year: 2023},
]

module.exports = {
  getAllMovies: (req, res) => {
    res.json({
      message: "success get data movies",
      data: movies
    })
  },

  getMovieByID: (req, res) => {
    const { id } = req.params
    let movie = movies.find(item => item.id == id)

    res.json({
      message: "success get movie by ID",
      data: movie
    })
  },

  addMovies: (req, res) => {
    const newMovie = req.body

    movies.push(newMovie)

    res.json({
      message: "success add new movie",
    })
  },

  deleteMovie: (req, res) => {},
  updateMovie: (req, res) => {}
}