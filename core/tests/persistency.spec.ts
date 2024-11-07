import { Persistency } from "../solid/2-single-responsibility-principle/services/persistency";

describe('Persistency', () => {
    afterEach(() => jest.clearAllMocks());

    it('Deve retorna indefinido', () => {
        // System under test
        const sut = new Persistency();
        expect(sut.saveOrder()).toBeUndefined();
    })

    it('Deve chamar console.log uma vez', () => {
        const sut = new Persistency();
        const consoleSpy = jest.spyOn(console, 'log');
        sut.saveOrder();
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    })

    it('Deve chamar console.log com "Pedido salvo com sucesso..."', () => {
        const sut = new Persistency();
        const consoleSpy = jest.spyOn(console, 'log');
        sut.saveOrder();
        expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...')
    })
})
