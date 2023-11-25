// Fazer uma funcao para verificar idade

const verificacao = (idade) => {
    if (idade >= 18) {
        console.log(`A idade eh: ${idade}`);
        console.log('Eh maior de idade!!');
    }else {
        console.log(`A idade eh: ${idade}`);
        console.log('Eh menor de idade!!');
    }
}

verificacao(17);