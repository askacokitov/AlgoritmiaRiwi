const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Altura de la pirámide: ', (input) => {
  let n = parseInt(input, 10);

  console.log(''); 

  for (let fila = 1; fila <= n; fila++) {
    
    for (let j = 1; j <= n - fila; j++) {
      process.stdout.write(' ');
    }

    for (let j = 1; j <= (2 * fila) - 1; j++) {
      process.stdout.write('*');
    }

    console.log('');
  }

  rl.close();
});