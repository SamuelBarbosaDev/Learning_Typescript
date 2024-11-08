import { EnterpriseCustomer, IndividualCustomer } from "../solid/6-dependency-inversion-principle/classes/customer";

describe('EnterpriseCustomer', () => {
    it('Deve ter "name" e "CNPJ"', () => {
        const sut = new EnterpriseCustomer('Mercado cinza', '000.000.000-00/0001');

        expect(sut).toHaveProperty('name', 'Mercado cinza');
        expect(sut).toHaveProperty('cnpj', '000.000.000-00/0001');
    });

    it('Deve retorna "name" & "CNPJ"', () => {
        const sut = new EnterpriseCustomer('Mercado cinza', '000.000.000-00/0001');

        expect(sut.getName()).toBe('Mercado cinza')
        expect(sut.getIDN()).toBe('000.000.000-00/0001')
    })

})

describe('IndividualCustomer', () => {
    it('Deve ter "firstName", "lastName" e "CPF"', () => {
        const sut = new IndividualCustomer('Fulano', 'De Tal', '000.000.000-00');

        expect(sut).toHaveProperty('firstName', 'Fulano');
        expect(sut).toHaveProperty('lastName', 'De Tal');
        expect(sut).toHaveProperty('cpf', '000.000.000-00');
    });

    it('Deve retorna nome completo & CPF', () => {
        const sut = new IndividualCustomer('Fulano', 'De Tal', '000.000.000-00');
        expect(sut.getName()).toBe('Fulano De Tal')
        expect(sut.getIDN()).toBe('000.000.000-00')
    });
})