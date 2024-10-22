class Pessoa{
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ){}

    getIdade(): number{
        return this.idade
    }

    getCpf(): string{
        return this.cpf;
    }

    getNomeCompleto(): string{
        return `${this.nome} ${this.sobrenome}`
    }
}

class Cliente extends Pessoa{
    getNomeCompleto(): string {
        return `Origem cliente: ${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa('Humano', 'Seu sobrenome', 21, '010.010.010-10');
const aluno = new Cliente('Fulano', 'De Tal', 99, '000.000.000-00');
