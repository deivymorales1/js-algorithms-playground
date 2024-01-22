/*
Crea una función que simule el lanzamiento de dos dados.
 
Ejemplos:
dados();
*/
function dados() {
  console.log("Lanzamiento de los dados !!! ");

  setTimeout(() => {
    let dadoOne = Math.floor(Math.random() * (6 - 1) + 1);
    console.log("Resultado del primer dado: " + dadoOne);
  }, 5000);

  setTimeout(() => {
    let dadoTwo = Math.floor(Math.random() * (6 - 1) + 1);
    console.log("Resultado del segundo dado: " + dadoTwo);
  }, 5000);
}

dados();
