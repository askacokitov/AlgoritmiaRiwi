const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

async function leerPedido() {
  let subtotal = 0;
  let precio = -1; 
  
  while (precio !== 0) {
    let inputPrecio = await preguntar('Ingrese el precio del plato (0 para terminar): ');
    precio = parseFloat(inputPrecio);

    if (precio !== 0) {
      let inputCantidad = await preguntar('Ingrese la cantidad: ');
      let cantidad = parseInt(inputCantidad, 10);
      subtotal = subtotal + (precio * cantidad);
    }
  }
  return subtotal;
}

function calcularPorcentaje(base, porcentaje) {
  return (base * porcentaje) / 100;
}

function imprimirFactura(subtotal, impuesto, propina) {
  let total = subtotal + impuesto + propina;
  console.log('\n--- FACTURA ---');
  console.log(`Subtotal:  $${subtotal}`);
  console.log(`Impuesto (8%):  $${impuesto}`);
  console.log(`Propina (10%):  $${propina}`);
  console.log(`Total:     $${total}`);
}

async function main() {
  let subtotal = await leerPedido();
  let impuesto = calcularPorcentaje(subtotal, 8);
  let propina = calcularPorcentaje(subtotal, 10);
  
  imprimirFactura(subtotal, impuesto, propina);
  rl.close();
}

console.log('--- INICIO DE PEDIDO ---');
main();