interface PessoaProtocolo<T, U>{
    nome: T;
    sobrenome: T;
    idade: U;
}

interface PessoaProtocolo2<T = string, U = number>{
    nome: T;
    sobrenome: T;
    idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
    nome: 'Fulano',
    sobrenome: 'De tal',
    idade: 1000,
}

const aluno2: PessoaProtocolo2 = {
    nome: 'Fulano',
    sobrenome: 'De tal',
    idade: 1000,
}

const aluno3: PessoaProtocolo<number, number> = {
    nome: 777,
    sobrenome: 7,
    idade: 1000,
}

console.log(aluno1, aluno2, aluno3);

export default 1;