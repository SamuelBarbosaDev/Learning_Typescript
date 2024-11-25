/*
O padrão de projeto Facade fornece uma interface simplificada para 
um conjunto complexo de classes, bibliotecas ou frameworks. Ele é útil
para reduzir a complexidade do sistema e facilitar a interação com 
um subsistema complicado.

Exemplo em TypeScript: Facade

Vamos criar um exemplo onde temos um sistema de home theater 
com várias classes para diferentes componentes (como DVD player, 
projetor e sistema de som). O Facade fornecerá uma interface simplificada 
para controlar todo o sistema de home theater.
*/

// Passo 1: Definir as Classes do Subsystema
class DVDPlayer {
    on(): void {
        console.log('DVD Player is on.');
    }

    play(movie: string): void {
        console.log(`Playing movie: ${movie}.`);
    }

    off(): void {
        console.log('Projector is on.');
    }
}

class Projetor {
    on(): void {
        console.log('Projector is on.');
    }

    off(): void {
        console.log('Projector is off.');
    }
}

class SoundSystem {
    on(): void {
        console.log('Sound system is on.');
    }

    setVolume(level: number): void {
        console.log(`Setting sound system volume to ${level}`);
    }

    off(): void {
        console.log('Sound system is off');
    }
}

// Passo 2: Criar a Classe Facade
class HomeTheaterFacade {
    constructor(
        private dvdPlayer: DVDPlayer,
        private projector: Projetor,
        private soundSystem: SoundSystem,
    ) {}

    matchMovie(movie: string): void {
        console.log('Get ready to match a movie...');
        this.dvdPlayer.on();
        this.dvdPlayer.play(movie);
        this.projector.on();
        this.soundSystem.on();
        this.soundSystem.setVolume(10);
    }

    endMovie(): void {
        console.log('Shutting movie theater down...');
        this.dvdPlayer.off();
        this.projector.off();
        this.soundSystem.off();
    }
}

// Passo 3: Usar a Facade
const dvdPlayer = new DVDPlayer();
const projector = new Projetor();
const soundSystem = new SoundSystem();

const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, soundSystem);

homeTheater.matchMovie('Taxi Driver');

homeTheater.endMovie();

/*
Vantagens do Padrão Facade

    Simplicidade: Proporciona uma interface simplificada para o subsistema, 
    tornando o uso do sistema mais fácil e intuitivo.

    Desacoplamento: Reduz o acoplamento entre o sistema cliente e as classes 
    complexas do subsistema, facilitando a manutenção e evolução do código.

    Facilidade de Uso: Melhora a usabilidade do sistema ao fornecer métodos de 
    alto nível que encapsulam as interações complexas com o subsistema.

    Encapsulamento: Encapsula a complexidade do subsistema, expondo apenas as 
    funcionalidades necessárias ao cliente.

Problemas que o Padrão Facade Resolve

    Complexidade Excessiva: Reduz a complexidade do sistema ao fornecer uma 
    interface simplificada para um conjunto complexo de classes.

    Manutenção e Evolução: Facilita a manutenção e evolução do sistema ao 
    desacoplar a interface do cliente das classes do subsistema.

    Interface Coesa: Oferece uma interface coesa e fácil de usar, agregando as 
    operações comuns em métodos de alto nível.

O padrão Facade é especialmente útil em sistemas complexos que possuem muitas 
interações entre componentes, proporcionando uma maneira mais simples e eficiente 
de interagir com esses sistemas.
*/
