/*
Conversion de datos estructurados

Si tienes una lista de pares clave-valor almacenada en una estructura de datos, como un arrays, puedes utilizar Object.fromEntries() para convertirla en un objeto. Esto resulta util cuando deseas acceder a los valores utilizando las claves en lugar de indices numericos.

const keyValuePairs = [['nombre', 'John'], ['edad', 30], ['ciudad', 'Nueva York']];
const dataObject = Object.fromEntries(keyValuePairs);
console.log(dataObject); // { nombre: 'John', edad: 30, ciudad: 'Nueva York' }


*/
