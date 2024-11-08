import { Product } from "../solid/6-dependency-inversion-principle/classes/product"

describe('Product', () => {
    it('Deve ter "name" e glock "price" = 599,00', () => {
        const sut = new Product('glock', 599.00);
        expect(sut).toHaveProperty('name', 'glock');
        expect(sut.price).toBeCloseTo(599.00)
    }) 
})