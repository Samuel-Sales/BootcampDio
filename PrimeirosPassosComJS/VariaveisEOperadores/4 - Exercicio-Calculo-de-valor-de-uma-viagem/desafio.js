/* Faça um programa para calcular o valor de uma viagem.

   Você terá 3 variáveis. Sendo elas:
   1 - Preço do combustível;
   2 - Gasto médio de combustível do carro por KM;
   3 - Distância em KM da viagem;

   Imprima no console o valor que será gasto para realizar está viagem.
 */

let precoCombustivel = 5.79;
let KmPorLitros = 12;
const distancia = 1580;

const litrosConsumidos = distancia / KmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
