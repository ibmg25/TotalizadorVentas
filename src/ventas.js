export class Ventas {
  mostrarCantidad(cantidad) {
    return cantidad
  }
  
  mostrarPrecio(precio) {
    return precio
  }

  mostrarEstado(estado) {
    return estado
  }

  mostrarImpuesto(estado) {
    let impuesto = 0;
    if (estado=="CA")
      impuesto = 0.0825
    if (estado=="NV")
      impuesto = 0.0800
    if (estado=="UT")
      impuesto = 0.0665
    if (estado=="TX")
      impuesto = 0.0625
    if (estado=="AL")
      impuesto = 0.0400
    return impuesto;
  }

  calcularPrecioNeto(cantidad, precio){
    return cantidad*precio;
  }

  calcularImpuesto(neto, impuesto){
    return neto*impuesto;
  }

  calcularTotal(neto, impuestoTotal) {
    return neto + impuestoTotal;
  }

  calcularFinal(neto, impuestoTotal) {
    let total = neto + impuestoTotal;
    if (total >= 1000 && total <= 2999)
      total = total - total*0.03;
    if (total >= 3000 && total <= 6999)
      total = total - total*0.05;
    return total;
  }
}

export default Ventas;
