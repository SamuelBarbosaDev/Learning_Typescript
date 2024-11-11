import { Order } from '../solid/6-dependency-inversion-principle/classes/order';
import { ShoppingCartProtocol } from '../solid/6-dependency-inversion-principle/classes/interfaces/shopping-cart-protocol';
import { CartItem } from '../solid/6-dependency-inversion-principle/classes/interfaces/cart-item';
import { MessagingProtocol } from '../solid/6-dependency-inversion-principle/classes/interfaces/messaging-protocol';
import { PersistencyProtocol } from '../solid/6-dependency-inversion-principle/classes/interfaces/persistency-protocol';
import { CustomerOrder } from '../solid/6-dependency-inversion-principle/classes/interfaces/customer-protocol';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> {
    return [];
  }
  addItem(item: CartItem): void {}
  removeItem(index: number): void {}
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 2;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage() {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder() {}
}

class CustomerMock implements CustomerOrder {
  getName() {
    return '';
  }
  getIDN() {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  );

  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persistencyMock,
  };
};

describe('Order', () => {
    it('Não deve checar se o carrinho estiver vazio', () => {
        const { sut, shoppingCartMock } = createSut();
        const shoppingCartMockSpy = jest
        .spyOn(shoppingCartMock, 'isEmpty')
        .mockReturnValueOnce(true);
        sut.checkout();
        expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
        expect(sut.orderStatus).toBe('open');
    })

    it('Deve enviar uma email para o cliente', () => {
        const { sut, messagingMock } = createSut();
        const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
        sut.checkout();
        expect(messagingMockSpy).toHaveBeenCalledTimes(1);
    })

    it('Deve Sava o pedido', () => {
        const { sut, persistencyMock } = createSut();
        const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
        sut.checkout();
        expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
    })

    it('Deve limpa o carrinho', () => {
        const { sut, shoppingCartMock } = createSut();
        const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');
        sut.checkout();
        expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1)
    })
})