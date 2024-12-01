/*
O padrão de projeto Visitor permite que você adicione operações a 
objetos de uma estrutura sem alterar suas classes. Ele é útil quando 
você precisa executar operações em uma estrutura complexa de objetos 
sem modificar as classes sobre as quais você opera.

Exemplo em TypeScript: Visitor

Vamos criar um exemplo onde temos uma estrutura de elementos que 
representam partes de um documento, e queremos aplicar diferentes operações, 
como renderizar e calcular o tamanho dos elementos, usando o padrão Visitor.
*/

// Passo 1: Definir a Interface Visitor
interface Visitor {
    visitParagraph(paragraph: Paragraph): void;
    visitImage(image: ImageElement): void;
}

// Passo 2: Definir a Interface Element
interface Element {
    accept(visitor: Visitor): void;
}

// Passo 3: Implementar os Elementos Concretos
class Paragraph implements Element {
    constructor(private _text: string) {}

    get text(): string {
        return this._text;
    }

    accept(visitor: Visitor): void {
        visitor.visitParagraph(this);
    }
}

class ImageElement implements Element {
    constructor(private _url: string) {}

    get url(): string {
        return this._url;
    }

    accept(visitor: Visitor): void {
        visitor.visitImage(this);
    }
}

// Passo 4: Implementar os Visitantes Concretos
class RenderVisitor implements Visitor {
    visitParagraph(paragraph: Paragraph): void {
        console.log(`Rendering paragraph: ${paragraph.text}`);
    }

    visitImage(image: ImageElement): void {
        console.log(`Rendering image from URL: ${image.url}`);
    }
}

class SizeCalculatorVisitor implements Visitor {
    visitParagraph(paragraph: Paragraph): void {
        console.log(`Calculating size of paragraph: ${paragraph.text}`);
    }

    visitImage(image: ImageElement): void {
        console.log(`Calculating size of image: URL length ${image.url}`);
    }
}

// Passo 5: Usar o Visitor
const elements: Element[] = [
    new Paragraph('This is a paragraph'),
    new ImageElement('http://example.com/image.jpg'),
];

const renderVisitor = new RenderVisitor();
const sizeCalculatorVisitor = new SizeCalculatorVisitor();

for (const element of elements) {
    element.accept(renderVisitor);
    element.accept(sizeCalculatorVisitor);
}

/*
Vantagens do Padrão Visitor

    Facilidade de Extensão: Permite adicionar novas operações a uma 
    estrutura de objetos sem modificar suas classes.

    Separação de Responsabilidades: Separa as operações dos objetos que 
    compõem a estrutura, promovendo um design mais coeso e modular.

    Reusabilidade de Código: Permite a reutilização de operações comuns em 
    diferentes estruturas de objetos, evitando duplicação de código.

    Simplificação da Lógica de Operações: Encapsula a lógica de operações 
    complexas em classes visitantes específicas, tornando o código mais fácil 
    de entender e manter.

Problemas que o Padrão Visitor Resolve

    Aumento de Funcionalidades: Facilita a adição de novas funcionalidades a uma 
    estrutura de objetos complexa sem modificar as classes existentes.

    Evitar Modificações em Classes Existentes: Elimina a necessidade de modificar 
    classes de elementos existentes ao adicionar novas operações.

    Gestão de Estruturas Complexas: Simplifica a gestão e a execução de operações em 
    estruturas complexas de objetos, promovendo a extensibilidade e a manutenção do sistema.

O padrão Visitor é extremamente útil em sistemas onde você precisa aplicar várias 
operações a uma estrutura de objetos sem modificar suas classes, promovendo um 
design mais flexível e modular.
*/
