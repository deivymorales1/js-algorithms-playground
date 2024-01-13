/*
Dado un array de usuarios, mostrar solo los que tengan mas de 20 anios y en su nombre tenga la letra o y n
*/

const usuarios = [
  { nombre: "Antonio", edad: 20 },
  { nombre: "Juan", edad: 23 },
  { nombre: "Pepe", edad: 12 },
  { nombre: "Raul", edad: 28 },
  { nombre: "Paco", edad: 38 },
  { nombre: "Jason", edad: 56 },
];

function filtrarUsuarios(usuarios) {
  // Revisar que me llegue el array de objetos
  // Validar si pasamos un array
  let datos = [];
  // Las letras que se buscan
  let letrasbuscadas = ["o", "n"];
  // Recorremos el bucle
  for (let usuario of usuarios) {
    // Guardamos cada nombre
    let nombre = usuario["nombre"].toLowerCase();
    // Guardamos la edad
    let edad = usuario['edad'] >= 20

    // Evaluamos a cada nombre
    let cumpleCondicion = letrasbuscadas.every(letra =>
      nombre.includes(letra)  
    )
    // Si cumple lo ingresamos al array
    if(cumpleCondicion && edad){
      datos.push(usuario)
    }
  }
  return datos;
}

console.log(filtrarUsuarios(usuarios));
