console.log('Trabalhando com Loops');


const listaDeDestinos = new Array(
    'São Paulo',
    'Rio de Janeiro',
    'Salvador',
    'Minas Gerais'
)
const idadeComprador = 13;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`\nDestinos Disponiveis: \n${listaDeDestinos}`);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0;
let destinoExiste = false;
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;

}
console.log("Destino Existe: ". destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let i= 0 ; i < 3 ; i++ ){

    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }


}