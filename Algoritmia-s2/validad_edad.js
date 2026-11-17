const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let edad = 0;

rl.question('Ingrese la edad: ', (inputEdad) => {
  edad = parseInt(inputEdad, 10);
  
  if (edad < 0 || edad > 120) {
    console.log('Edad inválida');
  } else {
    console.log('Edad válida');
  }

  rl.close();
});