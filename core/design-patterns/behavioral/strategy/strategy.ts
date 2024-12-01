/*
O padrão de projeto Strategy define uma família de algoritmos, 
encapsula cada um deles e os torna intercambiáveis. Este padrão 
permite que o algoritmo varie independentemente dos clientes que o 
utilizam. Ele é útil para implementar algoritmos intercambiáveis e 
encapsular a lógica de diferentes estratégias.

Exemplo em TypeScript: Strategy

Vamos criar um exemplo onde temos diferentes estratégias para 
calcular o preço de um pedido (por exemplo, preço regular e 
preço com desconto).
*/

// Passo 1: Definir a Interface Strategy
interface PriceStrategy {
    calculatePrice(basePrice: number): number;
}

// Passo 2: Implementar as Estratégias Concretas
class RegularPriceStrategy implements PriceStrategy {
    calculatePrice(basePrice: number): number {
        return basePrice;
    }
}

class DiscountPriceStrategy implements PriceStrategy {
    constructor(private discountRate: number) {}

    calculatePrice(basePrice: number): number {
        return basePrice * (1 - this.discountRate);
    }
}

// Passo 3: Implementar a Classe Context
class Order {
    constructor(private _priceStrategy: PriceStrategy) {}

    set priceStrategy(priceStrategy: PriceStrategy) {
        this._priceStrategy = priceStrategy;
    }

    calculateFinalPrice(basePrice: number): number {
        return this._priceStrategy.calculatePrice(basePrice);
    }
}

// Passo 4: Usar o Strategy
const regularStrategy = new RegularPriceStrategy();
const discountStrategy = new DiscountPriceStrategy(0.2);

const order = new Order(regularStrategy);
const basePrice = 100;

console.log(`Regular price: ${order.calculateFinalPrice(basePrice)}`);

order.priceStrategy = discountStrategy;
console.log(`Discount price: ${order.calculateFinalPrice(basePrice)}`);

/*
Vantagens do Padrão Strategy

    Desacoplamento: Desacopla o comportamento de um algoritmo do 
    contexto em que ele é usado, promovendo um design mais modular.

    Intercambiabilidade: Permite a intercambiabilidade de algoritmos, 
    permitindo que diferentes estratégias sejam aplicadas conforme necessário.

    Extensibilidade: Facilita a adição de novas estratégias sem modificar o 
    código existente, seguindo o princípio aberto/fechado (Open/Closed Principle).

    Manutenção Simples: Simplifica a manutenção do código ao encapsular as 
    diferentes estratégias em classes separadas.

Problemas que o Padrão Strategy Resolve

    Código Duplicado e Complexo: Elimina a duplicação de código e a complexidade 
    associada à implementação de múltiplos algoritmos no mesmo local.

    Mudança de Algoritmo em Tempo de Execução: Permite que o algoritmo seja alterado 
    dinamicamente em tempo de execução, proporcionando maior flexibilidade.

    Gestão de Algoritmos Múltiplos: Facilita a gestão de múltiplos algoritmos, 
    encapsulando cada um em uma classe separada e promovendo um design mais modular.

O padrão Strategy é extremamente útil em sistemas onde diferentes algoritmos precisam 
ser aplicados de maneira flexível e intercambiável, promovendo um design mais limpo e modular.
*/
