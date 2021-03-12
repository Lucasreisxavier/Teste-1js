console.log('trabalhando com listas');


const listaDeDestinos = new Array (
    'São Paulo',
    'Rio de Janeiro',
    'Salvador',
    'Minas Gerais'
)


listaDeDestinos.push(`São Tiago`);
console.log(`Destinos Disponiveis: ${listaDeDestinos}`);


listaDeDestinos.splice(3,4);
console.log(`Destinos Disponiveis: ${listaDeDestinos}`);

console.log(listaDeDestinos[1], listaDeDestinos[0]);