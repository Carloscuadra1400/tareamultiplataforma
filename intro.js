console.log('Hola Mundo');

const Pi = 3.14

console.log('El valor de PI es ' + Pi);
console.log(`El valor de PI es ${Pi}`);

let edad = 21;

if (edad >= 21) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
};

let contador = 0;

while (contador < 3){
    console.log(`El valor del contador es ${contador}`);
    contador++
};

for (let i = 0; i < contador; i++) {
    console.log(`El valor de i es ${i}`);
};

const numeros = [10, 20, 15, 40, 50];

console.log(numeros)
numeros.push(70);
console.log(numeros);
console.log(numeros[1]);
let ultimo = numeros.pop();
console.log('--------');
console.log(numeros);
console.log(ultimo);

console.log(`Longitud: ${numeros.length}`);

for (num in numeros){
    console.log(`El valor es: ${num}`);
}