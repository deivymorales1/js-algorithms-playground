/*
Dado un array de personas con nombres y apellidos crear una funcion para  ordenar el array por los apellidos en orden alfabético

*/

function ordenarApellidos(personas) {
  // crear una variable con un nuevo orden
  const apellidos = personas.map((persona) => persona.split(" ")[1]);
  // ordenar apellidos
  apellidos.sort();
  // Crear un nuevo array con nombres y apellidos
  const personasOrdenadas = apellidos.map((apellido) => {
    // Encontrar  el nombre y el apellido original correspondiente
    // al apellido encontrado
    const nombreOriginal = personas.find((nombreCompleto) => {
      return nombreCompleto.split(" ")[1] === apellido;
    });
    return nombreOriginal;
  });
  return personasOrdenadas;
}

ordenarApellidos([
  "Victor Robles",
  "Antonio Alcantarra",
  "Al Pacino",
  "Robert DeNiro",
  "Brad Pitt",
  "Sylvester Stallone",
]);
