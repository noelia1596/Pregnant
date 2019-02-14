// Retrieve the object from storage
var retrievedJSON = localStorage.getItem('registros');
console.log(retrievedJSON);
let usuarioRegistrado = JSON.parse(retrievedJSON);
console.log('retrievedObject: ',usuarioRegistrado);


$(document).ready(function(){
    $("body").append('<h1><strong>Hola,'+ usuarioRegistrado.Nombre + '</strong></h1>');
    $("#verAntojo").hide();
    $("#insertarAntojo").hide();
    

    $('#antojos').click(function(){
        $("#verAntojo").toggle();
        $("#insertarAntojo").toggle();
    });

    $("#insertarAntojo").click(function(){
        window.location.replace("antojos.html");
        localStorage.setItem('registros', JSON.stringify(usuarioRegistrado));
        console.log("hola");
    }); 

    $("#alimentacion").click(function(){
        localStorage.setItem('registros', JSON.stringify(usuarioRegistrado));
    });
    $("#enviarPrincipal").click(function(){
        window.location.replace("principal.html");
        localStorage.setItem('registros', JSON.stringify(usuarioRegistrado));
    }); 

   
});


