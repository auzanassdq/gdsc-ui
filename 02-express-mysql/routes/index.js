const express = require('express');
const router = express.Router()

const moviesRouter = require("./movieRouter")

router.get("/", (req, res) => {
  res.json({message: "selamat datang di server"})
})

router.use("/movies", moviesRouter)
// router.use("/serries")
// router.use("/user")

module.exports = router