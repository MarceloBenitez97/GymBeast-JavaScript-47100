//Algoritmo con condicional (if, else)

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


const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const iva = (precio) => precio * 0.21;

let precioProducto = Number(prompt("Ingrese el precio del producto que desea adquirir"));
let descuento = Number(prompt("Ingrese el descuento a aplicar"));

// precioProducto + iva - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

alert(nuevoPrecio);



