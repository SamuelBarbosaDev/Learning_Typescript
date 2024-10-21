type MapStringsCallback = (item: string) => string;

function mapStrings(
    array: string[],
    callback: MapStringsCallback,
): string[]{

    const newArray: string[] = [];
    for (let i = 0; i < array.length; i++){
        const item = array[i];
        newArray.push(callback(item))
    }
    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());