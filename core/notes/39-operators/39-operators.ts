// Encadeamento opcional e Operador de coalescência nula
type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: 'O titulo',
    texto: 'O texto',
    // data: new Date(),
}

console.log(documento.data?.toDateString() ?? '1 - Não existe data.');
console.log(undefined ?? '2 - Não existe data.');
console.log(null ?? '3 - Não existe data.');
console.log(false ?? '4 - Não existe data.');
console.log(0 ?? '5 - Não existe data.');
console.log('' ?? '6 - Não existe data.');
