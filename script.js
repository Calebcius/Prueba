 function Sumar ()  {
     var num1= document.getElementById("N1").value;
     var num2= document.getElementById("N2").value;
     var resultado= parseInt(num1) + parseInt(num2);
     alert("La suma de los numeros es:" + resultado);
 } 

 function Restar ()  {
    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    var resultado= parseInt(num1) - parseInt(num2);
    alert("La resta de los numeros es:" + resultado);
}

function Dividir ()  {
    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    var resultado= parseInt(num1) / parseInt(num2);
    alert("La division de los numeros es:" + resultado);
}

function Multi()  {
    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    var resultado= parseInt(num1) * parseInt(num2);
    alert("La Multiplicacion de los numeros es:" + resultado);
}

function ver() {

    var dato = document.getElementById("Materia").value;
    
    switch (dato) {
        case "Programacion":
               alert("Usted a seleccionado Programacion");
            
            break;
        case "Soporte TI":
            alert("Usted a seleccionado Soporte TI");
            break;
        case "Diseño de software":
            alert ("Usted a seleccionado Diseño de software");
            break;
        default:
            break;

    }




}

function validar() {

    var Edad= document.getElementById("Edad").value;

    if (Edad<18) {
        alert("Es menor de edad");
    } else {
        if (Edad=>18) {
            alert("Es mayor de edad");
        }
        
    }



}