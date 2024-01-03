/*
Recuperacion de datos de almacenamiento

Si tienes datos almacenados en un formato de pares clave-valor,  como localStorage o sessionStorage, puedes utilizar Object.fromEntries() para convertirlos en un objeto para facilitar su manipulacion y uso en tu aplicacion.

const storedData = localStorage.getItem('data');
const keyValuePairs = JSON.parse(storedData);
const dataObject = Object.fromEntries(keyValuePairs);
console.log(dataObject);
*/
