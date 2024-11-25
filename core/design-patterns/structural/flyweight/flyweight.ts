/*
O padrão de projeto Flyweight é usado para minimizar o uso de memória 
e melhorar o desempenho ao compartilhar o máximo possível dos dados entre 
objetos semelhantes. Isso é especialmente útil quando lidamos com um grande 
número de objetos que compartilham muitos dados comuns.

Exemplo em TypeScript: Flyweight

Imagine que estamos criando um sistema que renderiza milhões de pontos em um 
gráfico. Muitos desses pontos terão a mesma cor e tamanho, então faz sentido 
compartilhar essas propriedades comuns para economizar memória.
*/

// Passo 1: Definir a Interface Flyweight
interface Point {
    draw(x: number, y: number): void;
}

// Passo 2: Implementar a Classe Flyweight Concreta
class ConcretePoint implements Point {
    constructor(private color: string) {}

    draw(x: number, y: number): void {
        console.log(`Drawing point at (${x}, ${y}) with color ${this.color}`);
    }
}

// Passo 3: Criar a Fábrica de Flyweights
class PointFactory {
    private points: {
        [key: string]: Point;
    } = {};

    getPoint(color: string): Point {
        if (!this.points[color]) {
            this.points[color] = new ConcretePoint(color);
        }
        return this.points[color];
    }
}

// Passo 4: Usar o Flyweight
const factory = new PointFactory();

const redPoint = factory.getPoint('red');
redPoint.draw(10, 20);

const bluePoint = factory.getPoint('blue');
bluePoint.draw(30, 40);

const anotherRedPoint = factory.getPoint('red');
anotherRedPoint.draw(50, 60);

console.log(redPoint === anotherRedPoint);

/*
Vantagens do Padrão Flyweight

    Redução de Memória: O Flyweight ajuda a reduzir significativamente 
    o uso de memória ao compartilhar dados comuns entre objetos semelhantes, 
    evitando a duplicação de informações.

    Desempenho Melhorado: Com menos objetos na memória, a performance do 
    sistema pode melhorar, especialmente em aplicativos que precisam 
    gerenciar um grande número de objetos.

    Desacoplamento de Dados Comuns: Promove a separação de dados intrínsecos 
    (compartilhados) e extrínsecos (específicos), facilitando a manutenção e 
    extensão do código.

    Flexibilidade: Permite a criação de objetos leves e eficientes, que podem ser 
    combinados de diferentes maneiras para formar estruturas mais complexas.

Problemas que o Padrão Flyweight Resolve

    Grande Número de Objetos: Facilita o gerenciamento eficiente de um grande 
    número de objetos que compartilham muitos estados, evitando a sobrecarga de 
    memória.

    Compartilhamento de Dados Comuns: Soluciona problemas de duplicação de dados ao 
    compartilhar atributos comuns entre múltiplos objetos.

    Complexidade e Manutenção: Reduz a complexidade e melhora a manutenção do código 
    ao separar e compartilhar dados comuns, promovendo um design mais limpo e eficiente.

O padrão Flyweight é extremamente útil em cenários onde o sistema precisa criar e 
gerenciar um grande número de objetos similares, proporcionando economia de memória 
e melhor desempenho.
*/