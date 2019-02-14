var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const path = require('path');


/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.use('/guardar-antojo', function (req, res, next) {
 
  try {
      //Pasamos el JSON (string) a objeto de js, el objeto se abre,el json no
      /*
      nos llega json (req), de aqui queremos el parametro body, que este tiene una key y un value, y queremos solo el value
      entonces pasamos var obj = json.....a un objeto
      */
    var obj = JSON.parse(req.body.value); 
    //comprobar es nulo si no esta en la base de datos, sino, no le dejamos registrarse
    console.log(obj);
      var connection = getConnection();
      //y ponemos '"+obj.username+"', porque es la variable que habiamos pasado antes, y de esta que coja username....y demas
      var sql = "INSERT INTO pregnant.antojos (usuario,tipoDeAntojo,nombreDelAntojo,fechaDelAntojo,vecesDadasDelAntojo,AQuienLeDio)VALUES('"+obj.username+"','"+obj.tipoDeAntojo+"','"+obj.nombreDelAntojo+"','"+obj.fechaDelAntojo+"','"+obj.vecesDadasAntojo+"','"+obj.aQuienDio+"')";
      console.log(sql);  
      connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        //a la respuesta(res), le vamos a enviar el result que se ha generado en la query(esto se lo envia, a quien a llamado a /new-user,que ha sido ajax)
        res.send([result]);
        console.log("antojo insertado",[result]);
        
      });
      connection.end();
  }catch (ex) {
    console.error(ex);
  }
});


router.use('/imprimir-antojos', function (req, res, next) {
  try {
    var obj = JSON.parse(req.body.value); 
    //comprobar es nulo si no esta en la base de datos, sino, no le dejamos registrarse
    console.log(obj);
      var connection = getConnection();
      //y ponemos '"+obj.username+"', porque es la variable que habiamos pasado antes, y de esta que coja username....y demas
      var sql = "select * from pregnant.antojos where usuario = '"+obj.usuario+"'";
      console.log(sql);  
      connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        //a la respuesta(res), le vamos a enviar el result que se ha generado en la query(esto se lo envia, a quien a llamado a /new-user,que ha sido ajax)
        res.send(result);
        console.log("antojo imprimiendo?",result);
        
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
      database:'pregnant'
  });
  return connection;
}



module.exports = router;