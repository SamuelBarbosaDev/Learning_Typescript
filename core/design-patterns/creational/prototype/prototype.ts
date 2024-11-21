/*
Exemplo em TypeScript: Prototype

Imagine que temos diferentes tipos de robôs, e queremos poder clonar esses robôs para 
criar novos a partir dos existentes.
*/

// Passo 1: Definir a Interface Prototype
interface Prototype {
    clone(): Prototype;
}

// Passo 2: Implementar a Classe Concreta
class Robot implements Prototype {
    public name: string;
    public model: string;

    constructor(name: string, model: string) {
        this.name = name;
        this.model = model;
    }

    public clone(): this {
        // Usamos Object.assign para clonar a objeto atual
        const clone = Object.assign(Object.create(Object.getPrototypeOf(this)));
        return clone;
    }

    public describe(): void {
        console.log(`Robot Name: ${this.name}, Model: ${this.model}`);
    }
}

// Passo 3: Usar o Prototype
const originalRobot = new Robot('Robo1', 'ModelX');
const cloneRobot = originalRobot.clone();

originalRobot.describe();
cloneRobot.describe();

// Verificando se são objetos diferentes
console.log(originalRobot === cloneRobot);

/*
Vantagens do Padrão Prototype

    Desempenho: Clonar objetos pode ser mais eficiente do que criar novos, 
    especialmente se a criação envolve operações custosas (como acesso a banco de 
    dados ou operações de rede).

    Simplicidade: Simplifica a criação de objetos complexos que requerem muita 
    configuração, permitindo que novos objetos sejam criados rapidamente a partir de 
    protótipos existentes.

    Flexibilidade: Oferece flexibilidade ao permitir que novos objetos sejam criados a 
    partir de uma variedade de protótipos, em vez de depender de uma única classe para 
    criação.

    Redução de Dependências: Diminui a dependência de classes concretas, pois os 
    objetos são criados a partir de instâncias existentes em vez de diretamente de 
    classes.

Problemas que o Padrão Prototype Resolve

    Criação Custosa: Reduz o custo de criação de novos objetos quando a inicialização completa 
    é complexa e consome recursos.

    Configuração Complexa: Evita a reconfiguração de objetos complexos ao permitir a 
    clonagem de protótipos já configurados.

    Classe Base Não Suficiente: Permite a criação de objetos a partir de instâncias já 
    existentes quando a classe base ou construtor não fornece todas as características necessárias 
    para a criação de novos objetos.

O padrão Prototype é especialmente útil em cenários onde o sistema precisa criar novos objetos 
de forma eficiente e com flexibilidade, sem depender de uma hierarquia rígida de classes.
*/
