/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condições:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

let peso = 75.0;
let altura = 1.73;

imc = peso / (altura * altura);

if (imc <= 18.5) {
    console.log(`O peso eh: ${peso}`);
    console.log('Voce esta abaixo do peso!');
}else if (imc >= 18.5 && imc <= 25) {
    console.log(`O peso eh: ${peso}`);
    console.log('Voce esta no peso normal');
}else if (imc >= 25 && imc <= 30) {
    console.log(`O peso eh: ${peso}`);
    console.log('Voce esta Acima do peso, GORDO');
}else if (imc >= 30 && imc <= 40) {
    console.log(`O peso eh: ${peso}`);
    console.log('Voce esta obeso, KKK');
}else {
    console.log(`O peso eh: ${peso}`);
    console.log('Obesidade Grave, nivel Thais Carla');
}