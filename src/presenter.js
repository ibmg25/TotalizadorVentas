import calcular from "./ventas";

const cantidad = document.querySelector("#cantidad-items");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantidad.value);

  div.innerHTML = "<p> Cantidad de items: " + calcular(cant) + "</p>";
});
