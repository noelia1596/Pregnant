let username = "";
let tipoDeAntojo = "";
let nombreDelAntojo = "";
let fechaDelAntojo = "";
let vecesDadasAntojo = "";
let aQuienDio = "";

var nuevoAntojo;

$(document).ready(function(){
    $('#guardar').click(function(){
        username = $('#inputUsuarioa').val();
        tipoDeAntojo = $('#inputTipoDeAntojo').val();
        nombreDelAntojo = $('#inputNombreAntojo').val();
        fechaDelAntojo = $('#inputFechaAntojo').val();
        vecesDadasAntojo = $('#inputVecesAntojo').val();
        aQuienDio = $('#antojoss').val();

        nuevoAntojo = new Antojos(username,tipoDeAntojo,nombreDelAntojo,fechaDelAntojo,vecesDadasAntojo,aQuienDio);
        guardarAntojo(nuevoAntojo);
    });


    $('#borrarAntojo').click(function(){
        username = $('#inputUsuarioa').val();
        tipoDeAntojo = $('#inputTipoDeAntojo').val();
        nombreDelAntojo = $('#inputNombreAntojo').val();
        fechaDelAntojo = $('#inputFechaAntojo').val();
        vecesDadasAntojo = $('#inputVecesAntojo').val();
        aQuienDio = $('#antojoss').val();

        nuevoAntojo = new Antojos(username,tipoDeAntojo,nombreDelAntojo,fechaDelAntojo,vecesDadasAntojo,aQuienDio);
        borrarAntojo(nuevoAntojo);
    });
})


function guardarAntojo(antojo){
    //lo pasamos a texto
    var json = JSON.stringify(antojo); 
        
    $.ajax({
        url: "http://localhost:3000/users/guardar-antojo",
        type: 'POST',
        data: { key: 'obj', value: json },
        dataType: 'json',
/*aqui como es ajax, el que envia el req ha comprobar-user, cuando compr..da ya el result, al ser ajax
el que lo envia, entonces le manda devuelta el result, que seria en este caso el response
*/
        success: function(response){
            if(response.length >0){
                alert("AntojoGuardado");
                localStorage.setItem('antojos', JSON.stringify(response[0].Object));
                window.location.replace("principal.html");
            }else{
                alert("Antojo no guardado");
            }        
        }
    });
}


function borrarAntojo(antojo){
        //lo pasamos a texto
    var json = JSON.stringify(antojo); 
            
    $.ajax({
        url: "http://localhost:3000/users/borrar-antojo",
        type: 'POST',
        data: { key: 'obj', value: json },
        dataType: 'json',
/*aqui como es ajax, el que envia el req ha comprobar-user, cuando compr..da ya el result, al ser ajax
el que lo envia, entonces le manda devuelta el result, que seria en este caso el response
*/
        success: function(response){
            if(response.length >0){
                alert("AntojoBorrado");
                localStorage.setItem('antojos', JSON.stringify(response[0].Object));
                window.location.replace("principal.html");
            }else{
                alert("Antojo no borrado");
            }        
        }
    });
}