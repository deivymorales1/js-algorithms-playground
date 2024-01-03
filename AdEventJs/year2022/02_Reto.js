/*
Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

 01/06 es el 6 de enero, jueves. Cuenta.
 04/01 es el 1 de abril, un viernes. Cuenta.
 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año

Para realizar esta tarea, es necesario convertir las fechas del array objetos de fecha (date) de javascript y luego verificar que dia de la semana representan. En JavaScript, el metodo getDay() de un objeto Date devuelve un numero que respresenta el dia de la semana, donde 0 es domingo, 1 es lunes, 2 es martes,  y asi sucesivamente.

Si el dia de la semana esta entre luenes 1 y viernes 5, se otorgan horas extras.  Si cae en  sabado 6 o domingo 0,  no se otorgan horas extras.

*/

function countHours(year, holidays) {
  let hoursExtra = 0;
  // Funcion para comprobar año biciesto
  function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  // contar los dias que estamos pasando
  for (let i = 0; i < holidays.length; i++) {
    // construimos fecha en formato YYYY-MM-DD
    const dateStr = `${year}/${holidays[i]}`;
    const dateObj = new Date(dateStr);
    // debemos ver que es lunes a viernes
    if (dateObj.getDay() >= 1 && dateObj.getDay() <= 5) {
      hoursExtra += 2;
    }
  }
  return hoursExtra;
}
