// cadastro dos animais

let animais = []

form.addEventListener("submit", (e) => {
    e.preventDefault();
    adicionarAnimal();

    
})
/*
function VoltarIndex(){
    window.location.href = "index.html"
}
*/
function adicionarAnimal () {
    const nome = document.getElementById("nome").value
    const especie = document.getElementById("especie").value
    const raca = document.getElementById("raca").value
    const peso = document.getElementById("peso").value
    // foi criada const animal pra receber os valores digitados no formulario,
    const animal ={ nome: nome, especie: especie, raca: raca, peso: peso};
    // aqui vamos pegar o objeto animal formado pelos valores guardados e joga-los dentro do array 
    animais.push(animal)

    document.getElementById("nome").value =""
    document.getElementById("especie").value =""
    document.getElementById("raca").value =""
    document.getElementById("peso").value =""

    console.log (animais)
}

// cadastro dos Serviços


let serviços = []

form.addEventListener("submit", (e) => {
    e.preventDefault();
    adicionarAnimal();

})

function adicionarServiço () {
    const descricao = document.getElementById("descrição").value
    const animalSelect = document.getElementById("animal").value
    const preco = document.getElementById("preço").value
    // foi criada const animal pra receber os valores digitados no formulario,
    const serviço ={ descricao: descricao, animalSelect: animalSelect, preco: preco};
    // aqui vamos pegar o objeto animal formado pelos valores guardados e joga-los dentro do array 
    serviços.push(serviço)

    document.getElementById("descrição").value =""
    document.getElementById("animal").value =""
    document.getElementById("preço").value =""

    console.log (animais)
}