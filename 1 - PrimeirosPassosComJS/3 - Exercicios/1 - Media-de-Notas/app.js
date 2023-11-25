/* 
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprimaa
a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1 = 3;
let nota2 = 5;
let nota3 = 2;

media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`${media} TA REPROVADO KKKKKKKKK`);
}else if (media >= 5 && media <= 7) {
    console.log(`${media} TA DE RECUPERACAO, AINDA DA TEMPO DE RESOLVER A MERDA`);
}else {
    console.log(`${media} VC PASSOU PARABÉNS!!`);
}