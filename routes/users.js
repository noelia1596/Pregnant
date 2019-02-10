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
 
  try {
      //Pasamos el JSON (string) a objeto de js, el objeto se abre,el json no
    var obj = JSON.parse(req.body.value); 
    //comprobar es nulo si no esta en la base de datos
    let comprobar = comprobarUsuario(obj);
    console.log('comprobar',comprobar);
    if(comprobar == null){
      let usuario = crearUsuario(obj);
      res.send(usuario); 
    }else{
      res.send(comprobar);
    } 
  }catch (ex) {
    console.error(ex);
  }
});


router.use('/comprobar-user', function (req, res, next) {
 
  try {
      //Pasamos el JSON (string) a objeto de js, el objeto se abre,el json no
    var obj = JSON.parse(req.body.value); 
    console.log(obj);
    let devuelve = comprobarUsuario(obj);
    //a la respuesta le vamos a enviar la respuesta que nos salga de comprobarUsuario()
    res.send(devuelve);
  }catch (ex) {
    console.error(ex);
  }
});

function comprobarUsuario(usuario){
  let respuesta = null;
  try {
     //Comprobamos que el usuario y password que estamos metiendo, este en nuestra base de datos
    var connection = getConnection();
    var sql = "SELECT * FROM foodsaver.usuarios WHERE usuario= '"+usuario.nombre+"' and password='"+usuario.password+"'";
    
    connection.query(sql, function (err, result, fields) {
      if (err) throw err;
      respuesta = result;
    });
    connection.end();
  } catch (error) {
    console.error(error);
  }
  return respuesta;
}


function crearUsuario(usuario){
  let respuesta = null;
  try {
    var connection = getConnection();
    var sql = "INSERT INTO foodsaver.usuarios (usuario,password)VALUES('"+usuario.nombre+"','"+usuario.password+"')";
        
    connection.query(sql, function (err, result, fields) {
      if (err) throw err;
      respuesta = result;
      console.log("usuario insertado",result);
      
    });
    connection.end();
  } catch (error) {
    console.error(error);
  }
return respuesta;
}

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
