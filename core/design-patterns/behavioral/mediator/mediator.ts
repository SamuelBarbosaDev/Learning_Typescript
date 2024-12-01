/*
O padrão de projeto Mediator define um objeto que encapsula 
a forma como um conjunto de objetos interage. Ele promove o 
acoplamento fraco ao evitar que os objetos se referenciem uns 
aos outros explicitamente, permitindo que você varie suas 
interações de forma independente.

Exemplo em TypeScript: Mediator

Vamos criar um exemplo onde um Mediator gerencia a interação 
entre diferentes componentes de uma interface de usuário, 
como botões e entradas de texto.
*/

// Passo 1: Definir a Interface Mediator
interface Mediator {
    notify(sender: object, event: string): void;
}

// Passo 2: Implementar Componentes Concretos
class Button {
    constructor(private mediator: Mediator) {}

    click(): void {
        this.mediator.notify(this, 'click');
    }
}

class TextBox {
    constructor(private mediator: Mediator) {}

    input(): void {
        this.mediator.notify(this, 'input');
    }
}

class Label {
    constructor(private mediator: Mediator) {}

    update(): void {
        console.log('Label updated');
    }
}

// Passo 3: Implementar o Mediator Concreto
class UIControlMediator implements Mediator {
    private button: Button;
    private textBox: TextBox;
    private label: Label;

    setButton(button: Button): void {
        this.button = button;
    }

    setTextBox(textBox: TextBox): void {
        this.textBox = textBox;
    }

    setLabel(label: Label): void {
        this.label = label;
    }

    notify(sender: object, event: string): void {
        if (event === 'click' && sender === this.button) {
            console.log('Button clicked, updating TextBox and Label');
            this.textBox.input();
            this.label.update();
        } else if (event === 'input' && sender === this.textBox) {
            console.log('TextBox input detected, updating Label');
            this.label.update();
        }
    }
}

// Passo 4: Usar o Mediator
const mediator = new UIControlMediator();

const button = new Button(mediator);
const textBox = new TextBox(mediator);
const label = new Label(mediator);

mediator.setButton(button);
mediator.setTextBox(textBox);
mediator.setLabel(label);

button.click();

export default 0;

/*
Vantagens do Padrão Mediator

    Desacoplamento: Reduz o acoplamento direto entre os componentes, 
    permitindo que cada um evolua independentemente.

    Manutenção e Extensão: Facilita a manutenção e a extensão do sistema, 
    centralizando a lógica de comunicação em um único ponto (o Mediator).

    Código Limpo: Promove um código mais limpo e legível ao evitar relações 
    complexas e diretas entre muitos objetos.

    Modularidade: Melhora a modularidade do sistema, permitindo que novos 
    componentes sejam adicionados ou modificados com impacto mínimo nos 
    componentes existentes.

Problemas que o Padrão Mediator Resolve

    Complexidade das Interações: Simplifica a complexidade das interações 
    entre múltiplos objetos, centralizando a lógica de comunicação.

    Dependências Circulares: Evita dependências circulares entre os componentes, 
    tornando o sistema mais robusto e fácil de entender.

    Evolução Independente: Permite que componentes sejam alterados ou adicionados 
    ao sistema sem modificar outros componentes, promovendo a flexibilidade e a 
    adaptabilidade.

O padrão Mediator é particularmente útil em sistemas onde múltiplos componentes 
precisam interagir frequentemente, e a gestão dessas interações diretamente entre os 
componentes se torna complexa e difícil de manter.
*/
