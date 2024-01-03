/*
Dadas dos fechas, crea una función que me proporcione la diferencia de dias entre ellas

diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
*/

function diferenciaDeDias(fecha1, fecha2) {
  // Dar el formato correcto a las fechas
  fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
  fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);
  // Obtener la diferencia en milisegunos entre las dos fechas
  const diferenciaMilisegundos = Math.abs(fecha1.getTime() - fecha2.getTime());
  // Dividir la diferencia en milisegundos entre el numero de milisegundos que tiene un dia y redondearlo para sacar los dias.
  const dias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
  if (isNaN(dias)) {
    return "Formato incorrecto de fecha";
  }

  return "La diferencia son " + dias + " dias";
}
console.log(diferenciaDeDias("Dec 1, 2023", "Dec 24, 2023"));
console.log(diferenciaDeDias("3/3/2023", "20/3/2023"));
