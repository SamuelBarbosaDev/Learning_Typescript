class CarrinhoDeCompras{
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]): void{
        for(const produto of produtos){
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number{
        return this.produtos.length;
    }

    valorTotal(): number{
        return this.produtos.reduce((soma, produto) => soma + produto._preco, 0)
    }
}

class Produto{
    constructor(
        public _nome: string,
        public _preco: number
    ){}
}

const carrinhoDeCompras = new CarrinhoDeCompras();

const produto_1 = new Produto('Camiseta', 49.9);
const produto_2 = new Produto('Caneca', 1.9);
const produto_3 = new Produto('Caneta', 0.9);

carrinhoDeCompras.inserirProdutos(produto_1, produto_2, produto_3);

console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());
