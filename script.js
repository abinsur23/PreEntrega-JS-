
class Vehiculo {
  constructor(dominio, marca, modelo) {
    this.dominio = dominio;
    this.marca = marca;
    this.modelo = modelo;
  }
}

const vehiculo1 = new Vehiculo("abc123", "ford", "fiesta");
const vehiculo2 = new Vehiculo("abc456", "fiat", "palio");
const vehiculo3 = new Vehiculo("abc789", "renault", "clio");

const vehiculosEnPlaya = [vehiculo1, vehiculo2, vehiculo3];

// Mediante un prompt consultamos qué vehículo busca.
let dominioBuscado = prompt("¿Cuál es el dominio del vehículo que estás buscando?");

// Buscamos el vehículo en el array según el dominio ingresado.
const vehiculoBuscado = vehiculosEnPlaya.find(vehiculo => vehiculo.dominio === dominioBuscado);

// Verificamos si se encontró el vehículo y mostramos la información correspondiente.
if (vehiculoBuscado) {
  let mensaje = "El vehículo con dominio " + vehiculoBuscado.dominio + " se encuentra en la playa Libres Del Sur.";
  let respuesta = confirm(mensaje + " ¿Sabes cuál es la documentación necesaria para liberar el vehículo?");

  if (respuesta) {
    alert("¡Perfecto! Estás al tanto de la documentación necesaria.");
  } else {
    let listaDocumentos = "Documentación necesaria:\n\n" +
      "- Cédula verde o azul según corresponda.\n" +
      "- Licencia de conducir vigente.\n" +
      "- Comprobante de cobertura del seguro.\n" +
      "- DNI original.";

    alert(listaDocumentos);
  }
} else {
  alert("El vehículo no se encuentra en ninguna playa.");
}