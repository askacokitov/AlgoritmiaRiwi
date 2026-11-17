const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let edad = 0;
let respuesta = '';

rl.question('¿Cuántos años tienes? ', (inputEdad) => {
  edad = parseInt(inputEdad, 10);

  rl.question('¿Aceptas los términos? (S/N) ', (inputRespuesta) => {
    respuesta = inputRespuesta.toUpperCase();

    if (edad >= 14 && respuesta === 'S') {
      console.log('Registro exitoso');
    } else {
      console.log('No puedes registrarte');
    }

    rl.close();
  });
});