import {Ventas} from "./ventas";

const cantidad = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio-items");
const estado = document.querySelector("#estado");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ventas = new Ventas();
  const cant = Number.parseInt(cantidad.value);
  const prec = Number.parseInt(precio.value);
  const est = estado.value;

  div.innerHTML = "<p> Cantidad de items: " + ventas.mostrarCantidad(cant) + "</p>";
  div.innerHTML += "<p> Precio por item: " + ventas.mostrarPrecio(prec) + "</p>";
  div.innerHTML += "<p> Estado: " + ventas.mostrarEstado(est) + "</p>";
  div.innerHTML += "<p> Impuesto del Estado: " + ventas.calcularImpuesto(est) + "</p>";
  div.innerHTML += "<p> Precio Neto: " + ventas.calcularPrecioNeto(cant, prec) + "</p>";
});
