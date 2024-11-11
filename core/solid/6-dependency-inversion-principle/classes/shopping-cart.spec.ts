import { ShoppingCart } from './shopping-cart';
import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

const createSut = () => {
    const discountMock = createDiscountMock();
    const sut = new ShoppingCart(discountMock);
    return { sut, discountMock };
}

const createDiscountMock = () => {
    class DiscountMock extends Discount{}
    return new DiscountMock();
}

const createCartItem = (name: string, price: number) => {
    class CartItemMock implements CartItem{
        constructor(public name: string, public price: number){}
    }

    return new CartItemMock(name, price);
}

const createSutWithProducts = () => {
    const { sut, discountMock } = createSut();
    const cartItem1 = createCartItem('Camiseta', 40);
    const cartItem2 = createCartItem('Caneta', 1);
    sut.addItem(cartItem1);
    sut.addItem(cartItem2);
    return { sut, discountMock}
}

describe('ShoppingCart', () => {
    it('Deve ter um carrinho sem produtos', () => {
        const { sut } = createSut();
        expect(sut.isEmpty()).toBe(true);
    });
    it('Deve ter 2 itens no carrinho', () => {
        const { sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2);
    })
    it('Deve testa o total e total com desconto', () => {
        const { sut } = createSutWithProducts();
        expect(sut.total()).toBe(41);
        expect(sut.totalWithDiscount()).toBe(41);
    })
    it('Deve remove produtos', () => {
        const { sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2);
        sut.removeItem(1);
        expect(sut.items.length).toBe(1);
        sut.removeItem(0);
        expect(sut.isEmpty()).toBe(true);
    })

    it('Deve chamar "discount.calculate" uma vez quando "totalWithDiscount" é chamado', () => {
        const { sut, discountMock } = createSutWithProducts();
        const discountMockSpy = jest.spyOn(discountMock, 'calculate');
        sut.totalWithDiscount();
        expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
    })

})