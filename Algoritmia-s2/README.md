## Pruebas de Decisión y de Escritorio

**01_validar_registro.js**
- **Prueba de Decisión (Camino Verdadero):** Entrada: `edad = 14`, `respuesta = S` → Salida: `Registro exitoso`.
- **Prueba de Decisión (Camino Falso por edad):** Entrada: `edad = 13`, `respuesta = S` → Salida: `No puedes registrarte`.
- **Prueba de Decisión (Camino Falso por términos):** Entrada: `edad = 30`, `respuesta = N` → Salida: `No puedes registrarte`.
- **Prueba de Decisión (Camino Falso por ambas):** Entrada: `edad = 14`, `respuesta = s` (minúscula) → Salida: `Registro exitoso` *(Nota: el código convierte a mayúscula con `.toUpperCase()`, por lo que la lógica funciona correctamente)*.
- **Prueba de Escritorio (Caso 13 S):** 
  1. `edad = 13`, `respuesta = "S"`.
  2. Evalúa `13 >= 14` (Falso).
  3. Falso && Verdadero = Falso.
  4. Entra al `else` → Muestra "No puedes registrarte".

  ## Pruebas de Decisión y de Escritorio

**02_validar_edad.js**
- **Prueba de Decisión (Válida):** Entrada: `edad = 0` → Salida: `Edad válida`.
- **Prueba de Decisión (Válida):** Entrada: `edad = 120` → Salida: `Edad válida`.
- **Prueba de Decisión (Inválida por menor):** Entrada: `edad = -1` → Salida: `Edad inválida`.
- **Prueba de Decisión (Inválida por mayor):** Entrada: `edad = 121` → Salida: `Edad inválida`.

- **Prueba de Escritorio (Caso -1):**
  1. `edad = -1`.
  2. Evalúa `-1 < 0` (Verdadero) || `-1 > 120` (Falso).
  3. Verdadero || Falso = Verdadero.
  4. Entra al `if` → Muestra "Edad inválida".

- **Prueba de Escritorio (Caso 0):**
  1. `edad = 0`.
  2. Evalúa `0 < 0` (Falso) || `0 > 120` (Falso).
  3. Falso || Falso = Falso.
  4. Entra al `else` → Muestra "Edad válida".

  ## Pruebas de Decisión y de Escritorio — El Parqueadero

**03_parqueadero.js**
### Resultados de los 9 Casos Borde (Pruebas de Decisión)
1. Carro, 15 min, No → Salida: `$0` (OK)
2. Carro, 16 min, No → Salida: `$4000` (OK)
3. Carro, 60 min, No → Salida: `$4000` (OK)
4. Carro, 61 min, No → Salida: `$8000` (OK)
5. Moto, 61 min, Sí → Salida: `$2000` (OK)
6. Carro, 600 min, No → Salida: `$30000` (OK)
7. Carro, 600 min, Sí → Salida: `$15000` (OK)
8. Tipo 3, 30 min, No → Salida: `Tipo de vehículo no válido` (OK)
9. Carro, -5 min, No → Salida: `Los minutos no pueden ser negativos` (OK)

### Pruebas de Escritorio

**Caso 4 (Carro, 61 minutos, No tiene factura):**
1. `tipo = 1`, `minutos = 61`, `factura = "N"`.
2. `minutos < 0` → Falso.
3. `tipo === 1` → Verdadero. `tarifa = 4000`.
4. `tarifa === 0` → Falso.
5. `minutos <= 15` → Falso (61 no es <= 15).
6. `horas = Math.trunc((61 + 59) / 60)` = `Math.trunc(120 / 60)` = `2`.
7. `valor = 2 * 4000 = 8000`.
8. `valor > 30000` → Falso.
9. `factura === "S"` → Falso.
10. Imprime: `Valor a pagar: $8000`.

**Caso 5 (Moto, 61 minutos, Sí tiene factura):**
1. `tipo = 2`, `minutos = 61`, `factura = "S"`.
2. `minutos < 0` → Falso.
3. `tipo === 2` → Verdadero. `tarifa = 2000`.
4. `tarifa === 0` → Falso.
5. `minutos <= 15` → Falso.
6. `horas = Math.trunc((61 + 59) / 60)` = `2`.
7. `valor = 2 * 2000 = 4000`.
8. `valor > 30000` → Falso.
9. `factura === "S"` → Verdadero. `valor = 4000 / 2 = 2000`.
10. Imprime: `Valor a pagar: $2000`.

### Tabla de Decisión — Semáforo

| Condición | Resultado |
| :--- | :--- |
| `unidades < 0` | Error |
| `unidades = 0` | Rojo: agotado |
| `unidades` de 1 a 10 | Amarillo: pedir |
| `unidades > 10` | Verde: todo bien |

### Pruebas de Decisión y de Escritorio — Semáforo

- **Prueba de Decisión (Error):** Entrada: `unidades = -5` → Salida: `Error: cantidad inválida`.
- **Prueba de Decisión (Rojo):** Entrada: `unidades = 0` → Salida: `Rojo: agotado`.
- **Prueba de Decisión (Amarillo):** Entrada: `unidades = 5` → Salida: `Amarillo: pedir`.
- **Prueba de Decisión (Verde):** Entrada: `unidades = 15` → Salida: `Verde: todo bien`.

- **Prueba de Escritorio (Caso Amarillo, 5 unidades):**
  1. `unidades = 5`.
  2. Evalúa `5 < 0` → Falso.
  3. Evalúa `5 === 0` → Falso.
  4. Evalúa `5 >= 1 && 5 <= 10` → Verdadero.
  5. Entra al bloque y muestra `Amarillo: pedir`.

### Pruebas de Decisión y de Escritorio — Bisiesto

- **Prueba de Decisión (Bisiesto normal):** Entrada: `anio = 2024` → Salida: `2024 es bisiesto`.
- **Prueba de Decisión (No bisiesto por 100):** Entrada: `anio = 1900` → Salida: `1900 no es bisiesto`.
- **Prueba de Decisión (Bisiesto por 400):** Entrada: `anio = 2000` → Salida: `2000 es bisiesto`.
- **Prueba de Decisión (No bisiesto normal):** Entrada: `anio = 2026` → Salida: `2026 no es bisiesto`.

- **Prueba de Escritorio (Caso 1900):**
  1. `anio = 1900`.
  2. Evalúa `1900 % 4 === 0` → Verdadero.
  3. Evalúa `1900 % 100 !== 0` → Falso.
  4. Primera parte de la condición: `Verdadero && Falso` → Falso.
  5. Evalúa `1900 % 400 === 0` → Falso.
  6. Condición final: `Falso || Falso` → Falso.
  7. Entra al `else` e imprime `1900 no es bisiesto`.

- **Prueba de Escritorio (Caso 2000):**
  1. `anio = 2000`.
  2. Evalúa `2000 % 4 === 0` → Verdadero.
  3. Evalúa `2000 % 100 !== 0` → Falso (2000 sí es divisible entre 100).
  4. Primera parte de la condición: `Verdadero && Falso` → Falso.
  5. Evalúa `2000 % 400 === 0` → Verdadero.
  6. Condición final: `Falso || Verdadero` → Verdadero.
  7. Entra al `if` e imprime `2000 es bisiesto`.