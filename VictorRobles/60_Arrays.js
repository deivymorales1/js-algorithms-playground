/* 
Programa que calcule el beneficio de un producto despues de restarle:
-20% de descuento
-21% de iva
-15% de irpf
*/

function beneficioNeto(valorProducto){

  let descuento = valorProducto * 20 / 100;
  let iva = (valorProducto - descuento) * 21 / 100;
  let irpf = (valorProducto - descuento - iva) * 15 / 100;

  let res = valorProducto - descuento - iva - irpf;
  
  return `El beneficio de la venta del producto es `, res 

 
}

console.log(beneficioNeto(995));