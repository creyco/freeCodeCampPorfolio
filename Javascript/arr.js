function generarArreglo(minimo, maximo) {
    return Array.from({ length: maximo - minimo + 1 }, (_, index) => index + minimo);
  }
  const arreglo = generarArreglo(1, 5);
  console.log(arreglo); // Resultado: [1, 2, 3, 4, 5]

  