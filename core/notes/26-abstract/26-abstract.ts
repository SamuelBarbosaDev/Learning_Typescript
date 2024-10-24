abstract class Personagem{
    protected abstract emoji: string
    constructor(
        private nome: string,
        private ataque: number,
        private vida: number,
    ){}

    atacar(personagem: Personagem): void{
        this.fraseDeEfeito();
        personagem.perderVida(this.ataque);
    };

    perderVida(dano: number): void{
        this.vida -= dano;
        console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`,);
    }

    abstract fraseDeEfeito(): void;
}

class Bardo extends Personagem{
    protected emoji = '\u{1F9DD}';

    fraseDeEfeito(): void {
        console.log(this.emoji + ':  Sucumba!!!')
    }
}

class Inimigo extends Personagem{
    protected emoji = '\u{1F9DF}'

    fraseDeEfeito(): void {
        console.log(this.emoji + ':  Fala fi.')
    }
}

const bardo = new Bardo('Zé da moeda', 47, 100);
const inimigo = new Inimigo('Haddad', 13, 666)

bardo.atacar(inimigo);
bardo.atacar(inimigo);
bardo.atacar(inimigo);
inimigo.atacar(bardo);
inimigo.atacar(bardo);
inimigo.atacar(bardo);
