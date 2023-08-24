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
    {
      impuesto = 0.0825
    }
    if (estado=="NV")
    {
      impuesto = 0.0800
    }
    if (estado=="UT")
    {
      impuesto = 0.0665
    }
    if (estado=="TX")
    {
      impuesto = 0.0625
    }
    if (estado=="AL")
    {
      impuesto = 0.0400
    }
    return impuesto;
  }

  calcularPrecioNeto(cantidad, precio){
    return cantidad*precio;
  }

  calcularImpuesto(neto, impuesto){
    return neto*impuesto;
  }
}

export default Ventas;
