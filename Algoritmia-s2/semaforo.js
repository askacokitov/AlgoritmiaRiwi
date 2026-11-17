const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let unidades = 0;

rl.question('Ingrese la cantidad de unidades en inventario: ', (input) => {
  unidades = parseInt(input, 10);

  if (unidades < 0) {
    console.log('Error: cantidad inválida');
  } else if (unidades === 0) {
    console.log('Rojo: agotado');
  } else if (unidades >= 1 && unidades <= 10) {
    console.log('Amarillo: pedir');
  } else if (unidades > 10) {
    console.log('Verde: todo bien');
  }

  rl.close();
});