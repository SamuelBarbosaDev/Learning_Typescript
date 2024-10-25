interface InterfaceNome {
    nome: string;
}

interface InterfaceSobrenome {
    sobrenome: string;
}

interface InterfaceNomeCompleto {
    nomeCompleto(): string;
}

interface InterfacePessoa extends InterfaceNome, InterfaceSobrenome, InterfaceNomeCompleto{}

class Pessoa implements InterfacePessoa{
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