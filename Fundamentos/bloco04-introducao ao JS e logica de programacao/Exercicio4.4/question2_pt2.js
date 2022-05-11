function clone(array) {
  let contador1 = 0;
  let contador2 = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (contador1 < array[i]) {
      contador1 = array[i];
    } else if (contador1 == array[i]) {
      console.log("aki");
    }
  }
}

let grupo = [2, 3, 2, 5, 8, 2, 3];
clone(grupo);
