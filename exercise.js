/*
EJERCICIO:
Crea una función JS que acepte 4 argumentos.
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
Si es más pequeño, la consola registra "¡El número es menor que 50!"
*/


function calcularMayorQue50(num1, num2, num3, num4) {
      let total = (num1 + num2) * (num3 + num4);
      
      if (total > 50) {
            console.log("¡El número es mayor que 50!");
      }
      else if (total < 50) {
            console.log("¡El número es menor que 50!");
      }
      
      return;
}


calcularMayorQue50(2, 3, 4, 5); //45
calcularMayorQue50(6, 7, 8, 9); //3024
calcularMayorQue50(12, 13, 1, 1); //50

