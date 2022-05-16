//exercicio1
const criaPessoaContratada = (nome) => {

    const email = (nome) => nome.split(' ').join('_').toLowerCase()
    const novaPessoaContratada = {
        nomeCompleto: nome,
        email: `${email(nome)}@trybe.com`
    }
    return novaPessoaContratada
}

const novosEmpregados = (criaPessoaContratada) => {
    const empregados = {
        id1: criaPessoaContratada("Pedro Guerra"),
        id2: criaPessoaContratada("Luiza Drumond"),
        id3: criaPessoaContratada("Carla Paiva"),
    }

    return empregados
}

// exercicio2


const numerosSortiado = (num, callback) => {
    min = Math.ceil(1);
    max = Math.floor(5);
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return callback(num, resultado)
}


const seGanhou = (numero, resultado) =>
    numero == resultado ? "vc ganhou" : "tente novamente"


const resultado = numerosSortiado(1, seGanhou)
resultado


// exercicio3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaRespostas = (certas, estudante) => {
    let pontuacaoFinal = 0
    for (let pergunta = 0; pergunta < certas.length; pergunta += 1) {
        if (certas[pergunta] == estudante[pergunta]) {
            pontuacaoFinal += 1
        } else if (estudante[pergunta] == 'N.A') {
            continue
        } else {
            if (pontuacaoFinal > 0) {
                pontuacaoFinal += -0.5
            }
        }
    }
    return pontuacaoFinal
}

const hof = (right, student, callback) => callback(right, student)

const pontucao = hof(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaRespostas)


pontucao