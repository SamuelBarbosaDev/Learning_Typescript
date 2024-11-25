/*
O padrão de projeto Composite é usado para tratar objetos individuais e 
composições de objetos de maneira uniforme. Isso é especialmente útil para 
representar hierarquias parte-todo. O Composite permite que os clientes tratem 
objetos individuais e composições de objetos de maneira uniforme, facilitando a 
manipulação de estruturas complexas.

Exemplo em TypeScript: Composite

Vamos criar um exemplo simples de um sistema de gráficos onde temos 
formas simples como Círculos e Quadrados, e composições de formas como Grupos.
*/

// Passo 1: Definir a Interface Componente
interface Graphic {
    draw(): void;
}

// Passo 2: Implementar Componentes Folha (objetos simples)
class Circle implements Graphic {
    draw(): void {
        console.log('Drawing a Circle');
    }
}

class Square implements Graphic {
    draw(): void {
        console.log('Drawing a Square');
    }
}

// Passo 3: Implementar o Componente Composite (composição de objetos)
class CompositeGraphic implements Graphic {
    private children: Graphic[] = [];

    add(graphic: Graphic): void {
        this.children.push(graphic);
    }

    remove(graphic: Graphic): void {
        const index = this.children.indexOf(graphic);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    draw(): void {
        for (const child of this.children) {
            child.draw();
        }
    }
}

// Passo 4: Usar o Composite
// Criação de formas simples
const circle = new Circle();
const square = new Square();
const circle2 = new Circle();

// Criação de um grupo composto
const group = new CompositeGraphic();
group.add(circle);
group.add(square);
group.add(circle2);

// Desenha o grupo composto
group.draw();

/*
Vantagens do Padrão Composite

    Uniformidade: Permite que clientes tratem objetos individuais e 
    composições de objetos de forma uniforme, simplificando a manipulação 
    de estruturas complexas.

    Flexibilidade: Facilita a adição de novos componentes ou composições 
    sem alterar o código existente, promovendo a extensibilidade.

    Facilidade de Uso: Simplifica o código cliente ao fornecer uma interface 
    consistente para manipular objetos individuais e composições de objetos.

    Reutilização de Código: Promove a reutilização de componentes, uma vez 
    que objetos simples e composições podem ser usados de forma intercambiável.

Problemas que o Padrão Composite Resolve

    Hierarquias Parte-Todo: Facilita a representação e manipulação de 
    hierarquias parte-todo, permitindo que estruturas complexas sejam tratadas 
    de forma consistente.

    Gerenciamento de Estruturas Complexas: Simplifica o gerenciamento e a 
    manipulação de estruturas complexas, como árvores de componentes.

    Coerência e Consistência: Garante coerência e consistência ao fornecer uma 
    interface uniforme para manipular componentes e composições.

O padrão Composite é extremamente útil em cenários onde você precisa representar 
hierarquias complexas e tratá-las de forma uniforme, promovendo um design mais 
modular e flexível.
*/
