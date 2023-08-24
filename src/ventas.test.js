import calcular, { mostrarCantidad, mostrarPrecio } from "./ventas.js";

describe("Calcular", () => {
  it("mostrar cantidad de items", () => {
    expect(mostrarCantidad(20)).toEqual(20);
  });

  it("mostrar precio por item", () => {
    expect(mostrarPrecio(10)).toEqual(10);
  });
});
