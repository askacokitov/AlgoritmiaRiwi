const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let valor = 0;
let total = 0;
let carros = 0;

function procesarCaja() {
  rl.question('Valor cobrado (0 para cerrar caja): ', (input) => {
    valor = parseFloat(input);

    if (valor !== 0) {
      total = total + valor;
      carros = carros + 1;
      
      procesarCaja(); 
    } else {
      console.log(`\nCarros atendidos: ${carros}`);
      console.log(`Total recaudado: $${total}`);
      
      rl.close();
    }
  });
}

console.log('--- INICIO DE CAJA ---');
procesarCaja();