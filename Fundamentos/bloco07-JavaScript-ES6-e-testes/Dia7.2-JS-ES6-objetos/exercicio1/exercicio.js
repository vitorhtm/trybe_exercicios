let lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 200,
  professor: "Maria Clara",
  turno: "manhã",
};
let lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
  turno: "noite",
};
let lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};
const allLessons = [lesson1, lesson2, lesson3];

function reporta(professor) {
  const result = {
    professor: professor,
    materias: [],
    estudantes: 0,
  };

  for (let lesson of allLessons) {
    lesson;
    if (lesson.professor == professor) {
      result.materias.push(lesson.materia);
      result.estudantes += lesson.numeroEstudantes;
    }
  }
  return result;
}

const resposta = reporta("Maria Clara");
console.log(resposta);

// function matematica(lesson) {
//   if (lesson.materia == "Matemática") {
//     return lesson.numeroEstudantes;
//   }
//   return 0;
// }

// const estudatesDeMateematica = allLessons.map(matematica);

// const totalEstudantes = estudatesDeMateematica.reduce(
//   (prev, cur) => prev + cur,
//   0
// );

// totalEstudantesMatematica = { totalEstudantes };
