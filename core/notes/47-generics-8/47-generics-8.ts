// Record
const objeto1: Record<string, string | number> = {
    nome: 'Fulano',
    sobrenome: 'De Tal',
    idade: 1000
}

type PessoaProtocol = {
    nome?: string,
    sobrenome?: string,
    idade?: number,
}

// Required
type PessoaRequired = Required<PessoaProtocol>;

// Partial
type PessoaPartial = Partial<PessoaRequired>;

// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
    nome: 'Fulano',
    sobrenome: 'De Tal',
    idade: 999,
}

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

// 
type AccountMongo = {
    _id: string,
    nome: string,
    idade: number,
    sobrenome: string,
}

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string
};

const accountMongo: AccountMongo = {
    _id: '6666669999999666666',
    nome: 'Fulano',
    idade: 999,
    sobrenome: 'De Tal',
  };

function mapAccount(accountMongo: AccountMongo): AccountApi{
    const {_id, ...accountData } = accountMongo;
    return { ...accountMongo, id: _id };
}

const accountApi = mapAccount(accountMongo)

console.log(objeto1);
console.log(objeto2);
console.log('API:', accountApi)



export default 1;