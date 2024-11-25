/*
O padrão de projeto Decorator permite adicionar comportamentos ou 
responsabilidades a objetos individuais, de maneira dinâmica, sem afetar 
outros objetos da mesma classe. Ele oferece uma alternativa flexível à herança 
para estender a funcionalidade de objetos.

Exemplo em TypeScript: Decorator

Imagine que temos uma interface para componentes de notificação, e queremos 
adicionar funcionalidades extras como notificações por email e SMS.
*/

// Passo 1: Definir a Interface de Componente
interface Notification {
    send(): void;
}

// Passo 2: Implementar o Componente Concreto
class BasicNotification implements Notification {
    send(): void {
        console.log('Sending basic notification.');
    }
}

// Passo 3: Criar a Classe Decorator Abstrata
abstract class NotificationDecorator implements Notification {
    protected wrappee: Notification;

    constructor(notification: Notification) {
        this.wrappee = notification;
    }

    send(): void {
        this.wrappee.send();
    }
}

// Passo 4: Implementar Decorators Concretos
class EmailNotificationDecorator extends NotificationDecorator {
    send(): void {
        super.send();
        console.log('Sending email notification');
    }
}

class SMSNotificationDecorator extends NotificationDecorator {
    send(): void {
        super.send();
        console.log('Sending SMS notification.');
    }
}

// Passo 5: Usar o Decorator
const basicNotification = new BasicNotification();
const emailNotification = new EmailNotificationDecorator(basicNotification);
const smsNotificationDecorator = new SMSNotificationDecorator(
    emailNotification,
);

smsNotificationDecorator.send();

/*
Vantagens do Padrão Decorator

    Extensibilidade: Permite adicionar novas funcionalidades a objetos 
    existentes de forma flexível e extensível, sem alterar o código original.

    Composição de Comportamentos: Oferece uma maneira de combinar comportamentos 
    de maneira modular, criando um conjunto diversificado de funcionalidades a 
    partir de classes simples.

    Desacoplamento: Desacopla a lógica de adição de funcionalidades do código da 
    classe base, promovendo um design mais modular e limpo.

    Evita Herança Excessiva: Fornece uma alternativa à herança para estender 
    funcionalidades, evitando problemas associados a hierarquias de classes 
    complexas e profundas.

Problemas que o Padrão Decorator Resolve

    Expansão Dinâmica de Funcionalidades: Facilita a adição de funcionalidades 
    a objetos de maneira dinâmica, sem a necessidade de modificar a classe base 
    ou criar subclasses.

    Manutenção de Código: Simplifica a manutenção ao permitir que funcionalidades 
    sejam adicionadas ou removidas sem impactar outras partes do sistema.

    Complexidade de Herança: Reduz a complexidade associada à criação de subclasses 
    para cada nova funcionalidade, promovendo uma abordagem mais leve e flexível 
    para extensão de classes.

O padrão Decorator é extremamente útil em cenários onde a funcionalidade de objetos 
precisa ser estendida de forma dinâmica e flexível, sem depender de heranças complexas. 
Ele promove um design mais modular e adaptável.
*/
