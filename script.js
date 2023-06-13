// Clase Vehiculo
class Vehiculo {
  constructor(dominio, marca, modelo) {
    this.dominio = dominio;
    this.marca = marca;
    this.modelo = modelo;
  }
}

// Crear objetos de vehículos
const vehiculo1 = new Vehiculo("aa111aa", "fiat", "punto");
const vehiculo2 = new Vehiculo("aa222aa", "ford", "fiesta");
const vehiculo3 = new Vehiculo("aa333aa", "renault", "clio");

// Almacenar los vehículos en un array
const vehiculosEnPlaya = [vehiculo1, vehiculo2, vehiculo3];

// Convertir los objetos de vehículo a JSON
const vehiculosEnPlayaJSON = JSON.stringify(vehiculosEnPlaya);

// Guardar los vehículos en el almacenamiento local
localStorage.setItem("vehiculosEnPlaya", vehiculosEnPlayaJSON);

// Obtener los vehículos del almacenamiento local
const vehiculosEnPlayaGuardados = localStorage.getItem("vehiculosEnPlaya");

// Convertir los vehículos de JSON a objetos
const vehiculosEnPlayaRecuperados = JSON.parse(vehiculosEnPlayaGuardados);

// Obtener el contenedor principal del DOM
const contenedorPrincipal = document.body;

// Crear el elemento label para "Dominio"
const labelDominio = document.createElement("label");
labelDominio.textContent = "Dominio:";
contenedorPrincipal.appendChild(labelDominio);

// Crear el elemento input para el dominio
const inputDominio = document.createElement("input");
inputDominio.type = "text";
inputDominio.id = "inputDominio";
contenedorPrincipal.appendChild(inputDominio);

// Crear el elemento label para "Marca"
const labelMarca = document.createElement("label");
labelMarca.textContent = "Marca:";
contenedorPrincipal.appendChild(labelMarca);

// Crear el elemento input para la marca
const inputMarca = document.createElement("input");
inputMarca.type = "text";
inputMarca.id = "inputMarca";
contenedorPrincipal.appendChild(inputMarca);

// Crear el elemento label para "Modelo"
const labelModelo = document.createElement("label");
labelModelo.textContent = "Modelo:";
contenedorPrincipal.appendChild(labelModelo);

// Crear el elemento input para el modelo
const inputModelo = document.createElement("input");
inputModelo.type = "text";
inputModelo.id = "inputModelo";
contenedorPrincipal.appendChild(inputModelo);

// Crear el elemento button para buscar el vehículo
const btnBuscar = document.createElement("button");
btnBuscar.textContent = "Buscar Vehículo";
contenedorPrincipal.appendChild(btnBuscar);

// Crear el elemento button para nueva búsqueda
const btnNuevaBusqueda = document.createElement("button");
btnNuevaBusqueda.textContent = "Nueva Búsqueda";
contenedorPrincipal.appendChild(btnNuevaBusqueda);

// Crear el elemento div para mostrar el resultado
const contenedorResultado = document.createElement("div");
contenedorResultado.id = "resultado";
contenedorPrincipal.appendChild(contenedorResultado);

// Agregar evento de clic al botón de búsqueda
btnBuscar.addEventListener("click", buscarVehiculo);

// Agregar evento de clic al botón de nueva búsqueda
btnNuevaBusqueda.addEventListener("click", reiniciarBusqueda);

// Función para buscar el vehículo
function buscarVehiculo() {
  const dominioBuscado = inputDominio.value;
  const marcaBuscada = inputMarca.value;
  const modeloBuscado = inputModelo.value;

  const vehiculoBuscado = vehiculosEnPlayaRecuperados.find(vehiculo => {
    return (
      vehiculo.dominio === dominioBuscado &&
      vehiculo.marca === marcaBuscada &&
      vehiculo.modelo === modeloBuscado
    );
  });

  if (vehiculoBuscado) {
    contenedorResultado.textContent = "Se encontró el vehículo en Playa Libres Del Sur. Deberá presentar:";
    mostrarDocumentacionRequerida();
  } else {
    contenedorResultado.textContent = "No se encontró el vehículo en Playa Libres Del Sur.";
  }
}

// Función para mostrar la documentación requerida
function mostrarDocumentacionRequerida() {
  const documentacion = [
    "DNI original y legible",
    "Licencia de conducir vigente",
    "Cédula verde o azul según corresponda",
    "Seguro vigente"
  ];

  const listaDocumentacion = document.createElement("ul");
  documentacion.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listaDocumentacion.appendChild(listItem);
  });

  contenedorResultado.appendChild(listaDocumentacion);
}

// Función para reiniciar la búsqueda
function reiniciarBusqueda() {
  inputDominio.value = "";
  inputMarca.value = "";
  inputModelo.value = "";
  contenedorResultado.textContent = "";
}
