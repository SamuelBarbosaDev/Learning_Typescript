/*
O padrão de projeto Chain of Responsibility permite que um 
pedido passe por uma corrente de manipuladores até que um 
deles consiga processá-lo. Cada manipulador na corrente decide 
se processa o pedido ou o encaminha para o próximo manipulador. 
Isso é útil para desacoplar o remetente do pedido de seus receptores 
e permite um design mais flexível.

Exemplo em TypeScript: Chain of Responsibility

Vamos criar um exemplo onde diferentes níveis de suporte técnico 
(Atendente, Técnico e Gerente) podem tratar de solicitações de suporte. 
Cada nível de suporte decide se pode tratar a solicitação ou se deve 
encaminhá-la para o próximo nível.
*/

// Passo 1: Definir a Interface de Manipulador
interface SupportHandler {
    setNext(handler: SupportHandler): SupportHandler;
    handle(request: string): void;
}

// Passo 2: Implementar a Classe Abstrata de Manipulador
abstract class AbstractSupportHandler implements SupportHandler {
    private nextHandler: SupportHandler | null = null;

    setNext(handler: SupportHandler): SupportHandler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

// Passo 3: Implementar os Manipuladores Concretos
class FrontDeskHandler extends AbstractSupportHandler {
    handle(request: string): void {
        if (request === 'simple issue') {
            console.log('FrontDesk: Handling simple issue');
        } else {
            console.log('FrontDesk: Passing to next handler');
            super.handle(request);
        }
    }
}

class TechnicianHandler extends AbstractSupportHandler {
    handle(request: string): void {
        if (request === 'technical issue') {
            console.log('Technician: Handling technical issue');
        } else {
            console.log('Technician: Passing to next handler');
            super.handle(request);
        }
    }
}

class ManagerHandler extends AbstractSupportHandler {
    handle(request: string): void {
        if (request === 'managerial issue') {
            console.log('Manager: Handling managerial issue');
        } else {
            console.log('Manager: Issue cannot be handled.');
            super.handle(request);
        }
    }
}

// Passo 4: Usar a Chain of Responsibility
const frontDesk = new FrontDeskHandler();
const technical = new TechnicianHandler();
const manager = new ManagerHandler();

frontDesk.setNext(technical).setNext(manager);

console.log('Sending simple issue...');
frontDesk.handle('simple issue.');

console.log('Sending technical issue...');
frontDesk.handle('technical issue.');

console.log('Sending managerial issue...');
frontDesk.handle('managerial issue');

console.log('Sending unknown issue...');
frontDesk.handle('unknown issue');

/*
Vantagens do Padrão Chain of Responsibility

    Desacoplamento: Desacopla o remetente de uma solicitação de seus 
    receptores, permitindo que a solicitação passe por uma cadeia de 
    manipuladores até encontrar aquele que pode tratá-la.

    Flexibilidade: Facilita a adição de novos manipuladores à corrente 
    sem alterar os códigos existentes, promovendo a extensibilidade.

    Responsabilidade Distribuída: Permite a distribuição da responsabilidade 
    por diferentes objetos, facilitando a manutenção e evolução do sistema.

    Manipulação Dinâmica: Oferece a capacidade de modificar a corrente de 
    manipuladores em tempo de execução, permitindo maior flexibilidade 
    na manipulação de solicitações.

Problemas que o Padrão Chain of Responsibility Resolve

    Acoplamento Forte: Reduz o acoplamento entre o remetente de uma 
    solicitação e seus receptores, promovendo um design mais modular 
    e flexível.

    Código Rígido e Inflexível: Alivia a rigidez do código ao permitir que 
    diferentes manipuladores tratem solicitações de maneira flexível e configurável.

    Responsabilidades Centralizadas: Evita a centralização de responsabilidades 
    em um único objeto, distribuindo o processamento de solicitações por diferentes 
    objetos na cadeia.

O padrão Chain of Responsibility é extremamente útil em sistemas onde diferentes 
etapas de processamento ou validação precisam ser executadas de maneira 
flexível e desacoplada.
*/