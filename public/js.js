let usuario = "";
let password = "";
var nuevoUsuario;

$(document).ready(function(){
    $('#enviar').click(function(){
       usuario= $('#usuario').val();
       password = $('#password').val();

     nuevoUsuario = new Usuario (usuario, password);
    enviarObjeto(nuevoUsuario);
    })
})

function enviarObjeto(objeto){
//lo pasamos a texto
    var json = JSON.stringify(objeto); 
    
    $.ajax({
        url: "http://localhost:3000/users/new-user",
        type: 'POST',
        data: { key: 'obj', value: json },
        dataType: 'json'
    });
}

