/* Recomendado */
// Condicional
const body1= document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;

// HTMLElement
const body3 = document.querySelector('body');

/* Não Recomendado */
// Type assertion
const body4 = (document.querySelector('body') as unknown) as number;

// Non-null assertion (!)
const body5 = document.querySelector('body')!;
