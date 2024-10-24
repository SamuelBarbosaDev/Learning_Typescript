export class Pessoa {
    constructor(
      public nome: string,
      public sobrenome: string,
      private idade: number,
      protected cpf: string,
    ) {}
  
    getIdade(): number {
      return this.idade;
    }
  
    getCpf(): string {
      return this.cpf;
    }
  
    getNomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome;
    }
}
  
class Aluno extends Pessoa {
    constructor(
      nome: string,
      sobrenome: string,
      idade: number,
      cpf: string,
      public sala: string,
    ) {
      super(nome, sobrenome, idade, cpf);
    }

    getNomeCompleto(): string {
      console.log('FAZENDO ALGO ANTES');
      const result = super.getNomeCompleto();
      return result + ' HEYYYYYYYY!!';
    }
}


const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00', '0001');

// Module mode
export default 1;