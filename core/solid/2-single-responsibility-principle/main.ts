/*
O princípio da responsabilidade única ( PRI ) afirma que 
"nunca deve haver mais de uma razão para uma classe mudar". 
Em outras palavras, cada classe deve ter apenas uma responsabilidade.
*/
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('AK-47', 3127));
shoppingCart.addItem(new Product('F-16', 9559876));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);