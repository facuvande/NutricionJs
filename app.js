/* DESAFIO COMPLEMENTARIO CLASE 3 ELABORADO POR FACUNDO VANDECAVEYE */
// OBJETIVO: Programa que al poner tu apellido te dice si tenes una deuda o no , y en caso de tenerla te pregunta si queres saber de cuanto es

// Definimos variables
let apellido;
let opcion;

// Preguntamos primero el apellido fuera del ciclo para que si ingreso ESC no me recorra todo el programa.
apellido = prompt("Ingrese el apellido (Ingresando ESC podras salir del programa): ");

while(apellido != "ESC"){
    switch(apellido){
        case "Garcia":
            alert("Garcia , tienes una deuda pendiente.");
            opcion = prompt("Quieres saber de cuanto es la deuda? (Ingresar S o N en Mayusculas): ");
            if(opcion=="S"){
                alert("Tienes una deuda de $5.000");
            }
            break;
        case "Dominguez":
            alert("Dominguez , tienes una deuda pendiente.");
            opcion = prompt("Quieres saber de cuanto es la deuda? (Ingresar S o N en Mayusculas): ");
            if(opcion=="S"){
                alert("Tienes una deuda de $8.000");
            }
            break;
        case "Perez":
            alert("Perez , tienes una deuda pendiente.");
            opcion = prompt("Quieres saber de cuanto es la deuda? (Ingresar S o N en Mayusculas): ");
            if(opcion=="S"){
                alert("Tienes una deuda de $5.000");
            }
            break;
        default:
            alert("El apellido " + apellido + " No tiene deuda pendiente.")
            break;
    }
    // Volvemos a preguntar el apellido para correr nuevamente el ciclo en caso de que la opcion no sea ESC
    apellido = prompt("Ingrese el apellido (Ingresando ESC podras salir del programa): ");
}
