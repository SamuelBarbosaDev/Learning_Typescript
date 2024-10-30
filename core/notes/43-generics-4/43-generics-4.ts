type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
    cor: 'Dourado',
    apelido: ['Pantero', 'Calabreso', 'Birinjelo'],
    idade: 1.000000,
}

const apelido = obterChave(animal, 'apelido');
const cor = obterChave(animal, 'cor');

console.log(apelido, cor, obterChave(animal, 'idade'))