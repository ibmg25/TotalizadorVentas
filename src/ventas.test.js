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

  it("mostrar impuesto", () => {
    let ventas = new Ventas();
    expect(ventas.mostrarImpuesto("TX")).toEqual(0.0625);
  });

  it("calcular precio neto", () => {
    let ventas = new Ventas();
    expect(ventas.calcularPrecioNeto(5, 25)).toEqual(125);
  });

  it("calcular impuesto", () => {
    let ventas = new Ventas();
    expect(ventas.calcularImpuesto(ventas.calcularPrecioNeto(20, 3), ventas.mostrarImpuesto("TX"))).toEqual(3.75);
  });

  it("mostrar precio con impuesto", () => {
    let ventas = new Ventas();
    let neto = ventas.calcularPrecioNeto(20, 3);
    expect(ventas.calcularTotal(neto, ventas.calcularImpuesto(neto, ventas.mostrarImpuesto("TX")))).toEqual(63.75);
  });

  it("mostrar precio final con descuento para total menor o igual a 1000(3%)", () => {
    let ventas = new Ventas();
    let neto = ventas.calcularPrecioNeto(10, 200);
    expect(ventas.calcularFinal(neto, ventas.calcularImpuesto(neto, ventas.mostrarImpuesto("TX")))).toEqual(2061.25);
  });

  it("mostrar precio final con descuento para total entre 3000 y 6999 (5%)", () => {
    let ventas = new Ventas();
    let neto = ventas.calcularPrecioNeto(15, 400);
    expect(ventas.calcularFinal(neto, ventas.calcularImpuesto(neto, ventas.mostrarImpuesto("TX")))).toEqual(6056.25);
  });

  it("mostrar precio final con descuento para total entre 7000 y 9999 (7%)", () => {
    let ventas = new Ventas();
    let neto = ventas.calcularPrecioNeto(25, 360);
    expect(ventas.calcularFinal(neto, ventas.calcularImpuesto(neto, ventas.mostrarImpuesto("TX")))).toEqual(8893.125);
  });

  it("mostrar precio final con descuento para total entre 10000 y 29999 (10%)", () => {
    let ventas = new Ventas();
    let neto = ventas.calcularPrecioNeto(25, 450);
    expect(ventas.calcularFinal(neto, ventas.calcularImpuesto(neto, ventas.mostrarImpuesto("TX")))).toEqual(10757.8125);
  });
});
