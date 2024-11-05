import _ from 'lodash';

_.mul = function (array: number[]): number{
    return array.reduce(
        (total, actual) => total * actual,
        1 
    )
}

// Aplicando
const array = [1, 2, 3, 4, 5, 78];

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));
