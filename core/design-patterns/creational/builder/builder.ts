/*
Exemplo em TypeScript: Builder

Imagine que queremos criar diferentes tipos de casas. 
Cada casa pode ter características variáveis como número de quartos, 
banheiros, jardim, piscina, etc. O padrão Builder permite construir 
essas variações de forma flexível.
*/

// Passo 1: Definir o produto
class House {
    public rooms: number;
    public bathrooms: number;
    public hasGarden: boolean;
    public hasPool: boolean;

    public describe(): void {
        console.log(
            `House with ${this.rooms} rooms, ${this.bathrooms} bathrooms, garden: ${this.hasGarder}, pool: ${this.hasPool}`,
        );
    }
}

// Passo 2: Definir o Builder abstrato
abstract class HouseBuilder {
    protected house: House;

    constructor() {
        this.house = new House();
    }

    public getHouse(): House {
        return this.house;
    }

    public abstract buildRooms(): void;
    public abstract buildBathrooms(): void;
    public abstract buildGarden(): void;
    public abstract buildPool(): void;
}

// Passo 3: Implementar Builders concretos
class SimpleHouseBuilder extends HouseBuilder {
    public buildRooms(): void {
        this.house.rooms = 2;
    }

    public buildBathrooms(): void {
        this.house.bathrooms = 1;
    }

    public buildGarden(): void {
        this.house.hasGarden = false;
    }

    public buildPool(): void {
        this.house.hasPool = false;
    }
}

class LuxuryHouseBuilder extends HouseBuilder {
    public buildRooms(): void {
        this.house.rooms = 5;
    }
    public buildBathrooms(): void {
        this.house.bathrooms = 4;
    }
    public buildGarden(): void {
        this.house.hasGarden = true;
    }
    public buildPool(): void {
        this.house.hasPool = true;
    }
}

// Passo 4: Definir o Diretor
class HouseDirector {
    private builder: HouseBuilder;

    public setBuilder(builder: HouseBuilder): void {
        this.builder = builder;
    }

    public constructHouse(): void {
        this.builder.buildRooms();
        this.builder.buildBathrooms();
        this.builder.buildGarden();
        this.builder.buildPool();
    }
}

// Passo 5: Usar o Builder
const director = new HouseDirector();

// Casa simples
const simpleHouseBuilder = new SimpleHouseBuilder();
director.setBuilder(simpleHouseBuilder);
director.constructHouse();
const simpleHouse = simpleHouseBuilder.getHouse();
simpleHouse.describe();

// Casa de luxo
const luxuryHouseBuilder = new LuxuryHouseBuilder();
director.setBuilder(luxuryHouseBuilder);
director.constructHouse();
const luxuryHouse = luxuryHouseBuilder.getHouse();
luxuryHouse.describe();

/*
Vantagens:

    Complexidade de Construção: Permite a construção de objetos complexos 
    passo a passo, oferecendo controle granular sobre o processo de construção.

    Flexibilidade: Facilita a criação de diferentes representações de um 
    objeto, utilizando o mesmo processo de construção.

    Separação de Preocupações: Separa a lógica de construção de objetos da 
    lógica de representação, promovendo um design mais limpo e modular.

    Reutilização de Código: Promove a reutilização de código, evitando duplicação 
    e facilitando a manutenção.

    Legibilidade: Aumenta a legibilidade do código ao encapsular a lógica de 
    construção em métodos distintos e autodescritivos.

Problemas que resolve:

    Construção Complexa: Garante que objetos complexos sejam construídos 
    corretamente, evitando erros e inconsistências.

    Representações Múltiplas: Permite a criação de múltiplas representações de 
    um objeto sem duplicar a lógica de construção.

    Extensibilidade: Facilita a adição de novas variações de produtos sem modificar 
    os clientes ou o código existente.

    Mantenabilidade: Simplifica a manutenção e a evolução do código ao encapsular a 
    lógica de construção em builders especializados.
*/