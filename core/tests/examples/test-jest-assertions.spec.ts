describe('Valores Primitivos', () => {
    it('Verificando afirmações do jest - Parte 1', () => {
        const number = 69;

        expect(number).toBeLessThan(70);
        expect(number).toBeLessThanOrEqual(69);
        
        expect(number).toBeCloseTo(68.996);

        expect(number).not.toBeNull();

        expect(number).toHaveProperty('toString');
    })

    it('Verificando afirmações do jest - Parte 1', () => {
        const number = 69;

        expect(number).toBe(69);
        expect(number).toEqual(69);

        expect(number).not.toBeFalsy();
        expect(number).toBeTruthy();

        expect(number).toHaveProperty('toString');
    });
});

describe('Objects', () => {
    it('Verificando afirmações do jest com objetos', () => {
        const person = { name: 'Fulano', age: 100};
        const anotherPerson = { ...person };

        expect(person).toEqual(anotherPerson);
        expect(person).toHaveProperty('age');
        expect(person).not.toHaveProperty('lastName');
        expect(person).toHaveProperty('age', 100);

        expect(person.name).toBe('Fulano');
    })
})
