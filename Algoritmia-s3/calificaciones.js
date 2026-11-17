const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let suma = 0;
let aprobados = 0;
let mayor = 0;       
let menor = 5;       
let alguienPerdio = false;

let i = 1;

function pedirNota() {
  if (i <= 5) {
    rl.question(`Nota del estudiante ${i}: `, (input) => {
      let nota = parseFloat(input);

      suma = suma + nota;
      if (nota >= 3) {
        aprobados = aprobados + 1;
      } else {
        alguienPerdio = true; 
      }

      if (nota > mayor) {
        mayor = nota;
      }
      if (nota < menor) {
        menor = nota;
      }

      i = i + 1; 
      pedirNota(); 
    });
  } else {
    let promedio = suma / 5;
    
    console.log(`\nPromedio: ${promedio.toFixed(2)}`);
    console.log(`Aprobados: ${aprobados}`);
    console.log(`Nota más alta: ${mayor}, y más baja: ${menor}`);
    
    if (alguienPerdio) {
      console.log('¿Refuerzo? Sí, hay estudiantes en refuerzo');
    } else {
      console.log('¿Refuerzo? No');
    }

    rl.close();
  }
}

console.log('--- INGRESO DE CALIFICACIONES ---');
pedirNota();