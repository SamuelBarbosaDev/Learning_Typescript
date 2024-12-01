/*
O padrão de projeto State permite que um objeto altere seu 
comportamento quando seu estado interno muda. O objeto parecerá 
mudar sua classe. Esse padrão é útil para implementar máquinas 
de estados finitos.

Exemplo em TypeScript: State

Vamos criar um exemplo onde temos um objeto Context que pode
estar em diferentes estados (por exemplo, ConcreteStateA e ConcreteStateB). 
O comportamento do objeto muda conforme seu estado atual.
*/

// Passo 1: Definir a Interface State
interface State {
    handle(context: Context): void;
}

// Passo 2: Implementar os Estados Concretos
class ConcreteStateA implements State {
    handle(context: Context): void {
        console.log('State A handling request and transitioning to State B.');
        context.state = new ConcreteStateB();
    }
}

class ConcreteStateB implements State {
    handle(context: Context): void {
        context.state = new ConcreteStateA();
    }
}

// Passo 3: Implementar a Classe Context
class Context {
    constructor(private _state: State) {}

    set state(state: State) {
        console.log(`Transitioning to ${state.constructor.name}`);
        this._state = state;
    }

    request(): void {
        this._state.handle(this);
    }
}

// Passo 4: Usar o State
const context = new Context(new ConcreteStateA());
context.request();
context.request();

/*
Vantagens do Padrão State

    Desacoplamento: Desacopla o código relacionado a estados 
    específicos do código principal do objeto, promovendo 
    um design mais modular.

    Organização e Clareza: Organiza o código em classes separadas 
    baseadas em estados, tornando-o mais claro e fácil de entender.

    Responsabilidade Única: Segue o princípio de responsabilidade única, 
    encapsulando o comportamento associado a cada estado em classes distintas.

    Facilidade de Manutenção: Facilita a manutenção e expansão do código ao 
    permitir a adição de novos estados sem modificar o código existente.

Problemas que o Padrão State Resolve

    Transições Complexas de Estado: Simplifica o gerenciamento de 
    transições de estado complexas, encapsulando o comportamento de 
    cada estado em classes separadas.

    Código de Estado Condicional: Elimina a necessidade de utilizar condicionais 
    (if ou switch) para manejar estados diferentes, promovendo um design mais limpo 
    e modular.

    Evolução Independente dos Estados: Permite que os estados evoluam independentemente 
    do objeto principal, facilitando a adição de novos estados ou a modificação dos 
    existentes sem impactar o restante do sistema.

O padrão State é extremamente útil em sistemas que precisam gerenciar mudanças de estado 
complexas e frequentes, promovendo um design mais flexível e organizado.
*/
