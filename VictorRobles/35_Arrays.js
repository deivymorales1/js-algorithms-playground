/*
Crea un programa que dado dos arrays de lenguajes frontend y backend y
dado un parametro que sera un array cuyo los nombres de los dos lenguajes
nos diga si son compatibles o no.

Solo pueden ser compatibles lenguajes front con uno backend

Ejemplos: 
sonCompatibles(['HTML', 'PHP']) // true
sonCompatibles(['PHP', 'PYTHON']) // false
*/

function sonCompatibles(arrayLenguages){
  
  // Array frontend
  let front = ["HTML", 'JAVASCRIPT', 'CSS'];

  // Array backend
  let back = ['PYTHON', 'PHP', 'JAVASCRIPT'];

  // Access the values of the array
  let fr = arrayLenguages[0].toUpperCase()
  let bc = arrayLenguages[1].toUpperCase()

  let result = (front.includes(fr) && back.includes(bc) && fr !== bc) ? true : false;
  return result
}

console.log(sonCompatibles(["php", "PYTHON"]));






