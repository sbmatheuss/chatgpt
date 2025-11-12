// Criacao do array com objetos

let filmes = [
  {Titulo: "Toy Story 5", Ano: "2026", genero: "Animacao"},
  {Titulo: "Transformes", Ano: "2017", genero: "Ficcao"},
  {Titulo: "Titanic", Ano: "1990", genero: "Romance"}
]

// Filtra filmes que foram lancados depois de 2015
let recentes = filmes.filter(filme => filme.Ano > 2015 );

recentes.forEach(filme => {
  console.log(`${filme.Titulo} (${filme.Ano})`)
})