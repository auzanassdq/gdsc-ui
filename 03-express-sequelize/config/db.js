const {Sequelize} = require("sequelize")

const sequelize = new Sequelize({
  host: 'containers-us-west-107.railway.app',
  database: 'railway',
  username: 'root',
  password: 'eOF7BICjoUM65oIzZ0mv',
  port: '7997',
  dialect: 'mysql'
});

module.exports = sequelize