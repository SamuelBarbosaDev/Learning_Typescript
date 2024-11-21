/*
Exemplo: Transportes

Imagine que temos um sistema que lida com diferentes tipos de transportes.
Vamos criar uma classe abstrata Transport e subclasses para Car e Bike.
Além disso, teremos uma TransportFactory que decidirá qual tipo de transporte criar.
*/

// Classe abstrata Transport
abstract class Transport {
    abstract deliver(): void;
}

// Subclasse Car
class Car extends Transport {
    deliver(): void {
        console.log('Entrega por carro.');
    }
}

// Subclasse Bike
class Bike extends Transport {
    deliver(): void {
        console.log('Entrega por bicicleta.');
    }
}

// Classe Factory Method
abstract class TransportFactory {
    // Método de fábrica
    abstract createTransporte(): Transport;

    // Método de operação
    planDelivery(): void {
        const transport = this.createTransporte();
        transport.deliver();
    }
}

// Fábrica de Carros
class CarFactory extends TransportFactory {
    createTransporte(): Transport {
        return new Car();
    }
}

// Fábrica de Bicicletas
class BikeFactory extends TransportFactory {
    createTransporte(): Transport {
        return new Bike();
    }
}

// Uso do padrão Factory Method
const carFactory = new CarFactory();
carFactory.planDelivery();

const bikeFactory = new BikeFactory();
bikeFactory.planDelivery();

/*
Neste exemplo, o Factory Method centraliza a lógica de criação de objetos 
Transport em fábricas específicas (CarFactory e BikeFactory), 
permitindo que o código cliente (planDelivery) permaneça desacoplado das 
classes concretas (Car e Bike). Isso facilita a manutenção, expande a flexibilidade 
e promove um design mais limpo e modular.
*/
