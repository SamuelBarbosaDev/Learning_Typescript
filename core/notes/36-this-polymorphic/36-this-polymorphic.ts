class Calculadora {
    constructor(public numero: number){}

    add(n: number): this{
        this.numero += n;
        return this;
    }

    sub(n: number): this{
        this.numero -= n;
        return this;
    }

    div(n: number): this{
        this.numero /= n;
        return this;
    }

    mult(n: number): this{
        this.numero *= n;
        return this;
    }

    pow(n: number): this{
        this.numero **= n;
        return this;
    }
}

const calculadora = new Calculadora(99);
calculadora.add(1).mult(2).div(4).sub(44).pow(2);
console.log(calculadora)

// Builder - GOF
class RequestBuilder{
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this{
        this.method = method;
        return this;
    }

    setUrl(url: string): this{
        this.url = url;
        return this;
    }

    send(): void{
        console.log(`Enviar dados via ${this.method} para ${this.url}`);
    }
}

const request = new RequestBuilder();
request.setUrl('http://www.agiotagemLTDA.com').setMethod('post').send();