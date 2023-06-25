const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'containers-us-west-107.railway.app',
  user: 'root',
  password: "eOF7BICjoUM65oIzZ0mv",
  database: 'railway',
  port: "7997"
});

module.exports = connection