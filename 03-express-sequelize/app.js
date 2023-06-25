const express = require("express")
const allRouter = require("./routes")
const sequelize = require("./config/db")

const app = express()
const PORT = process.env.PORT || 3001

async function testConnection(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection()

app.use(express.json())
app.use(allRouter)

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
})