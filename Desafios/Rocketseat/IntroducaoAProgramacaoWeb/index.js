const alunosDaTurmaA = [
  {
    nome: "Diego",
    nota: 10
  },
  {
    nome: "Diego",
    nota: 10
  },
  {
    nome: "Fulano",
    nota: 2
  },
  {
    nome: "Mais um aluno",
    nota: 10
  }
]

const alunosDaTurmaB = [
  {
    nome: "Cleiton",
    nota: 10
  },
  {
    nome: "Robson",
    nota: 10
  },
  {
    nome: "Siclano",
    nota: 2
  },
  {
    nome: "Novo Aluno",
    nota: 5
  }
]

function calculaMedia(alunos) {
  let soma = 0
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
  return soma / alunos.length
}

function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A média da turma ${turma} foi de ${media}. Parabens`)
  } else {
    console.log(`A média da turma ${turma} é menor que 5`)
  }
}

function marcarComoReprovado(aluno) {
  aluno.reprovado = false
  if (aluno.nota < 5) {
    aluno.reprovado = true
  }
}

function enviarMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} esta reprovado`)
  }
}

function alunosReprovados(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno)
    enviarMensagemReprovado(aluno)
  }
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

enviaMensagem(media1, 'TurmaA')
enviaMensagem(media2, 'TurmaB')

alunosReprovados(alunosDaTurmaA)
alunosReprovados(alunosDaTurmaB)

