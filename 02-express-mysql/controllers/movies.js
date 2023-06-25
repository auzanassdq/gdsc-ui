const connection = require('../config/db');

let movies = [
  {id: 1, title: "spiderman", year: 2023},
  {id: 2, title: "the flash", year: 2023},
  {id: 3, title: "insidious", year: 2023},
]

module.exports = {
  getAllMovies: (req, res) => {
    connection.query(
      'select * from movie',
      function(err, results, fields) {
        console.log(results);

        res.json({
          message: "success get all movie",
          data: results
        })
      }
    );
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
    const {title, year} = req.body

    connection.query(
      'insert into movie (title, year) values (?, ?)', [title, year],
      function(err, results, fields) {

        res.json({
          message: "success add data movie"
        })
      }
    );
  },

  deleteMovie: (req, res) => {},
  updateMovie: (req, res) => {}
}