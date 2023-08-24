import {Ventas} from "./ventas";

const cantidad = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio-items");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ventas = new Ventas();
  const cant = Number.parseInt(cantidad.value);
  const prec = Number.parseInt(precio.value);

  div.innerHTML = "<p> Cantidad de items: " + ventas.mostrarCantidad(cant) + "</p>";
  div.innerHTML += "<p> Precio por item: " + ventas.mostrarPrecio(prec) + "</p>";
});
