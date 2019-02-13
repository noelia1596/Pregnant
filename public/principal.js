// Retrieve the object from storage
var retrievedJSON = localStorage.getItem('registros');
let object = JSON.parse(retrievedJSON);
console.log('retrievedObject: ',object);


$(document).ready(function(){
    $(".desplega").hide();

    $('#antojos').click(function(){
        $(".desplega").toggle();
        
    
    });
});


