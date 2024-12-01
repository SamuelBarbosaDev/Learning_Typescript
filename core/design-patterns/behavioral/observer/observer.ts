/*
O padrão de projeto Observer define uma dependência um-para-muitos 
entre objetos, de modo que quando um objeto muda de estado, todos 
os seus dependentes são notificados e atualizados automaticamente. 
Este padrão é útil para implementar sistemas de notificação e 
reatividade.

Exemplo em TypeScript: Observer

Vamos criar um exemplo onde um WeatherStation (estação meteorológica) 
notifica diferentes displays (visores) sobre mudanças nas condições 
meteorológicas.
*/

// Passo 1: Definir a Interface Observer
interface Observer {
    update(temperature: number): void;
}

// Passo 2: Definir a Interface Subject
interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

// Passo 3: Implementar a Classe Concreta Subject
class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private _temperature: number = 0;

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this._temperature);
        }
    }

    set temperature(temperature: number) {
        console.log(
            `WeatherStation: new temperature measurement: ${this._temperature}`,
        );
        this._temperature = temperature;
        this.notifyObservers();
    }
}

// Passo 4: Implementar as Classes Concretas Observer
class TemperatureDisplay implements Observer {
    update(temperature: number): void {
        console.log(
            `TemperatureDisplay: I need to update my display to ${temperature}`,
        );
    }
}

class ForecastDisplay implements Observer {
    update(temperature: number): void {
        console.log(
            `ForecastDisplay: Updating forecast based on the new temperature ${temperature}`,
        );
    }
}

// Passo 5: Usar o Observer
const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay();
const forecastDisplay = new ForecastDisplay();

weatherStation.registerObserver(tempDisplay);
weatherStation.registerObserver(forecastDisplay);

weatherStation.temperature = 25;
weatherStation.temperature = 33;

/*
Vantagens do Padrão Observer

    Desacoplamento: Desacopla os objetos, permitindo que eles interajam 
    de forma indireta por meio do subject.

    Reatividade: Promove a reatividade ao notificar automaticamente os 
    observadores sobre mudanças de estado.

    Flexibilidade: Facilita a adição ou remoção de observadores em tempo 
    de execução sem modificar o código existente.

    Extensibilidade: Permite a criação de novos tipos de observadores sem 
    alterar a lógica do subject.

Problemas que o Padrão Observer Resolve

    Atualização Automática: Garante que os observadores sejam notificados e 
    atualizados automaticamente quando o estado do subject muda.

    Dependências Dinâmicas: Resolve problemas de dependências dinâmicas, 
    permitindo que novos observadores sejam adicionados em tempo de execução.

    Interação Indireta: Facilita a interação indireta entre objetos, reduzindo o 
    acoplamento e promovendo um design mais modular.

O padrão Observer é extremamente útil em sistemas onde múltiplos objetos precisam 
ser notificados sobre mudanças no estado de outro objeto, promovendo a reatividade 
e desacoplamento entre os componentes.
*/