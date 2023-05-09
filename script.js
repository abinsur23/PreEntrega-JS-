
let nombreUser = prompt("Hola. Cual es tu nombre?")


const dolarOficial = 235.19;

while (true) {
  let precioJuegoDolar = prompt(`Hola ${nombreUser} Ingresa el precio del juego en dólares`);
  let descuento = prompt("¿Tienes algún descuento? Ingresa el porcentaje (solo el número, sin el signo de porcentaje)");
  alert(`${nombreUser} Recuerda que el calculo esta hecho en base al precio del dolar oficilal de hoy que es $${dolarOficial}`)

    //en este condicional pregunto si tiene algun descuento, en caso de que si hago el calculo pero en caso de que no soolo hago un alert con el resultado de el precio convertido a peso mas los impuestos.


  if (descuento > 0) {
    let precioDescuento = precioJuegoDolar * (1 - descuento / 100); 
    let precioJuegoPesos = precioDescuento * dolarOficial;
    let impuestos = precioJuegoPesos * 0.74; 
    let precioJuegoTotal = precioJuegoPesos + impuestos; 
    alert("El precio del juego en pesos, incluyendo impuestos y descuento es: $" + precioJuegoTotal);
  } else {
    let precioJuegoPesos = precioJuegoDolar * dolarOficial; 
    let impuestos = precioJuegoPesos * 0.74; 
    let precioJuegoTotal = precioJuegoPesos + impuestos; 
    alert("El precio del juego en pesos, incluyendo impuestos, es: $" + precioJuegoTotal);
  }

  let seguirCalculando = confirm("¿Deseas seguir calculando precios de juegos?");

  if (!seguirCalculando) {
    break;
  }
}
