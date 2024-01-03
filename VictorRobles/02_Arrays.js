/*
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix) crear una función que la simplifique

simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
*/

function simplificarRuta(ruta) {
  // Crear variable pila para almacenar las partes de la ruta
  let pila = [];
  // Dividir la ruta en sus diferentes partes
  const partes = ruta.split("/");
  // recorrer cada parte
  for (const parte of partes) {
    // Si la parte es .. quito el ultimo elemento
    if (parte === "..") {
      pila.pop();
    } else if (parte !== "." && parte !== "") {
      pila.push(parte);
    }
  }
  return "/" + pila.join("/");
}
console.log(simplificarRuta("/home/")); // /home
