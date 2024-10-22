class Empresa {
    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void{
        this.colaboradores.push(colaborador);
    }
}

class Colaborador{
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ){}
}

const empresa = new Empresa('LTDA', '00.000.000/0000-00')
const colaborador = new Colaborador('Fulando', 'De Tal')
empresa.adicionaColaborador(colaborador)

// Module mode
export default 1;
