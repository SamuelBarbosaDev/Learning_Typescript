/*
Exemplo em TypeScript: Abstract Factory

Imagine que estamos criando um sistema para fabricar móveis. 
Teremos duas famílias de móveis: modernos e vitorianos. 
Vamos criar uma fábrica abstrata que produzirá cadeiras e sofás.
*/

// Passo 1: Definir interfaces dos produtos
interface Chair {
    sitOn(): void;
}

interface Sofa {
    lieOn(): void;
}

// Passo 2: Implementar produtos concretos
class ModernChair implements Chair {
    sitOn(): void {
        console.log('Sitting on a modern chair.');
    }
}

class ModernSofa implements Sofa {
    lieOn(): void {
        console.log('Lying on a modern sofa.');
    }
}

class VictorianChair implements Chair {
    sitOn(): void {
        console.log('Sitting on a Victorian chair');
    }
}

class VictorianSofa implements Sofa {
    lieOn(): void {
        console.log('Lying on a Victorian sofa');
    }
}

//Passo 3: Definir a fábrica abstrata
interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
}

// Passo 4: Implementar fábricas concretas
class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }

    createSofa(): Sofa {
        return new ModernSofa();
    }
}

class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }

    createSofa(): Sofa {
        return new VictorianSofa();
    }
}

// Passo 5: Usar a Abstract Factory
function clientCode(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();

    chair.sitOn();
    sofa.lieOn();
}

// Uso com Fábrica de Móveis Modernos
clientCode(new ModernFurnitureFactory());

// Uso com Fábrica de Móveis Vitorianos
clientCode(new VictorianFurnitureFactory());

/*
Vantagens:

    Desacoplamento: O padrão Abstract Factory desacopla a criação de 
    objetos do seu uso, facilitando a manutenção e evolução do sistema.

    Consistência: Assegura que os objetos criados são de uma família 
    coesa e compatível, garantindo consistência nos produtos relacionados.

    Expansibilidade: Facilita a adição de novas famílias de produtos, 
    adicionando novas fábricas concretas sem modificar o código existente.

    Flexibilidade: Permite a substituição fácil de famílias inteiras de 
    produtos, alterando a fábrica utilizada.

Problemas que resolve:

    Complexidade de Criação: Simplifica a criação de famílias de objetos 
    relacionados, encapsulando a lógica de criação em fábricas concretas 
    específicas.

    Dependências Fortes: Reduz dependências diretas de classes concretas, 
    facilitando a troca de implementações e promovendo um design mais 
    flexível e modular.

    Manutenção de Código: Centraliza a lógica de criação de objetos, 
    tornando o código mais fácil de manter e entender.
*/
