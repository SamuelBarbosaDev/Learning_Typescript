/*
O padrão de projeto Template Method define o esqueleto de um 
algoritmo em uma operação, adiando a definição de alguns passos para 
subclasses. Ele permite que subclasses redefinam certos passos de um 
algoritmo sem mudar a estrutura do mesmo. É útil para implementar 
algoritmos invariáveis nas partes principais e variantes nos detalhes.

Exemplo em TypeScript: Template Method

Vamos criar um exemplo de uma classe base DataProcessor que define um 
método template para processar dados. Teremos duas subclasses que 
implementam passos específicos do processamento de dados.
*/

// Passo 1: Definir a Classe Abstrata com o Método Template
abstract class DataProcessor {
    // Template method
    process(): void {
        this.loadData();
        this.processData();
        this.saveData();
    }

    // Passos a serem implementados pelas subclasses
    abstract loadData(): void;
    abstract processData(): void;
    abstract saveData(): void;
}

// Passo 2: Implementar as Subclasses Concretas
class CSVDataProcessor extends DataProcessor {
    loadData(): void {
        console.log('Loading data from CSV file...');
    }

    processData(): void {
        console.log('Processing CSV data...');
    }

    saveData(): void {
        console.log('Saving processed data to CSV file...');
    }
}

class JSONDataProcessor extends DataProcessor {
    loadData(): void {
        console.log('Loading data from JSON file...');
    }

    processData(): void {
        console.log('Processing JSON data...');
    }

    saveData(): void {
        console.log('Saving processed data to JSON file...');
    }
}

// Passo 3: Usar o Template Method
const csvProcessor = new CSVDataProcessor();
csvProcessor.process();

const jsonProcessor = new JSONDataProcessor();
jsonProcessor.process();

/*
Vantagens do Padrão Template Method

    Reutilização de Código: Promove a reutilização de código ao definir a 
    estrutura geral do algoritmo na classe base e permitir que as subclasses 
    forneçam implementações específicas para os passos.

    Consistência: Garante a consistência do algoritmo ao centralizar sua 
    estrutura na classe base, evitando duplicação de lógica.

    Flexibilidade: Permite que subclasses personalizem partes do algoritmo 
    sem alterar sua estrutura geral, promovendo a extensibilidade.

    Facilidade de Manutenção: Simplifica a manutenção ao encapsular a lógica 
    invariável na classe base e delegar a lógica variável às subclasses.

Problemas que o Padrão Template Method Resolve

    Duplicação de Código: Resolve problemas de duplicação de código ao 
    centralizar a lógica comum na classe base e permitir que as subclasses 
    forneçam variações específicas.

    Evolução Independente: Facilita a evolução do algoritmo ao permitir que a 
    estrutura geral seja modificada independentemente das variações específicas.

    Controle de Estrutura: Garante que a estrutura do algoritmo seja seguida 
    rigorosamente pelas subclasses, promovendo um design coeso e bem estruturado.

O padrão Template Method é extremamente útil em situações onde diferentes variações 
de um algoritmo precisam ser implementadas enquanto a estrutura geral do algoritmo 
permanece inalterada.
*/