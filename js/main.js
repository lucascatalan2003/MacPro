precio = 0;
precioUsados = 0;
precioNuevos = 0;
precioMac = 0;
precioAirpods = 0;
nuevos = 0;
elegir = 0;

function saludar() {
    let ingreso = false;
    alert("Bienvenido a MacPro, somos los encargados de mejorar sus dispositivos.");
    while (!ingreso) {
        nombre = prompt("Ingrese su nombre y apellido:  ");
        if (nombre !== "" && nombre !== null) {
            console.log("Bienvenido" + " " + nombre);
            ingreso = true
        } else {
            alert("Ingrese su nombre y apellido correctamente")
        }

    }
    return nombre;
}
saludar()



function menu() {
    let ingreso;
    while (ingreso !== "6") {
        ingreso = prompt(nombre + " " + "seleccionar su proximo celular usado :  \n 1.Celulares Usados \n 2.Celulares Nuevos \n 3.Mac\n 4. Airpods\n 5.Carrito\n 6. Salir")
        switch (ingreso) {
            case "1":
                celularesUsados();
                break;
            case "2":
                celularesNuevos();
                break;
            case "3":
                mac();
                break
            case "4":
                airPods();
                break
            case "5":
                totalprocutos()
                break;
            case "6":
                alert("Gracias, vuelva pronto.")
                break;
            default:
                alert("Opción inválida. Por favor, seleccione nuevamente.");
                break
        }
    }
}
menu();



function celularesUsados() {
    let usados = false
    while (!usados) {
        elegir = prompt(nombre + " " + "celulares usados :  \n 1.Iphone 11\n 2.Iphone 11 Pro\n 3.Iphone 12\n 4.Iphone 13 Mini\n 5.Volver a Menu")
        console.log("Seleccionar su proximo iphone" + elegir);

        switch (elegir) {
            case "1":
                precioUsados = 370;
                usados = true;
                console.log("Precio Iphone 11: u$s" + precioUsados);
                break
            case "2":
                precioUsados = 580;
                usados = true;
                console.log("Precio Iphone 11 Pro: u$s" + precioUsados);
                break
            case "3":
                precioUsados = 530;
                usados = true;
                console.log("Precio Iphone 12: u$s" + precioUsados);
                break
            case "4":
                precioUsados = 600;
                usados = true;
                console.log("Precio Iphone 13 Mini: u$s" + precioUsados);
                break;
            case "5":
                menu();
                break
            default:
                alert("Opción inválida. Por favor, seleccione nuevamente.");
                break

        }
        if (usados && elegir > 0) {
            alert(
                "Seleccionaste " +
                elegir +
                " el precio es de: " +
                precioUsados
                + " " + "u$s"
            );
        } else {
            usados = 0;
            elegir = 0;
        }
    }
    alert("Si desea otro producto, en menu podra hacerlo.");
    return { elegir, precioUsados }
}


function celularesNuevos() {
    let usados = false
    while (!usados) {
        nuevos = prompt(nombre + " " + "celulares usados :  \n 1.Iphone 12 Mini\n 2.Iphone 13 \n 3.Iphone 14\n 4.Iphone 15 \n 5.Volver a Menu")
        console.log("Seleccionar su proximo iphone" + nuevos);

        switch (nuevos) {
            case "1":
                precioNuevos = 620;
                usados = true;
                console.log("Precio Iphone 12 Mini: u$s" + precioNuevos);
                break
            case "2":
                precioNuevos = 720;
                usados = true;
                console.log("Precio Iphone 13: u$s" + precioNuevos);
                break
            case "3":
                precioNuevos = 530;
                usados = true;
                console.log("Precio Iphone 14: u$s" + precioNuevos);
                break
            case "4":
                precioNuevos = 600;
                usados = true;
                console.log("Precio Iphone 15: u$s" + precioNuevos);
                break;
            case "5":
                menu();
                break
            default:
                alert("Opción inválida. Por favor, seleccione nuevamente.");
                break

        }
        if (usados && precioNuevos > 0) {
            alert(
                "Seleccionaste " +
                nuevos +
                " el precio es de: " +
                precioNuevos
                + " " + "u$s"
            );
        } else {
            usados = 0;
            nuevos = 0;
        }
    }
    alert("Si desea otro producto, en menu podra hacerlo.");
}


function mac() {
    let usados = false
    while (!usados) {
        macb = prompt(nombre + " " + "Seleccione su proxima MacBook :  \n 1.Apple Macbook Air\n 2.Apple Macbook Air M2 2022 \n 3.Volver a menu")
        console.log("Seleccionar su proximo mac" + macb);

        switch (macb) {
            case "1":
                precioMac = 1200;
                usados = true;
                console.log("Precio Iphone mac: u$s" + precioMac);
                break
            case "2":
                precioMac = 1600;
                usados = true;
                console.log("Precio mac Pro: u$s" + precioMac);
                break
                case "3":
                    menu();
                    break

            default:
                alert("Opción inválida. Por favor, seleccione nuevamente.");
                break

        }
        if (usados && macb > 0) {
            alert(
                "Seleccionaste " +
                macb +
                " el precio es de: " +
                precioMac
                + " " + "u$s"
            );
        } else {
            usados = 0;
            macb = 0;
        }
    }
    alert("Si desea otro producto, en menu podra hacerlo.");
}

function airPods() {
    let usados = false
    while (!usados) {
        precioAirpods = prompt(nombre + " " + "celulares usados :  \n 1. Apple AirPodss(Segunda Generacion)\n 2.Volver a Menu")
        console.log("Seleccionar su proximo airPod" + precioAirpods);

        switch (precioAirpods) {
            case "1":
                precioAirpods = 200;
                usados = true;
                console.log("Precio Apple AirPodss(Segunda Generacion): u$s" + precioAirpods);
                break
            case "2":
                menu();
                break
            default:
                alert("Opción inválida. Por favor, seleccione nuevamente.");
                break

        }
        if (usados && precioAirpods > 0) {
            alert(
                "Seleccionaste " +
                precioAirpods +
                " el precio es de: " +
                precioAirpods
                + " " + "u$s"
            );
        } else {
            usados = 0;
            precioAirpods = 0;
        }
    }
    alert("Si desea otro producto, en menu podra hacerlo.");
}
function totalprocutos() {
    let total = precioUsados + precioNuevos + precioMac + precioAirpods;
    console.log("El monto total a pagar es : u$" + total);
    alert(
        nombre +
        ", Su monto a pagar es: " +
        "\n\n- Iphone Usado: " + precioUsados + " " +"u$s" + 
        "\n\n- Iphone nuevo :" + precioNuevos + " " + "u$s" +
        "\n\n- MacBook: " + precioMac + " " +"u$s" +
        "\n\n- AirPods: " + precioAirpods + " " +" u$s" +
        "\n\n- Monto Total: " +
        total + " " + "u$s."
    );
    
}




const dispositivos = [
    {
        nombre: "Iphone Usados",
        descripcion: "El valor del Iphone 11 es de u$s" + precio,
        precio: 350,
    },
    {
        nombre: "Iphone Usados",
        descripcion: "El valor del Iphone 11 Pro es de 5 u$s" + precio,
        precio: 450,
    },
    {
        nombre: "Iphone Usados",
        descripcion: "El valor del Iphone 12 es de 5 u$s" + precio,
        precio: 450,
    },

    {
        nombre: "Iphone Usados",
        descripcion: "El valor del Iphone 11 es de  u$s" + precio,
        precio: 550,
    },
    {
        nombre: "Iphone Nuevos",
        descripcion: "El valor del Iphone 12 Mini es de  u$s" + precio,
        precio: 650,
    },
    {
        nombre: "Iphone Nuevos",
        descripcion: "El valor del Iphone 13 es de  u$s" + precio,
        precio: 650,
    },
    {
        nombre: "Iphone Nuevos",
        descripcion: "El valor del Iphone 14 es de  u$s" + precio,
        precio: 650,
    },
    {
        nombre: "Iphone Nuevos",
        descripcion: "El 15 es de  u$s" + precio,
        precio: 750,
    },
    {
        nombre: "MacBooks",
        descripcion: "El valor del Macbook es de  u$s" + precio,
        precio: 1200,
    },
    {
        nombre: "MacBooks",
        descripcion: "El valor de Macbook es de 550 u$s" + precio,
        precio: 1400,
    },
    {
        nombre: "Airpodss",
        descripcion: "El valor de los AirPos es de 550 u$s" + precio,
        precio: 500,
    },
    {
        nombre: "Airpodss",
        descripcion: "El valor de los AirPods es de 550 u$s" + precio,
        precio: 550,
    },

];
console.log(dispositivos);


function buscarNombres(arr, dispositivos) {
    return arr.find((el) => el.nombre.includes(dispositivos))
}

function buscarNombres2(arr, dispositivos) {
    return arr.filter((el) => el.nombre.includes(dispositivos))

}

function buscarPorPrecio(arr, precio) {
    return arr.filter((el) => el.precio.includes(dispositivos))
}

let buscar = buscarNombres(dispositivos, "Iphone Usados")
console.log(buscar);
let buscar2 = buscarNombres2(dispositivos, "Usados")
console.log(buscar2);

let mostrarPrecio = (dispositivos, 500)
console.log(mostrarPrecio);
let mostrarPrecio2 = (dispositivos, 1200)
console.log(mostrarPrecio);

class agregarDispositivos {
    agregar(nombre, descripcion, precio) {
        this.nombreProducto = nombre;
        this.descripcionDeProducto = descripcion;
        this.precioProducto = precio;
    }
}


agregarDispositivos.nuevo = function (nombre, descripcion, precio) {
    dispositivos.push(new agregarDispositivos(nombre, descripcion, precio))
}

agregarDispositivos.nuevo("Iphone Nuevos,El valor del Iphone 14 Pro es de  u$s", 1350)
agregarDispositivos.nuevo(
    "Iphone Nuevos",
    "El valor del Iphone 14 Pro es de  u$s",
    1350
);
console.log(dispositivos);