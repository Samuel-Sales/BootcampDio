const numero = 3;
const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if (numeroPar) {
    console.log('Executei');
} else {
    console.log('Impar');
}
