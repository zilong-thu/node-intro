var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: 3306,
  database: 'db_node_intro',
  user: 'root',
  // password: 'wzl123456'
});

exports.query = function (sqlStr) {
  return new Promise((resolve, reject) => {
    pool.query(sqlStr, (err, rows, fields) => {
      if (err){
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}