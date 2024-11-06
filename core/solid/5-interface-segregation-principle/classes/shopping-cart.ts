import { Discount } from "./discount";
import { CartItem } from "./interfaces/cart-item";

export class ShoppingCart{
    private readonly _item: CartItem[] = [];

    constructor(private readonly discount: Discount){}

    addItem(item: CartItem): void{
        this._item.push(item);
    }

    removeItem(index: number): void{
        this._item.splice(index, 1);
    }

    get items(): Readonly<CartItem[]>{
        return this._item;
    }

    total(): number{
        return +this._item
        .reduce((total, next) => total + next.price, 0)
        .toFixed(2)
    }

    totalWithDiscount(): number{
        return this.discount.calculate(this.total())
    }

    isEmpty(): boolean{
        return this._item.length === 0;
    }

    clear(): void{
        console.log('Carrinho de compras foi limpo...');
        this._item.length = 0;
    }
}