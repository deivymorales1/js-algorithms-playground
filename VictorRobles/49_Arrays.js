function elMasPequenio(array){
          let numMenor = Infinity;
    for(let i = 0; i < array.length;i++){

      if(array[i] < numMenor){
        numMenor = array[i]
      }
    }
    return numMenor
}

console.log(elMasPequenio([8,9,99,88,77,2,12,13,6]));