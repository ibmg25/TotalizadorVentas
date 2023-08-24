import {Ventas} from "./ventas.js";

describe("Calcular", () => {
  it("mostrar cantidad de items", () => {
    let ventas = new Ventas();
    expect(ventas.mostrarCantidad(20)).toEqual(20);
  });

  it("mostrar precio por item", () => {
    let ventas = new Ventas();
    expect(ventas.mostrarPrecio(10)).toEqual(10);
  });

  it("mostrar Estado", () => {
    let ventas = new Ventas();
    expect(ventas.mostrarEstado("TX")).toEqual("TX");
  });
});
