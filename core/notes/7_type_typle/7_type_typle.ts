// Tuple
const dadosCliente: readonly [number, string] = [1, 'Fulano'];
const dadosCliente2: [number, string, string?] = [1, 'Fulano', 'De tal'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Fulano', 'De tal', 'a', 'b'];

// readonly array
const array1: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];
