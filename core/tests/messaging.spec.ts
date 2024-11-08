import { Messaging } from "../solid/6-dependency-inversion-principle/services/messaging";

const createSut = () => {
    return new Messaging()
}

describe('Messaging', () => {
    afterEach(() => jest.clearAllMocks());

    it('Deve retorna indefinido.', () => {
        // System under test
        const sut = createSut();
        const msg = 'teste'
        expect(sut.sendMessage(msg)).toBeUndefined();
    })

    it('Deve chamar console.log uma vez.', () => {
        const sut = createSut();
        const consoleSpy = jest.spyOn(console, 'log');
        const msg = 'teste'
        sut.sendMessage(msg);
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    })

    it('Deve chamar console.log com "Mensagem enviada:" e msg.', () => {
        const sut = createSut();
        const consoleSpy = jest.spyOn(console, 'log');
        const msg = 'teste'
        sut.sendMessage(msg);
        expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', msg)
    })
})
