/*
Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo

calcularAreaPoligono( {tipo: 'triangulo', base: 6, altura: 9 })
*/

poligono = {
  tipo: "triangulo",
  base: 6,
  altura: 9,
};

function calcularAreaPoligono(figura) {
  
  if (figura.tipo === "triangulo") {
    return (figura.base * figura.base) / 2;
  }
  if (figura.tipo === "rectangulo") {
    return figura.base * figura.altura;
  }
  if (figura.tipo === "cuadrado") {
    return figura.base * figura.base;
  }
}
console.log(calcularAreaPoligono(poligono));
