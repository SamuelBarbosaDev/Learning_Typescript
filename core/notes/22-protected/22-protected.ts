export class Empresa {
    constructor(
        readonly nome: string,
        protected readonly colaboradores: Colaborador[] = [],
    ){}

    adicionaColaborador(colaborador: Colaborador): void{
        this.colaboradores.push(colaborador)
    }

    mostraColaboradores(): void{
        for (let colaborador of this.colaboradores){
            console.log(colaborador);
        }
    }
}

class Colaborador{
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ){}
}

class AgiotagemLTDA extends Empresa{
    constructor(){
        super('AgiotagemLTDA',)
    }
}

const agiotagemLtda = new AgiotagemLTDA();
const colaborador = new Colaborador('Zé', 'Alicate');
agiotagemLtda.adicionaColaborador(colaborador);
agiotagemLtda.mostraColaboradores();
