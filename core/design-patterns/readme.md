# Design Patterns

Os Padrões de Projeto, conhecidos como **Design Patterns**, foram formalizados por Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides, conhecidos como a "Gang of Four" (GoF). Eles publicaram um livro intitulado "Design Patterns: Elements of Reusable Object-Oriented Software" em 1994, que cataloga 23 padrões de design que são amplamente utilizados em engenharia de software. Esses padrões são divididos em três categorias principais: Creational (Criação), Structural (Estrutural) e Behavioral (Comportamental).

## Padrões Creational (Criação)

Estes padrões tratam da criação de objetos de uma maneira controlada.

1. **Singleton**: Garante que uma classe tenha somente uma instância e fornece um ponto global de acesso a ela.
2. **Factory Method**: Define uma interface para criar um objeto, mas permite que as subclasses alterem o tipo de objetos que serão criados.
3. **Abstract Factory**: Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
4. **Builder**: Separa a construção de um objeto complexo de sua representação, permitindo que o mesmo processo de construção crie diferentes representações.
5. **Prototype**: Permite a criação de novos objetos através da cópia de uma instância existente.

## Padrões Structural (Estrutural)

Esses padrões tratam de compor classes ou objetos para formar estruturas maiores.

1. **Adapter**: Permite que a interface de uma classe existente seja usada como outra interface.
2. **Bridge**: Separa a abstração de sua implementação para que ambos possam variar independentemente.
3. **Composite**: Compor objetos em estruturas de árvore para representar hierarquias parte-todo.
4. **Decorator**: Anexa responsabilidades adicionais a um objeto dinamicamente.
5. **Facade**: Fornece uma interface simplificada para um conjunto de interfaces em um subsistema.
6. **Flyweight**: Usa o compartilhamento para suportar eficientemente grandes quantidades de objetos granulados.
7. **Proxy**: Fornece um substituto ou espaço reservado para outro objeto para controlar o acesso a ele.

## Padrões Behavioral (Comportamental)

Esses padrões tratam da responsabilidade dos objetos e das maneiras pelas quais eles interagem.

1. **Chain of Responsibility**: Passa uma solicitação por uma cadeia de manipuladores.
2. **Command**: Encapsula uma solicitação como um objeto, permitindo que você parametrize clientes com filas, solicitações e operações.
3. **Interpreter**: Dada uma linguagem, define uma representação para sua gramática e um interpretador que usa a representação para interpretar sentenças na linguagem.
4. **Iterator**: Fornece uma maneira de acessar os elementos de um agregado sequencialmente sem expor sua representação subjacente.
5. **Mediator**: Define um objeto que encapsula a forma como um conjunto de objetos interage.
6. **Memento**: Captura e externaliza o estado interno de um objeto sem violar a encapsulação.
7. **Observer**: Define uma dependência um-para-muitos entre objetos para que quando um objeto mudar de estado, todos os seus dependentes sejam notificados e atualizados automaticamente.
8. **State**: Permite que um objeto altere seu comportamento quando seu estado interno muda.
9. **Strategy**: Define uma família de algoritmos, encapsula cada um, e os torna intercambiáveis.
10. **Template Method**: Define o esqueleto de um algoritmo em uma operação, diferindo alguns passos para subclasses.
11. **Visitor**: Representa uma operação a ser realizada nos elementos de uma estrutura de objeto.
