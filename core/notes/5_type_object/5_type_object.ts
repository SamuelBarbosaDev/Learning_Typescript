const objeto1: {
    readonly chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objeto1.chaveB = 'Outro valor';