/*
O padrão de projeto Proxy fornece um substituto ou marcador para 
outro objeto para controlar o acesso a ele. Ele pode ser usado para 
controlar o acesso a objetos que são caros para criar, que necessitam 
de controle de acesso, ou que são remotos. Existem diferentes tipos de 
proxies, incluindo proxies virtuais, proxies de proteção e proxies remotos.

Exemplo em TypeScript: Proxy

Imagine que temos um objeto ExpensiveResource que realiza operações 
custosas, e queremos usar um proxy para controlar o acesso a ele, 
evitando sua criação desnecessária até que seja realmente 
necessário.
*/

// Passo 1: Definir a Interface do Sujeito
interface Resource {
    request(): void;
}

// Passo 2: Implementar a Classe Real (RealSubject)
class ExpensiveResource implements Resource {
    constructor() {
        this.loadResource();
    }

    private loadResource(): void {
        console.log('Loading expensive resource...');
    }

    request(): void {
        console.log('Using expensive resource...');
    }
}

// Passo 3: Criar a Classe Proxy
class ResourceProxy implements Resource {
    private realResource: ExpensiveResource | null = null;

    request(): void {
        if (this.realResource === null) {
            this.realResource = new ExpensiveResource();
        }
        this.realResource.request();
    }
}

// Passo 4: Usar o Proxy
const resource = new ResourceProxy();
resource.request();
resource.request();

/*
Vantagens do Padrão Proxy

    Controle de Acesso: Controla o acesso a objetos, adicionando uma 
    camada de controle, segurança ou funcionalidade adicional.

    Adiar Inicialização: Adia a criação ou a inicialização de objetos 
    custosos até que sejam realmente necessários, economizando recursos.

    Redução de Custo: Reduz o custo de criar, carregar ou inicializar 
    objetos caros, melhorando o desempenho e a eficiência do sistema.

    Encapsulamento de Referências: Encapsula a complexidade das referências 
    a objetos remotos ou pesados, simplificando a interação com esses objetos.

Problemas que o Padrão Proxy Resolve

    Custo de Inicialização: Resolve problemas de inicialização custosa ao 
    adiar a criação de objetos pesados até que sejam necessários.

    Controle de Acesso e Segurança: Oferece controle adicional sobre quem 
    pode acessar ou modificar um objeto, melhorando a segurança do sistema.

    Abstração de Complexidade Remota: Abstrai a complexidade da interação 
    com objetos remotos, proporcionando uma interface mais simples e 
    transparente para o cliente.

    Otimização de Recursos: Otimiza o uso de recursos, evitando a criação e 
    carga desnecessária de objetos pesados, contribuindo para a eficiência 
    do sistema.

O padrão Proxy é extremamente útil em situações onde você precisa controlar o 
acesso a objetos, adiar a criação de objetos pesados ou encapsular a 
complexidade de objetos remotos.
*/
