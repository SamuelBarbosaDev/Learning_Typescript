type TipoNome = {
    nome: string;
}

type TipoSobrenome = {
    sobrenome: string;
}

type TipoNomeCompleto = {
    nomeCompleto: () => string;
}

class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto{
    constructor(
        public nome: string,
        public sobrenome: string
    ){}

    nomeCompleto(): string{
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Fulano', 'De tal');
console.log(pessoa.nomeCompleto());

// Module mode
export default 1;