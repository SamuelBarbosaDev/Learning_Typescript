/* eslint-disable @typescript-eslint/no-namespace */
namespace CriandoNamespace{
    export const nome = 'Fulano';

    export class Pessoa{
        constructor(public nome: string){}
    }

    export const pessoa = new Pessoa('Fulano De Tal');

    export namespace OutroNamespace{
        export const nome = 'Nome no outro namespace';
    }
}

const valor = 'Valor da variável const'