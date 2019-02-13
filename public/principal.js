// Retrieve the object from storage
var retrievedJSON = localStorage.getItem('registros');
let usuarioRegistrado = JSON.parse(retrievedJSON);
console.log('retrievedObject: ',usuarioRegistrado);


$(document).ready(function(){
    $("#verAntojo").hide();
    $("#insertarAntojo").hide();
    $("body").append('<h1><strong>Hola,'+ usuarioRegistrado.Nombre + '</strong></h1>');

    $('#antojos').click(function(){
        $("#verAntojo").toggle();
        $("#insertarAntojo").toggle();
    });

 $("#insertarAntojo").click(function(){
    window.location.replace("antojos.html");
    localStorage.setItem('registros', JSON.stringify(usuarioRegistrado));
    console.log("hola");
 }); 
});


