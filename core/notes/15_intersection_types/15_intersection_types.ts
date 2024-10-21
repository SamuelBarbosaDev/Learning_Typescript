type Nome = { nome: string };
type Sobrenome = { sobrenome: string };
type Idade = { idade: number };
type Pessoa = Nome & Sobrenome & Idade;

const pessoa: Pessoa = {
    nome: 'Fulano',
    sobrenome: 'De Tal',
    idade: 30
};

// Module mode
export default 1;