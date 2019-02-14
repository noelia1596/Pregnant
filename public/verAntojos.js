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
    imprimirAntojos(usuarioRegistrado);
});

function imprimirAntojos(usuario){
    //lo pasamos a texto
    var json = JSON.stringify(usuario); 
        
    $.ajax({
        url: "http://localhost:3000/antojos/imprimir-antojos",
        type: 'POST',
        data: { key: 'obj', value: json },
        dataType: 'json',
/*aqui como es ajax, el que envia el req ha comprobar-user, cuando compr..da ya el result, al ser ajax
el que lo envia, entonces le manda devuelta el result, que seria en este caso el response
*/

        success: function(response){
            console.log(response);
            if(response.length >0){
                //window.location.replace("verAntojos.html");
                antojoEnHtml(response);
            }else{
                console.log("No hay antojos");
            }        
        }
    });
}

function antojoEnHtml(arrayAntojos){
    let contador = 1;
    arrayAntojos.forEach(element => {
        let dateDelAntojo= new Date(element.FechaDelAntojo);
        let dateInString = dateToString(dateDelAntojo)

        $('#tbody').append("<tr id='tr"+contador+"'></tr>");
        $('#tbody').find('#tr' +contador).append('<th>'+contador+'</th><th>'+element.NombreDelAntojo+'</th><th>'+element.TipoDeAntojo+'</th><th>'+dateInString+'</th><th>'+element.VecesDadasDelAntojo+'</th><th>'+element.AQuienLeDio+'</th>')
        contador++;
    });
}

function dateToString(date){
    let strDate = "";
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let day = date.getDay();
    let month = date.getMonth() + 1; 
    let year = date.getFullYear();

    strDate = hour+":"+minutes+":"+seconds+" "+day+"/"+month+"/"+year;
    return strDate;
}