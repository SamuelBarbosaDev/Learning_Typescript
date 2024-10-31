function unirObjetos<T, U>(obj1: T, obj2: U): T & U{
    // return { ...obj1, ...obj2}
    return Object.assign({}, obj1, obj2)
}

const obj1 = { chave: 'string'}
const obj2 = { chave2: 99}
const uniao = unirObjetos(obj1, obj2);
console.log(uniao)