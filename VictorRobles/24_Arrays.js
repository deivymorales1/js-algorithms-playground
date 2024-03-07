/*
Crea una funcion a la cual le pasemos un array de nombre de archivo y nos devuelva un array con esos mismos archivos, pero si hay alguno duplicado debe estar numerado con un (numero de repeticiones) como hacen los sistemas operativos.

Ejemplos: 

renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);

Devuelve:
renombrarArchivos(['nombre', 'apellido', 'nombre(1)', 'nombre(2)'])
*/

function renombrarArchivos(archivos) {
  let resul = [];
  let contador = {}
  // Recorrro el array
  for (let i = 0; i < archivos.length; i++) {
    let archivo = archivos[i];
    // Verificar si el nombre dle archivo ya existe
    if (resul.includes(archivo)) {
      contador[archivo] = (contador[archivo] || 0) + 1;
      // Generamos el nuevo nombre para el archivo

      let nuevoNombre = archivo + "(" + contador[archivo] + ")";
      resul.push(nuevoNombre);
    } else {
      resul.push(archivo);
    }
  }
  return resul;
}

console.log(
  renombrarArchivos([
    "patricio",
    "calamardo",
    "cangrejo",
    "plankton",
    "patricio",
    "gary",
    "karen",
    "patricio",
  ])
);
