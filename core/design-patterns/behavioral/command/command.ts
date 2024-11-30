/*
O padrão de projeto Command encapsula uma solicitação como 
um objeto, permitindo que você parametrize clientes com diferentes 
solicitações, filas de solicitações ou faça o registro de solicitações. 
Ele separa a responsabilidade de emitir uma solicitação da responsabilidade 
de executá-la, promovendo um design mais flexível e desacoplado.

Exemplo em TypeScript: Command

Imagine que estamos criando um sistema de controle remoto para uma casa 
inteligente, onde você pode ligar e desligar dispositivos eletrônicos.
*/

// Passo 1: Definir a Interface Command
interface Command {
    execute(): void;
    undo(): void;
}

// Passo 2: Implementar os Comandos Concretos
class Light {
    on(): void {
        console.log('Light is on.');
    }

    off(): void {
        console.log('Light is off.');
    }
}

class LightOnCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}

class LightOffCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }
}

// Passo 3: Criar o Invoker
class RemoteControl {
    private onCommands: Command[] = [];
    private offCommands: Command[] = [];
    private undoCommand: Command | null = null;

    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonPressed(slot: number): void {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    offButtonPressed(slot: number): void {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    undoButtonPressed(): void {
        if (this.undoCommand) {
            this.undoCommand.undo();
        }
    }
}

// Passo 4: Usar o Command
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(0, lightOnCommand, lightOffCommand);

remote.onButtonPressed(0);
remote.offButtonPressed(0);
remote.undoButtonPressed();

export default 0;

/*
Vantagens do Padrão Command

    Desacoplamento: Separa o objeto que invoca a operação daquele 
    que sabe como executá-la, promovendo um design mais modular 
    e flexível.

    Reversibilidade: Facilita a implementação de funcionalidades 
    de desfazer (undo) e refazer (redo), armazenando o histórico 
    de comandos executados.

    Extensibilidade: Permite adicionar novos comandos sem alterar o 
    código existente, seguindo o princípio aberto/fechado 
    (Open/Closed Principle).

    Composição de Comandos: Facilita a composição de comandos 
    simples em comandos complexos, permitindo a execução de 
    operações mais sofisticadas.

Problemas que o Padrão Command Resolve

    Acoplamento Forte: Reduz o acoplamento entre o remetente de 
    uma solicitação e o receptor, permitindo maior flexibilidade e 
    manutenção do sistema.

    Histórico de Ações: Facilita a implementação de funcionalidades 
    que requerem armazenamento e manipulação do histórico de ações do usuário.

    Solicitações Parametrizadas: Permite que as solicitações sejam 
    parametrizadas e tratadas como objetos, facilitando a customização e 
    extensão do comportamento das operações.

O padrão Command é extremamente útil em aplicações que requerem operações 
reversíveis, filas de solicitações, histórico de ações ou uma separação clara 
entre a emissão e a execução de comandos.
*/
