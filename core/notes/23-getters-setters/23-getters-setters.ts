class Pessoa{
    constructor(
        private nome: string,
        private idade: string,
        private _segredo: string = '',
    ){}

    set segredo(segredo: string){
        this._segredo = segredo;
    }

    get segredo(): string{
        return this._segredo
    }
}

const fulano = new Pessoa('Zé martelo', '47')
fulano.segredo = 'Tentara pregar o morsa!!!'
console.log(fulano.segredo)

// Module mode
export default 1;