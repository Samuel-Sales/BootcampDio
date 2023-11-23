/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo
adequado.

Código Condição de pagamento:
- A vista Debito, recebe 10% de desconto;
- A vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
let valorProduto = 1280.00;
let pagamento = '4x';
let desconto;
let precoComDesconto = 0;

if (pagamento === 'Debito') {
    desconto = valorProduto * 0.10;
    precoComDesconto = valorProduto - desconto;
}else if (pagamento === 'Dinheiro' || pagamento === 'PIX') {
    desconto = valorProduto * 0.15;
    precoComDesconto = valorProduto - desconto;
}else if (pagamento === '2x') {
    console.log(`O valor final foi: ${valorProduto}`);
}else {
    const juros = valorProduto * 0.10;
    valorProduto = valorProduto + juros;
    console.log(`O valor final foi: ${valorProduto}`);
}

console.log(`O metodo de pagamento selecionado foi: ${pagamento} `);
console.log(`O valor final com o desconto foi: R$ ${precoComDesconto} `);