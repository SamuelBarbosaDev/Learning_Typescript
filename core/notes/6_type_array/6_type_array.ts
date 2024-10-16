function multiplicaArgs(...args: Array<number>): number{
    return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaString(...args: Array<string>): string{
    return args.reduce((ac, valor) => ac + valor);
}

function toUpcaseArgs(...args: Array<string>): string[]{
    return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1,2,3);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = toUpcaseArgs('a', 'b', 'c')