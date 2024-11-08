import { Discount, FiftyPercentDiscount, TenPercentDiscount, NoDiscount } from "../solid/6-dependency-inversion-principle/classes/discount"

const createSut = (className: new () => Discount) => {
    return new className()
}

describe('Discount', () => {
    it('Não deve aplicar desconto', () => {
        const sut = createSut(NoDiscount).calculate(69.69);
        expect(sut).toBeCloseTo(69.69);
    })

    it('Deve aplicar 50% de desconto', () => {
        const sut = createSut(FiftyPercentDiscount).calculate(100.00);
        expect(sut).toBeCloseTo(50.00);
    })

    it('Deve aplicar 10% de desconto', () => {
        const sut = createSut(TenPercentDiscount).calculate(121.00);
        expect(sut).toBeCloseTo(108.9)
    })
})