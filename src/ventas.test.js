import calcular from "./ventas.js";

describe("Calcular", () => {
  it("mostrar cantidad de items", () => {
    expect(calcular(20)).toEqual(20);
  });
});
