class Singleton {
    private static instance: Singleton;

    private constructor() {
        // Construtor privado impede a criação de novas instância fora da classe.
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
        }
        return Singleton.instance;
    }

    // Métodos e propriedades da instância única
    public someMethod() {
        console.log('Método chamado na instância Singleton');
    }
}

// Uso do Singleton
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

// Verificando se as instâncias são iguais
console.log(singleton1 === singleton2);
