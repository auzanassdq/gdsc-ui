const express = require("express")
const allRouter = require("./routes")

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(allRouter)

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
})