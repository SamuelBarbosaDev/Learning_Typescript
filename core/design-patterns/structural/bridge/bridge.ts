/*
O padrão de projeto Bridge é usado para separar uma abstração de sua 
implementação, permitindo que ambos variem independentemente. Ele é 
útil quando há a necessidade de desacoplar uma abstração da sua implementação 
para permitir que eles evoluam separadamente.

Exemplo em TypeScript: Bridge

Imagine que estamos desenvolvendo um sistema para controlar diferentes 
tipos de dispositivos (por exemplo, TVs e rádios) com diferentes interfaces 
(por exemplo, controle remoto básico e avançado).
*/

// Passo 1: Definir a Interface de Implementação
interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(percent: number): void;
}

// Passo 2: Implementar Classes de Dispositivos Concretos
class TV implements Device {
    private on: boolean = false;
    private volume: number = 50;

    isEnabled(): boolean {
        return this.on;
    }

    enable(): void {
        this.on = true;
    }

    disable(): void {
        this.on = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(percent: number): void {
        this.volume = percent;
    }
}

class Radio implements Device {
    private on: boolean = false;
    private volume: number = 50;

    isEnabled(): boolean {
        return this.on;
    }
    enable(): void {
        this.on = true;
    }
    disable(): void {
        this.on = false;
    }
    getVolume(): number {
        return this.volume;
    }
    setVolume(percent: number): void {
        this.volume = percent;
    }
}

// Passo 3: Definir a Abstração
class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    togglePower(): void {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }

    volumeDown(): void {
        this.device.setVolume(this.device.getVolume() - 10);
    }

    volumeUp(): void {
        this.device.setVolume(this.device.getVolume() + 10);
    }
}

// Passo 4: Implementar Extensões da Abstração
class AdvancedRemoteControl extends RemoteControl {
    mute(): void {
        this.device.setVolume(0);
    }
}

// Passo 5: Usar o Bridge
const tv = new TV();
const remote = new RemoteControl(tv);

remote.togglePower();
console.log(tv.isEnabled());

remote.volumeUp();
console.log(tv.getVolume());

const radio = new Radio();
const advancedRemote = new AdvancedRemoteControl(radio);

advancedRemote.togglePower();
console.log(radio.isEnabled());

advancedRemote.mute();
console.log(radio.getVolume());

/*
Vantagens do Padrão Bridge

    Desacoplamento: Separa a abstração da implementação, permitindo que ambos possam ser desenvolvidos e modificados independentemente.

    Flexibilidade: Facilita a adição de novas implementações e abstrações sem alterar o código existente.

    Expansibilidade: Permite a combinação de diferentes abstrações e implementações, proporcionando um design mais modular e expansível.

    Reutilização de Código: Promove a reutilização de código ao permitir que abstrações e implementações sejam reutilizadas em diferentes contextos.

Problemas que o Padrão Bridge Resolve

    Explosão de Classes: Reduz a proliferação de subclasses ao evitar a combinação de todas as variantes de abstração e implementação em uma única hierarquia de classes.

    Complexidade de Manutenção: Facilita a manutenção ao permitir que a abstração e a implementação evoluam separadamente, sem impactar uma na outra.

    Design Rígido: Alivia o problema de um design rígido e inflexível, permitindo que diferentes partes do sistema sejam modificadas e estendidas de forma independente.

O padrão Bridge é particularmente útil em situações onde as abstrações e suas implementações podem variar e precisam ser desacopladas para suportar futuras mudanças e expansões.
*/
