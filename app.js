// Simulador Carrito Melany Nutricion

const guias = [
    {
        id: 1,
        nombre: "Guia Semanal Nro 1",
        precio: 340,
        descripcion: "Guia semanal Nro 1, aprende a comer",
        stock: true
    },
    {
        id: 2,
        nombre: "Guia Semanal Nro 2",
        precio: 990,
        descripcion: "Guia semanal Nro 2, alimentate bien",
        stock: false
    },
    {
        id: 3,
        nombre: "Guia Semanal Nro 3",
        precio: 500,
        descripcion: "Guia Semanal Nro 3, termina de adelgazar",
        stock: true
    }
];

alert('Carrito de compra');

let opcion;
let busqueda = () => {
    opcion = parseInt(prompt("Que deseas hacer? \n 1. Ver detalles de las Guias \n 2. Comprar una Guia \n 3. Ver guia mas barata \n 4. Aplicar Descuento \n 5. Agregar Guia \n 6. Eliminar Guia\n 7. Salir."))
}

let corroborarStock = () => {
    const resultado = guias.filter( guia => guia.id == opcionCompra)
    for(const corredor of resultado){
        if(corredor.stock == true){
            return true // Hay Stock
        }else{
            return false // No hay
        }
    }
}

let verGuias = () => {
    for(let productos of guias){
        if(productos.stock==false){
            console.log(`Nombre: ${productos.nombre} \n Precio: ${productos.precio} \n Descripcion: ${productos.descripcion} \n Sin Stock.`)
        }else{
            console.log(`Nombre: ${productos.nombre} \n Precio: ${productos.precio} \n Descripcion: ${productos.descripcion}`)
        }
        
    }
}

let descuento;
let total;

let aplicadorDescuento = () => {
    for(let productos of guias){
        if(productos.id==opcionCompra){
            descuento = (productos.precio * 0.15) // sacamos el 15%
            total = productos.precio - descuento
            console.log(`Nombre: ${productos.nombre} \n Precio sin descuento: ${productos.precio} \n Precio con descuento: ${total}.`)
        }
    }
}

let opcionCompra;
let guiaMasBarata = "";
let precioMasBarato = 999999;

while(opcion!=7){
    switch(opcion){
        case 1:
            verGuias()
            break;
        case 2:
            opcionCompra = parseInt(prompt("Que Guia deseas comprar?"));
            if(corroborarStock() == true){
                alert(`Felicidades Compraste la Guia ${opcionCompra}`)
            }else{
                alert(`Lamentablemente no hay stock de la guia ${opcionCompra}`)
            }
            break;
        case 3:
            for (const masBarato of guias){
                if(masBarato.precio < precioMasBarato){
                    precioMasBarato = masBarato.precio;
                    guiaMasBarata = masBarato.nombre;
                }
            }
                console.log(`La guia mas barata es : ${guiaMasBarata} y cuesta $ ${precioMasBarato}`)
            break;
        case 4:
            verGuias()
            do{
                opcionCompra = parseInt(prompt("A que guia quieres aplicarle el descuento? 1, 2 o 3"))
            }while(opcionCompra != 1 && opcionCompra != 2 && opcionCompra != 3)
            
            codigoDescuento = parseInt(prompt("Codigo descuento: "));

            if (codigoDescuento % 10 == 4){ // Se cumple si el numero termina en 4
                aplicadorDescuento();
            }else{
                alert("Codigo invalido.");
            } 
            
            break;
        case 5:
            let nombreGuiaNueva;
            let precioGuiaNueva;
            let descripcionGuiaNueva;
            let id = 3;
            do{
                nombreGuiaNueva = prompt("Nombre de la nueva Guia");
                precioGuiaNueva = parseInt(prompt("Precio de la nueva Guia"));
                descripcionGuiaNueva = prompt("Descripcion de la nueva Guia");

                guias.push({id: id + 1, nombre: nombreGuiaNueva, precio: precioGuiaNueva, descripcion: descripcionGuiaNueva, stock: true})

                opcionCompra = prompt("Quieres seguir? Si o No?").toUpperCase();
            }while(opcionCompra == "SI")

            verGuias()
            break;
        case 6:
            verGuias()
            opcionCompra = parseInt(prompt("Que guia quieres eliminar?"))
            guias.splice(opcionCompra - 1, 1); // opcionCompra - 1 ya que un usuario normal no sabria que los arreglos comienzan en 0 , por lo tanto si ponen 1 le va a eliminar la guia 2.
            for(let productos of guias){
                console.log(`Nombre: ${productos.nombre} \n Precio: ${productos.precio} \n Descripcion: ${productos.descripcion}.`)
            }
            break;
    }
    busqueda();
}