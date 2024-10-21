function addOrConcat(
    a: number | string | boolean,
    b: number | string | boolean
): number | string {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`
}

// Module mode
export default 1;