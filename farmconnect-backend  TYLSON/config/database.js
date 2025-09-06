const mysql = require('mysql2');

// Create MySQL connection pool (better performance)
const pool = mysql.createPool({
  host: 'localhost',           // Your MySQL host
  user: 'your_mysql_username', // Your MySQL username
  password: 'your_mysql_password', // Your MySQL password
  database: 'farmconnect',     // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Get promise-based interface (so we can use async/await)
const promisePool = pool.promise();

module.exports = promisePool;