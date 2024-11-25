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
interface Resource{
    request(): void;
}

// Passo 2: Implementar a Classe Real (RealSubject)
class ExpensiveResource implements Resource{
    constructor(){
        this.loadResource();
    }

    private loadResource(): void{
        console.log('Loading expensive resource...')
    }

    request(): void {
        console.log('Using expensive resource...')
    }
}

// Passo 3: Criar a Classe Proxy
class ResourceProxy implements Resource{
    private realResource: ExpensiveResource | null = null;

    request(): void {
        if(this.realResource === null){
            this.realResource = new ExpensiveResource();
        }
        this.realResource.request();
    }
}

// Passo 4: Usar o Proxy
const resource = new ResourceProxy();
resource.request();
resource.request();