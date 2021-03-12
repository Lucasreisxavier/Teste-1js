console.log('trabalhando com condicionais');


const listaDeDestinos = new Array(
    'São Paulo',
    'Rio de Janeiro',
    'Salvador',
    'Minas Gerais'
)
const idadeComprador = 20
const estaAcompanhada = true
const temPassagemComprada = true
console.log(`Destinos Disponiveis: ${listaDeDestinos}`);

if (
    idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem! ");
    listaDeDestinos.splice(1, 1); //recomendo um item
} else {
    console.log("Não é maior de idade não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >18 && temPassagemComprada){
    console.log("Boa Viagem! ");
}else{
    console.log("Não é Maior de Idade")
}


console.log(`Destinos Disponiveis: ${listaDeDestinos}`);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
