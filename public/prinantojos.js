// Retrieve the object from storage

var retrievedJSON = localStorage.getItem('registros');
let usuarioRegistrado = JSON.parse(retrievedJSON);
console.log('retrievedObject: ',usuarioRegistrado);


$(document).ready(function(){
    $("#verAntojo").hide();
    $("#insertarAntojo").hide();
    

    $('#antojos').click(function(){
        $("#verAntojo").toggle();
        $("#insertarAntojo").toggle();
    });

    $('#verAntojo').click(function(){
        window.location.replace("verAntojos.html");
        localStorage.setItem('registros', JSON.stringify(usuarioRegistrado));
    });


/*
 $("#insertarAntojo").click(function(){
    localStorage.setItem('registros', JSON.stringify(usuarioRegistrado));
    console.log("hola");
 }); 
 */
});
