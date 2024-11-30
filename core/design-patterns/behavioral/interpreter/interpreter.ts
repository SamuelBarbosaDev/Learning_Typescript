/*
O padrão de projeto Interpreter é usado para definir uma gramática para a linguagem e um interpretador que usa essa gramática para interpretar sentenças na linguagem. Ele é útil para implementar linguagens específicas de domínio (DSLs) e traduzir textos de acordo com uma gramática definida.
Exemplo em TypeScript: Interpreter

Vamos criar um exemplo simples onde temos uma linguagem para expressar operações matemáticas básicas (adição e subtração).
Passo 1: Definir a Interface Expression
*/

// Passo 1: Definir a Interface Expression
interface Expression {
    interpret(context: Map<string, number>): number;
}

// Passo 2: Implementar as Expressões Concretas
class NumberExpression implements Expression {
    constructor(private number: number) {}

    interpret(context: Map<string, number>): number {
        return this.number;
    }
}

class AdditionExpression implements Expression {
    constructor(
        private leftOperand: Expression,
        private rightOperand: Expression,
    ) {}

    interpret(context: Map<string, number>): number {
        return (
            this.leftOperand.interpret(context) +
            this.rightOperand.interpret(context)
        );
    }
}

class SubtractionExpression implements Expression {
    constructor(
        private leftOperand: Expression,
        private rightOperand: Expression,
    ) {}

    interpret(context: Map<string, number>): number {
        return (
            this.leftOperand.interpret(context) -
            this.rightOperand.interpret(context)
        );
    }
}

// Passo 3: Usar o Interpreter
const context = new Map<string, number>();
const expression = new AdditionExpression(
    new NumberExpression(5),
    new SubtractionExpression(
        new NumberExpression(10),
        new NumberExpression(3),
    ),
);

const result = expression.interpret(context);
console.log(`Result: ${result}`)

export default 0;

/*
Vantagens do Padrão Interpreter

    Fácil de Implementar: Simplifica a implementação de linguagens 
    específicas de domínio (DSLs) para representar e resolver problemas 
    específicos.

    Extensibilidade: Facilita a adição de novas expressões e gramáticas 
    sem modificar o código existente, promovendo a extensibilidade.

    Manutenção Simples: Torna o sistema fácil de entender e manter, 
    especialmente quando a gramática da linguagem é simples e pequena.

    Reutilização: Promove a reutilização de componentes de expressão, 
    permitindo a construção de expressões complexas a partir de expressões 
    mais simples.

Problemas que o Padrão Interpreter Resolve

    Análise e Interpretação de Linguagens: Facilita a análise e interpretação 
    de linguagens específicas, fornecendo uma maneira estruturada de avaliar expressões.

    Desacoplamento de Gramática e Interpretação: Separa a definição da 
    gramática da linguagem da lógica de interpretação, promovendo um design 
    mais modular e flexível.

    Resolução de Problemas Repetitivos: Resolve problemas repetitivos que envolvem 
    a avaliação de sentenças de acordo com uma gramática definida, evitando a duplicação 
    de lógica de interpretação.

O padrão Interpreter é extremamente útil para implementar linguagens específicas de 
domínio e para traduzir ou interpretar textos de acordo com uma gramática bem definida. 
Ele promove um design modular e flexível, facilitando a manutenção e a extensão do sistema.
*/