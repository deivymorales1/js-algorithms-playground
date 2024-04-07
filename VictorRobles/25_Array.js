/*
Crea una funcion a la cual le pasemos un array de nombre de archivo y nos devuelva un array con esos mismos archivos, pero si hay alguno duplicado debe estar numerado con un (numero de repeticiones) como hacen los sistemas operativos.

Ejemplos: 

renombrarArchivos(["nombre.jpg", "apellido.doc", "nombre.png", "nombre.png", "nombre.jpg", "nombre.jpg"]);

Devuelve:
renombrarArchivos(['nombre.jpg', 'apellido.doc', 'nombre.png', 'nombre(1).png', 'nombre(1).jpg', 'nombre(2).jpg])
*/

function renombrarArchivos(archivos) {
  // Declaro variables de almacenamiento
  let result = []
  let contador = {}
  // Recorro el array
  for(let i = 0; i < archivos.length; i++){
    let archivo = archivos[i]; // nombre del archivo
    let div = archivo.split('.')
    let name = div[0]
    let ext = div[1] // Divido.
    // Verificar si el nombre del archivo ya existe 
    if(result.includes(archivo)){
      contador[archivo] = (contador[archivo] || 0) + 1;
      // Generamos el nuevo nombre
      let nuevoNombre = name + "(" + contador[archivo] + ")" + "."  + ext;
      result.push(nuevoNombre)
    } else {
      result.push(archivo)
    }
  }
  return result
}

console.log(
  renombrarArchivos([
    "nombre.jpg",
    "apellido.doc",
    "nombre.jpg",
    "nombre.png",
    "nombre.png",
    "nombre.jpg",
    "nombre.jpg",
  ])
);
