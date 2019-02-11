let username = "";
let password = "";
let nombre = "";
let apellidos = "";
let fechaNacimientoMama = "";
let fechaEmbarazo = "";
let nombrePadre = "";
let fechaNacimientoPadre = "";
let apellidosPadre = "";

var nuevoUsuario;

$(document).ready(function(){
   
    $('#entrar').click(function(){
       usuario= $('#inputEntrarUsuario').val();
       password = $('#inputEntrarPassword').val();
        
       nuevoUsuario = new Usuario (username, password);
       enviarObjeto(nuevoUsuario);
     
    });
    //cambiado
    /*
    $('#registrar').click(function(){
        username= $('#inputUsuario').val();
        password = $('#inputEntrarPassword').val();
        nombre = $('#inputNombre').val();
        apellidos = $('#inputApellidos').val();
        fechaNacimientoMama = $('#inputFechaNacimiento').val();
        fechaEmbarazo = $('#inputFechaEmbarazo').val();
        nombrePadre = $('#inputNombree').val();
        fechaNacimientoPadre = $('#inputFechaNacimientop').val();
        apellidosPadre = $('#inputApellidosp').val();

      nuevoUsuario = new Usuario (username, password,nombre, apellidos, fechaNacimientoMama, fechaEmbarazo, nombrePadre, fechaNacimientoPadre, apellidosPadre);
      registroObjeto(nuevoUsuario);
     });


     function registroObjeto(objeto){
        //lo pasamos a texto
            var json = JSON.stringify(objeto); 
            
            $.ajax({
                url: "http://localhost:3000/users/new-user",
                type: 'POST',
                data: { key: 'obj', value: json },
                dataType: 'json',
                /*aqui como es ajax, el que envia el req ha comprobar-user, cuando compr..da ya el result, al ser ajax
                el que lo envia, entonces le manda devuelta el result, que seria en este caso el response
                */
               /*
                success: function(response){
                    alert("usuarioRegistrado");
                    console.log(response);
                    
                }
            });
        }


*/

    $('#registrarse').click(function(){
        console.log("holaa");
    
        $('#inicio').hide();
        $('#registrar').show();
        
    });
    $("#radioSi").click(function(){
        var siNo= $('#radioSi').val();
        if(siNo == "si"){
            $('#infoPadre').show();
        }else{
            $('#infoPadre').hide();
        }
    });
    $("#radioNo").click(function(){
        var siNo= $('#radioNo').val();
        if(siNo == "no"){
            $('#infoPadre').hide();
        }else{
            $('#infoPadre').show();
        }
    });
   
})



function enviarObjeto(objeto){
//lo pasamos a texto
    var json = JSON.stringify(objeto); 
    
    $.ajax({
        url: "http://localhost:3000/users/comprobar-user",
        type: 'POST',
        data: { key: 'obj', value: json },
        dataType: 'json',
        /*aqui como es ajax, el que envia el req ha comprobar-user, cuando compr..da ya el result, al ser ajax
        el que lo envia, entonces le manda devuelta el result, que seria en este caso el response
        */
        success: function(response){
            alert("usuarioCorrecto");
            console.log(response);
            
        }
    });
}

