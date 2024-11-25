/*
O padrão de projeto Adapter permite que classes com interfaces incompatíveis 
trabalhem juntas. Ele envolve uma classe que traduz a interface de uma classe 
existente para uma interface que o cliente espera.

Exemplo em TypeScript: Adapter

Imagine que temos um sistema que lida com diferentes tipos de leitores de dados, 
mas queremos usar uma nova classe que possui uma interface diferente. 
Vamos criar um adaptador para tornar essa nova classe compatível 
com o sistema existente.
*/

// Passo 1: Definir a Interface Alvo
interface DataReader {
    readData(): void;
}

// Passo 2: Implementar a Classe Incompatível
class LegacyDataReader {
    public fetchData(): void {
        console.log('Fetching data using legacy method...');
    }
}

// Passo 3: Criar o Adaptador
class DataReaderAdapter implements DataReader {
    private legacyDataReader: LegacyDataReader;

    constructor(legacyDataReader: LegacyDataReader) {
        this.legacyDataReader = legacyDataReader;
    }

    public readData(): void {
        this.legacyDataReader.fetchData();
    }
}

// Passo 4: Usar o Adaptador
function clientCode(DataReader: DataReader) {
    DataReader.readData();
}

const legacyDataReader = new LegacyDataReader();
const adapter = new DataReaderAdapter(legacyDataReader);

clientCode(adapter);

/*
Vantagens do Padrão Adapter

    Reutilização de Código Existente: Permite que código legado 
    seja reutilizado em novos sistemas sem a necessidade de 
    modificar o código existente.

    Desacoplamento: Desacopla a interface do cliente da interface de 
    implementação específica, permitindo maior flexibilidade no uso 
    de diferentes classes.

    Facilidade de Integração: Facilita a integração de novos componentes 
    ou sistemas com interfaces incompatíveis, sem alterar o código cliente.

    Expansibilidade: Permite adicionar novos adaptadores para novas 
    lasses sem alterar o código cliente.

Problemas que o Padrão Adapter Resolve

    Compatibilidade de Interface: Resolve problemas de compatibilidade de 
    interface ao permitir que classes com interfaces diferentes trabalhem juntas.

    Migração e Integração: Facilita a migração de sistemas legados para novos 
    sistemas, permitindo que componentes antigos e novos coexistam e funcionem juntos.

    Flexibilidade na Implementação: Permite mudar a implementação de uma classe 
    sem afetar o código cliente, proporcionando maior flexibilidade e mantenibilidade.

O padrão Adapter é extremamente útil em cenários onde é necessário integrar 
sistemas ou componentes com interfaces incompatíveis, promovendo a reutilização de 
código e a flexibilidade do sistema.
*/
