/*
O padrão de projeto Memento é usado para capturar e 
externalizar o estado interno de um objeto sem violar seu 
encapsulamento, permitindo que o objeto volte ao seu estado anterior. 
Ele é útil para implementar funcionalidades de desfazer (undo) e refazer (redo).

Exemplo em TypeScript: Memento

Vamos criar um exemplo simples onde um editor de texto pode 
salvar e restaurar seu estado.
*/

// Passo 1: Definir a Classe Memento
class Memento {
    constructor(private _state: string) {}

    get state(): string {
        return this._state;
    }
}

// Passo 2: Implementar a Classe Originator
class TextEditor {
    constructor(private _state: string = '') {}

    set state(state: string) {
        console.log(`Setting state to: ${state}`);
        this._state = state;
    }

    get state(): string {
        return this._state;
    }

    save(): Memento {
        console.log('Salving state...');
        return new Memento(this._state);
    }

    restore(memento: Memento): void {
        this._state = memento.state;
        console.log(`State restored to: ${this._state}`);
    }
}

// Passo 3: Implementar a Classe Caretaker
class History {
    private memento: Memento[] = [];

    addMemento(memento: Memento): void {
        this.memento.push(memento);
    }

    getMemento(index: number): Memento | null {
        if (index < this.memento.length) {
            return this.memento[index];
        }
        return null;
    }
}

// Passo 4: Usar o Memento
const editor = new TextEditor();
const history = new History();

editor.state = 'State 1';
history.addMemento(editor.save());

editor.state = 'State 2';
history.addMemento(editor.save());

editor.state = 'State 3';
console.log(`Current state: ${editor.state}`);

editor.restore(history.getMemento(1)!);
console.log(`Current state: ${editor.state}`);

editor.restore(history.getMemento(0)!);
console.log(`Current state: ${editor.state}`);

export default 0;
/*
Vantagens do Padrão Memento

    Encapsulamento: Preserva o encapsulamento ao armazenar o estado 
    interno de um objeto sem expor seus detalhes internos.

    Desfazer e Refazer: Facilita a implementação de funcionalidades 
    de desfazer (undo) e refazer (redo), permitindo que o estado do 
    objeto seja salvo e restaurado.

    Manutenção Simples: Simplifica a manutenção do código ao encapsular 
    a lógica de salvamento e restauração em objetos memento.

    Independência do Estado: Permite que o estado do objeto seja armazenado 
    de forma independente e restaurado posteriormente, sem alterar a 
    estrutura interna do objeto.

Problemas que o Padrão Memento Resolve

    Funcionalidade de Desfazer: Fornece uma maneira estruturada de implementar 
    funcionalidades de desfazer (undo) em aplicações, permitindo que os usuários 
    revertam ações anteriores.

    Complexidade de Estado: Facilita o gerenciamento de estados complexos de objetos, 
    permitindo que estados anteriores sejam armazenados e recuperados facilmente.

    Proteção de Estado Interno: Protege o estado interno do objeto ao encapsulá-lo 
    em mementos, evitando que o código externo manipule diretamente os detalhes 
    internos do objeto.

O padrão Memento é extremamente útil em sistemas que requerem funcionalidades de 
desfazer e refazer, promovendo um design modular e protegendo o encapsulamento 
dos objetos.
*/
