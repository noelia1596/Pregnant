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
       username= $('#inputEntrarUsuario').val();
       password = $('#inputEntrarPassword').val();
        
       nuevoUsuario = new Usuario (username, password);
       enviarObjeto(nuevoUsuario);
     
    });
    //cambiado
    
    $('#registrar').click(function(){
        username= $('#inputUsuario').val();
        password = $('#inputPassword').val();
        nombre = $('#inputNombre').val();
        apellidos = $('#inputApellidos').val();
        fechaNacimientoMama = $('#inputFechaNacimiento').val();
        fechaEmbarazo = $('#inputFechaEmbarazo').val();
        nombrePadre = $('#inputNombree').val();
        fechaNacimientoPadre =$('#inputFechaNacimientop').val();
        console.log(fechaNacimientoMama);
        apellidosPadre = $('#inputApellidosp').val();

      nuevoUsuario = new Usuario (username, password,nombre, apellidos, fechaNacimientoMama, fechaEmbarazo, nombrePadre, fechaNacimientoPadre, apellidosPadre);
      registroObjeto(nuevoUsuario);
     });



    $('#registrarse').click(function(){
        console.log("holaa");
    
        $('#inicio').hide();
        $('#divRegistrar').show();
        
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
            if(response.length >0){
                alert("usuarioCorrecto");
                window.location.replace("principal.html");
            }else{
                alert("usuario Incorrecto \n Debes registrarte");
            } 
           
            
            
            
        }
    });
}


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
           
            success: function(response){
                if(response.length >0){
                    alert("usuarioRegistrado");
                    window.location.replace("principal.html");
                }else{
                    alert("usuario Incorrecto \n Debes registrarte");
                } 
                console.log(response);
                
            }
        });
    }