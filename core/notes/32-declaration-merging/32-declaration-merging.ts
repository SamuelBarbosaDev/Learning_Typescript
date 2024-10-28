interface Pessoa{
    nome: string;
};

interface Pessoa{
    readonly sobrenome: string;
    readonly enderecos: readonly string[];
}

interface Pessoa{
    idade?: number;
}

const pessoa: Pessoa = {
    nome: 'Fulano',
    sobrenome: 'De tal',
    enderecos: ['Luz vermelha'],
    idade: 16
}

export default 1;