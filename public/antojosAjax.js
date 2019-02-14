let username = "";
let tipoDeAntojo = "";
let nombreDelAntojo = "";
let fechaDelAntojo = "";
let vecesDadasAntojo = "";
let aQuienDio = "";

var nuevoAntojo;

var retrievedJSON = localStorage.getItem('registros');
let usuarioRegistrado = JSON.parse(retrievedJSON);
console.log('retrievedObject: ',usuarioRegistrado);


$(document).ready(function(){
    $('#guardar').click(function(){
        username = usuarioRegistrado.usuario;
        tipoDeAntojo = $('#inputTipoDeAntojo').val();
        nombreDelAntojo = $('#inputNombreAntojo').val();
        fechaDelAntojo = $('#inputFechaAntojo').val();
        vecesDadasAntojo = $('#inputVecesAntojo').val();
        aQuienDio = $('input:radio[name=antojos]:checked').val();

        nuevoAntojo = new Antojos(username,tipoDeAntojo,nombreDelAntojo,fechaDelAntojo,vecesDadasAntojo,aQuienDio);
        console.log(nuevoAntojo);
        guardarAntojo(nuevoAntojo);
    });
})

function guardarAntojo(antojo){
    //lo pasamos a texto
    var json = JSON.stringify(antojo); 
        
    $.ajax({
        url: "http://localhost:3000/antojos/guardar-antojo",
        type: 'POST',
        data: { key: 'obj', value: json },
        dataType: 'json',
/*aqui como es ajax, el que envia el req ha comprobar-user, cuando compr..da ya el result, al ser ajax
el que lo envia, entonces le manda devuelta el result, que seria en este caso el response
*/
        success: function(response){
            if(response.length >0){
                alert("AntojoGuardado");
            }else{
                alert("Antojo no guardado");
            }        
        }
    });
}

