// Sistema de Autos , te va a preguntar que queres hacer, si ver el listado de coches, o si queres agregar un coche. En caso de querer ver el listado de coches y no tener coches registrados te lo va a informar.Y si queres agregar un coche te pregunta cuantos Autos queres agregar y en base a eso vas a agregar los vehiculos detallando nombre del coche , modelo , sistema de caja ,color y precio. 


alert("Bienvenido al Sistema de Coches!")
let opcion;

const cochesInfo = []

let cantidad;


class Coches{
    constructor(nombre, modelo, caja, color, precio){
        this.nombre = nombre.toUpperCase(),
        this.modelo = modelo.toUpperCase(),
        this.caja = caja.toUpperCase(),
        this.color = color.toUpperCase(),
        this.precio = precio
    }

}

function agregaCoches(){
    for(let i = 0; i<cantidad;i++){
        nombre = prompt("Dame el nombre del coche numero " + i);
        modelo = prompt("Dame el Modelo del coche numero " + i);
        caja = prompt("Dame el Color del coche numero " + i);
        color = prompt("Dame la Caja del coche numero " + i);
        do{
            precio = parseInt(prompt("Dame el Precio del coche numero " + i));
        }while(isNaN(precio))
        cochesInfo.push(new Coches(nombre, modelo, caja, color, precio))
    }
}

do{
    opcion = parseInt(prompt("Que te gustaria hacer? \n 1. Agregar coche \n 2. Ver listado de coches registrados \n 3. Salir"))
    while(opcion == 2 && cochesInfo.length == 0){
        alert("Primero debes registrar un coche.")
        opcion = parseInt(prompt("Que te gustaria hacer? \n 1. Agregar coche \n 2. Ver listado de coches registrados \n 3. Salir"))

    }


    switch(opcion){
        case 1:
            cantidad = parseInt(prompt("Cuantos coches agregaras?"))
            agregaCoches()
            alert("Has agregado " + cantidad + " coches")
            break;
        case 2:
            for(let i = 0; i <= cochesInfo.length; i++){
            
                console.log(cochesInfo[i])
            } 
            
            break;
        case 3:
            break;
        default:
            alert("Opcion invalida. Intenta nuevamente.")
            break;
    }
    
}while(isNaN(opcion) || opcion != 3)




