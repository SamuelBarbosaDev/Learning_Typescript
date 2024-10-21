type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};

type CorRGB = 'red' | 'green' | 'blue';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa{
    return {...pessoa, corPreferida: cor}
}

export default 1;