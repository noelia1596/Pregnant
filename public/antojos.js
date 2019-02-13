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
    
      var connection = getConnection();
      //y ponemos '"+obj.username+"', porque es la variable que habiamos pasado antes, y de esta que coja username....y demas
      var sql = "INSERT INTO pregnant.antojos (usuario,tipoDeAntojo,nombreDelAntojo,fechaDelAntojo,vecesDadasAntojo,aQuienDio)VALUES('"+obj.username+"','"+obj.tipoDeAntojo+"','"+obj.nombreDelAntojo+"','"+obj.fechaDelAntojo+"','"+obj.vecesDadasAntojo+"','"+obj.aQuienDio+"')";
          
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


router.use('/borrar-antojo', function (req, res, next) {
 
  try {
      //Pasamos el JSON (string) a objeto de js, el objeto se abre,el json no
    var obj = JSON.parse(req.body.value); 
    console.log(obj);  
      //Comprobamos que el usuario y password que estamos metiendo, este en nuestra base de datos
     var connection = getConnection();
     var sql = "delete from  pregnant.antojos WHERE usuario= '"+obj.username+"' and password='"+obj.tipoDeAntojo+"'";
   
     connection.query(sql, function (err, result, fields) {
       if (err) throw err;
       res.send(result);
       console.log('result, borrado',result)
     });
     connection.end();
    
    console.log('borrarse boroooooo',respuesta);
   
    //a la respuesta le vamos a enviar la respuesta que nos salga de comprobarUsuario()
    
  }catch (ex) {
    console.error(ex);
    console.log("borradoofinal");
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