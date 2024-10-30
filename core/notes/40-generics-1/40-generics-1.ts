type FilterCallback<U> = (
    value: U,
    index?: number,
    array?: U[]
) => boolean;

function meuFilter<T>(
    array: T[],
    callbackfn: FilterCallback<T>
): T[]{
   const novoArray = [];
   
    for(let i = 0; i < array.length; i++){
        if(callbackfn(array[i])){
            novoArray.push(array[i]);
        }
    }

   return novoArray
}

const array = [1,2,3,4];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(`arrayFiltradoOriginal: ${arrayFiltradoOriginal}`)

const arrayFiltrado = meuFilter(array, (value) => value < 5);
console.log(`arrayFiltrado: ${arrayFiltrado}`)