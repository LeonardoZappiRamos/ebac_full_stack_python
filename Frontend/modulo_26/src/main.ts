// Funções 
function multiplicação(v1: number, v2: number): number{
  return v1 * v2;
}

function saudacao(name: string): string {
  return `Ola ${name}`
}

const produto = multiplicação(2, 2);
const ola = saudacao('Leonardo');

console.log(produto);
console.log(ola);