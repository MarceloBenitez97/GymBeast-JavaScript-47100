//Algoritmo con condicional (if, else)

/*

let usuario = prompt("Ingrese su usuario");
let contrasena = prompt("Ingrese su contraseña");

if (usuario === "BenitezM" && contrasena === "gonzalo1997") {
alert("Ingreso exitoso, Bienvenido a GymBeast!");
}else{
alert("contraseña incorrecta");
}

 //Verificion de edad

let edad = Number (prompt("Ingrese su edad"));

if (edad >= 18){
    alert("Eres mayor de edad");
}else{
    alert("No eres mayor de edad, pero puedes comprar con el aval de un mayor a cargo");
}

//Algoritmo con ciclo o bucle

let numero = Number(prompt("Ingrese el numero"));

for(let i = 1; i <= 10; i++){
    let resultado = numero * i;
    
    alert(`${numero} * ${i} = ${resultado}`);
}

for (let turno = 1; turno <= 10; turno++) {
let nombre = prompt("Ingrese el nombre");

alert(`Turno de compra #${turno} Nombre: ${nombre}`);
}

alert("Limites de compra agotados, vuelva mañana");

// While

let usuario1 = prompt("Ingrese el Usuario");

while (usuario1 != "MarceloB") {
alert("Usuario incorrecto");

usuario1 = prompt("Ingrese el Usuario");
}

alert("Bienvenido a GymBeast Marcelo Benitez");

// Switch

let entrada = prompt("Ingrese un nombre");

while (entrada != "ESC"){
    switch (entrada){
        case "Gonzalo":
            alert("Hola Gonzalo");
            break;
        case "Marcelo":
            alert("Hola Marcelo");
            break;
        case "Viviana":
            alert("Hola Viviana");
            break;
        case "Nazarena":
            alert("Hola Nazarena");
            break;
        default:
            alert("¿Quien sos?");
            break;                
    }
    entrada = prompt("Ingresar un nombre")
}

//Funcion con parametros

function armar(partes) {
    return `Muñeco armado con ${partes}`;
}

function pintar(munecoArmado) {
    return `${munecoArmado} pintado`;
}

function vestir(munecoPintado) {
    return `${munecoPintado} y vestido`;
}

function bodega(munecoVestido) {
    console.log(`${munecoVestido} , enviado a bodega`); 
}

let armado = armar("plastico");
let pintado = pintar(armado);
let vestido = vestir(pintado);
bodega(vestido);

*/

 //Scope

/*
 function sumar(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
  }
 
  function restar(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
  }

  function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
  }
 
  function dividir(num1, num2) {
    let resultado = num1 / num2;
    return resultado;
  }
 
 console.log(sumar(100, 5));
 console.log(restar(100, 5));
 console.log(multiplicar(100, 5));
 console.log(dividir(100, 5));

*/
//Arrow function
/*

const sumar = (a, b, c) => {
    return a + b + c;
  };
 
  const restar = (a, b, c) => {
     return a - b - c;
   };
 
   const multiplicar = (a, b, c) => {
     return a * b * c;
   };
 
   const dividir = (a, b, c) => {
     return a / b / c;
   };
 
  console.log(sumar(100, 50, 10));
  console.log(restar(100, 50, 10));
  console.log(multiplicar(100, 50, 10));
  console.log(dividir(100, 50, 10));

*/
/*

const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const iva = (precio) => precio * 0.21;

let precioProducto = Number(prompt("Ingrese el precio del producto que desea adquirir"));
let descuento = Number(prompt("Ingrese el descuento a aplicar"));

// precioProducto + iva - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

alert(nuevoPrecio);

*/

//2da Preentrega

/*
 function Persona(info) {
   this.nombre = info.nombre;
   this.edad = info.edad;
   this.direccion = info.direccion;
   this.altura = info.altura;
   this.peso = info.peso;
 }

 const persona1 = new Persona({
   nombre: "Gonzalo",
   edad: 26,
   direccion: "AV",
   altura: 170,
   peso: 78,
 });

 console.log(persona1.nombre);
 console.log(persona1.edad);
 console.log(persona1.direccion);
 console.log(persona1.altura);
 console.log(persona1.peso);
 */

 /*
 class Producto {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.vendido = false;
  }

  vender() {
    this.vendido = true;
  }
}

const producto1 = new Producto(
  "Multigimnasio Olmo Multigym + Box Fit 90+ Color De La Estructura Negro/rojo Color Del Tapizado Negro",
  389999,
  "http:asdkfjh"
);
console.log(producto1);
producto1.vender();
console.log(producto1);  */

/*

class Producto {
 constructor(nombre, precio, imagen, cantidad) {
   this.nombre = nombre;
   this.precio = precio;
   this.imagen = imagen;
   this.cantidad = cantidad;
 }

 vender() {

     this.cantidad -= 1;}

 }

const producto1 = new Producto(
  "Multigimnasio Olmo Multigym + Box Fit 90+ Color De La Estructura Negro/rojo Color Del Tapizado Negro",
   389999,
  "http:asdkfjh",
  5
);
console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);

*/

/*
class Producto {
  constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  vender() {

    if (this.cantidad <= 0){

      console.log("No hay más disponibilidad de este producto");

    }

    else {

      this.cantidad -= 1;}

  }
}

*/

/*
  const productos = ["multigimnasio", "bicicleta estatica", "cinta de correr"];

  productos.push("barra olimpica");
  productos.push("polea para multigimnasio");
  productos.push("mancuerna de 10 kg");
  productos.push("disco olimpico engomado de 5 kg");
 
  
 let nombre = prompt("Ingrese el nombre del producto a validar");

 if (productos.includes(nombre)) {
   alert("Producto disponible");

 } else {

   alert("Producto no disponible");
 }
 */

 /*
 class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const productos = [];

productos.push(new Producto("multigimnasio", 389999));
productos.push(new Producto("bicicleta estatica", 235456));
productos.push(new Producto("cinta de correr", 204100));
productos.push(new Producto("barra olimpica", 54999));
productos.push(new Producto("polea para multigimnasio", 6375));
productos.push(new Producto("mancuerna de 10 kg", 37565));
productos.push(new Producto("disco olimpico engomado de 5 kg", 21728));


console.log(productos);

*/


/*
 const productos = [
   { id: 1, nombre: "multigimnasio", precio: 389999 },
   { id: 2, nombre: "bicicleta estatica", precio: 235456 },
   { id: 3, nombre: "cinta de correr", precio: 204100 },
   { id: 4, nombre: "barra olimpica", precio: 54999 },
 ];
*/

 /*
  let nombre = prompt("Ingrese el nombre del producto a buscar");

 const encontrado = productos.find((item) => item.nombre === nombre);

 if (encontrado) {
   alert(`
     Id: ${encontrado.id}
     Nombre: ${encontrado.nombre}
     Precio: ${encontrado.precio}
   `);
 } else {
   alert("Producto no encontrado");
 }
 */
/*
  let filtrados = productos.filter((item) => item.precio > 220000);
 console.log(filtrados);

 */

/*
 let precio = Number(prompt("Ingrese el precio mínimo"));

  let filtrados = productos.filter((item) => item.precio > precio);
 
  if (filtrados.length === 0) {
    alert("productos no encontrados");
  } else {
    filtrados.forEach((item) => {
      alert(`
        Id: ${item.id}
        Nombre: ${item.nombre}
        Precio: ${item.precio}
      `);
    });
  }

  */ 

  /*
   const descuentos = productos.map((item) => {
   return {
     id: item.id,
     nombre: item.nombre,
     precio: item.precio - item.precio * 0.21,
   };
 });
 console.log(descuentos);

 */

 /*

 const carrito = [
  { id: 1, nombre: "multigimnasio", precio: 389999 },
  { id: 2, nombre: "bicicleta estatica", precio: 235456 },
  { id: 3, nombre: "cinta de correr", precio: 204100 },
  { id: 4, nombre: "barra olimpica", precio: 54999 },
];

  const total = carrito.reduce((acum, item) => acum + item.precio, 0);
 console.log(total);

 */

 //numeros entre 25 y 55

 /*
 console.log(Math.round(Math.random() * 30 + 25));
 console.log(Math.round(Math.random() * 30 + 25));
 console.log(Math.round(Math.random() * 30 + 25));
*/

 // const generarAleatorio = (amplitud, desplazamiento) => {
//   return Math.round(Math.random() * amplitud + desplazamiento)
// }

// console.log(generarAleatorio(25, 5));
// console.log(generarAleatorio(25, 5));
// console.log(generarAleatorio(25, 5));
// console.log(generarAleatorio(25, 5)));
// console.log(generarAleatorio(25, 5)));

/*

 const nombres = [
   { nombre: "gonzalo", edad: 26, direccion: "AV" },
   { nombre: "nazarena", edad: 22, direccion: "AV1" },
   { nombre: "marcelo", edad: 54, direccion: "AV2" },
   { nombre: "viviana", edad: 53, direccion: "AV3" },
   
 ];

 const generarNombreAleatorio = () => {
   let index = Math.floor(Math.random() * nombres.length);

   return nombres[index];
 };

 let respuesta = prompt("Quieres ver un ganador?");

 while (respuesta != "no") {
   let ganador = generarNombreAleatorio();

   alert(`El ganador es ${ganador.nombre} con edad ${ganador.edad} y dirección ${ganador.direccion}`
   );

   respuesta = prompt("Quieres ver un ganador?");
 }

 */