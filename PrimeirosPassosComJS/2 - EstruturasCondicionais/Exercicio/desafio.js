/**
 Faça um programa para calcular o valor de uma viagem.

   Você terá 5 variáveis. Sendo elas:
   1 - Preço do etanol;
   2 - Preço da gasolina;
   3 - O tipo de combustível que está no seu carro; 
   4 - Gasto médio de combustível do carro por KM;
   5 - Distância em KM da viagem;

   Imprima no console o valor que será gasto para realizar está viagem.
  
*/


let precoEtanol = 5.79;
let precoGasolina = 6.66;
let tipoDeCombustivelNoCarro = 'Gasolina';
let KmPorLitros = 10;
const distancia = 100;
let valorGasto = 0;

const litrosConsumidos = distancia / KmPorLitros;

if (tipoDeCombustivelNoCarro === 'Gasolina') {
    console.log('Foi escolhido GASOLINA');
    valorGasto = litrosConsumidos * precoGasolina;
}else if (tipoDeCombustivelNoCarro === 'Etanol') {
    console.log('Foi escolhido ETANOL');
    valorGasto = litrosConsumidos * precoEtanol;
}else {
    console.log('Ta errado ai menor, escolha um tipo de combustivel');
}

console.log(valorGasto.toFixed(2));

