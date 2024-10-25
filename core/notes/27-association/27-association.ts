class Escritor{
    private _ferramenta: Ferramenta | null = null

    constructor(private _nome: string){};

    get nome():string{
        return this._nome;
    }

    set ferramenta(ferramenta: Ferramenta | null){
        this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null{
        return this._ferramenta;
    }

    escrever(): void{
        if(this.ferramenta === null){
            console.log('Não posso escrever sem ferramenta...');
            return;
        }
        this.ferramenta.escrever();
    }
}

abstract class Ferramenta{
    constructor(private _nome: string){}

    abstract escrever():void;

    get nome(): string{
        return this._nome
    }
}

class Caneta extends Ferramenta{
    escrever(): void {
        console.log(`${this.nome} está escrevendo...`)
    }
}

class MaquinaEscrever extends Ferramenta{
    escrever(): void {
        console.log(`${this.nome} está escrevendo...`)
    }
}

const escritor = new Escritor('Fulano');
const caneta = new Caneta('Bic');
const maquinaDeEscrever = new MaquinaEscrever('Máquina');

escritor.ferramenta = caneta;
escritor.escrever()