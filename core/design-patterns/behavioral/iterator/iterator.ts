/*
O padrão de projeto Iterator fornece uma maneira de acessar
os elementos de um objeto agregado sequencialmente sem expor 
sua representação subjacente. Ele é útil para percorrer coleções 
de objetos, como listas, árvores ou outros conjuntos de dados complexos.

Exemplo em TypeScript: Iterator

Vamos criar um exemplo onde temos uma coleção de números e queremos 
iterar sobre esses números sem expor a estrutura interna da coleção.
*/

// Passo 1: Definir a Interface Iterator
interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

// Passo 2: Definir a Interface Aggregate
interface Aggregate<T> {
    createIterator(): Iterator<T>;
}

// Passo 3: Implementar a Classe Concreta de Iterator
class NumberIterator implements Iterator<number> {
    private collection: NumberCollection;
    private position: number = 0;

    constructor(collection: NumberCollection) {
        this.collection = collection;
    }

    public next(): number {
        return this.collection.getItems()[this.position++];
    }

    public hasNext(): boolean {
        return this.position < this.collection.getItems().length;
    }
}

// Passo 4: Implementar a Classe Concreta de Aggregate
class NumberCollection implements Aggregate<number> {
    private items: number[] = [];

    public addItem(item: number): void {
        this.items.push(item);
    }

    public getItems(): number[] {
        return this.items;
    }

    public createIterator(): Iterator<number> {
        return new NumberIterator(this);
    }
}

// Passo 5: Usar o Iterator
const collection = new NumberCollection();
collection.addItem(1);
collection.addItem(2);
collection.addItem(3);

const iterator = collection.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}

/*
Vantagens do Padrão Iterator

    Desacoplamento: Desacopla a lógica de iteração da coleção, 
    permitindo que diferentes métodos de iteração sejam implementados 
    sem modificar a coleção.

    Uniformidade: Fornece uma interface uniforme para iterar sobre 
    diferentes tipos de coleções, tornando o código cliente mais 
    simples e consistente.

    Flexibilidade: Permite que novas coleções e iteradores sejam adicionados 
    ao sistema sem modificar o código existente, promovendo a extensibilidade.

    Manutenção Simples: Simplifica a manutenção do código ao encapsular a 
    lógica de iteração em classes específicas de iteradores.

Problemas que o Padrão Iterator Resolve

    Acesso Seqüencial: Facilita o acesso seqüencial aos elementos de uma 
    coleção sem expor sua representação subjacente.

    Código Repetitivo: Evita duplicação de código de iteração ao encapsular 
    essa lógica em classes de iteradores, promovendo a reutilização de código.

    Complexidade de Coleções: Simplifica a interação com coleções complexas, 
    fornecendo uma maneira padronizada e uniforme de percorrer elementos.

O padrão Iterator é extremamente útil em sistemas que envolvem coleções complexas 
de objetos, proporcionando uma maneira uniforme e flexível de percorrer esses objetos.
*/
