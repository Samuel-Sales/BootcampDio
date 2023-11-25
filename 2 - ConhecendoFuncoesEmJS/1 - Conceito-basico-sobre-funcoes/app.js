function teste() {
    console.log('teste');
}

function teste2(suaMensagemAqui) {
    console.log(suaMensagemAqui)
}

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));

teste();
teste2('Siuuuuuuuu');