// Criação do array com objetos
let alunos = [
  { nome: "Ana", idade: 17, nota: 8 },
  { nome: "Bruno", idade: 18, nota: 6 },
  { nome: "Carla", idade: 16, nota: 9 }
];

// Filtrar alunos com nota >= 7
let aprovados = alunos.filter(aluno => aluno.nota >= 7);

// Exibir apenas os nomes dos aprovados
aprovados.forEach(aluno => {
  console.log(aluno.nome);
});
