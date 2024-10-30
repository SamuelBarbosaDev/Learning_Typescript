const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];

async function promiseAsync(){
    return 1
}

function minhaPromise(): Promise<number>{
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {resolve(1)},
                1000,
            );
        }
    )
}

promiseAsync().then((resultado) => console.log(resultado + 1))
minhaPromise().then((resultado) => console.log(resultado + 1))
console.log(arrayNumeros);
