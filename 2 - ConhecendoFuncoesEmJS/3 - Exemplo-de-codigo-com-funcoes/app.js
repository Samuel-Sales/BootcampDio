function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc(imc) {
    if (imc <= 18.5) {
        return('Voce esta abaixo do peso!');
    }else if (imc >= 18.5 && imc <= 25) {
        return('Voce esta no peso normal');
    }else if (imc >= 25 && imc <= 30) {
        return('Voce esta Acima do peso, GORDO');
    }else if (imc >= 30 && imc <= 40) {
        return('Voce esta obeso, KKK');
    }else {
        return('Obesidade Grave, nivel Thais Carla');
    }
}

function main() {
    let peso = 75.0;
    let altura = 1.73;

    let imc = calcularImc(peso, altura);

    console.log(`O peso eh: ${peso}`);
    console.log(classificarImc(imc));
}

main();