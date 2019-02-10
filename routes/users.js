var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const path = require('path');


/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.use('/new-user', function (req, res, next) {
  res.send(req.id);
  
  
  try {
      //Pasamos el JSON (string) a objeto de js, el objeto se abre,el json no
    var obj = JSON.parse(req.body.value); 
    console.log(obj);

    var connection = getConnection();
    var sql = "INSERT INTO foodsaver.usuarios (usuario,password)VALUES('"+obj.nombre+"','"+obj.password+"')";
        
    connection.query(sql, function (err, result, fields) {
      if (err) throw err;
    });
    connection.end();
  }catch (ex) {
    console.error(ex);
  }
});

function getConnection(){
  var connection = mysql.createConnection({
      host:'localhost',
      user:'noe',
      password:'bar',
      database:'foodsaver'
  });
  return connection;
}

module.exports = router;
