var datos, i;
var personas = [
  { nombre: "Juan", apellido: "Hernández" },
  { nombre: "Adrian", apellido: "Domínguez" },
  { nombre: "Luis", apellido: "López" },
  { nombre: "Andres", apellido: "Jiménez" },
  { nombre: "Pedro", apellido: "García" },
  { nombre: "Juan", apellido: "Pérez" }
];
var panel = document.querySelector("#panel");

function limpiarForm() {
  document.querySelector("#nombre").value = "";
  document.querySelector("#apellido").value = "";
}

function cargarDatos() {
  panel.textContent = "";
  personas.forEach(x => {
    datos = document.createElement("option");
    datos.innerText = `${x.nombre} ${x.apellido}`;
    panel.append(datos);
  });
}

function crear() {
  let n = document.querySelector("#nombre").value;
  let a = document.querySelector("#apellido").value;
  personas = [...personas, { nombre: n, apellido: a }];
  limpiarForm();
  cargarDatos();
  
}

function pnlClick() {
  i = panel.selectedIndex;
  document.querySelector("#nombre").value = personas[i].nombre;
  document.querySelector("#apellido").value = personas[i].apellido;
}

function actualizar() {
  personas[i].nombre = document.querySelector("#nombre").value;
  personas[i].apellido = document.querySelector("#apellido").value;
  limpiarForm();
  cargarDatos();
}

function borrar() {
  personas.splice(i, 1);
  limpiarForm();
  cargarDatos();
}

cargarDatos();
