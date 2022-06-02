// Esto ocurre solo de la version de ES5 hacia abajo
// Desde ES6 hacia arriba no ocurre ya que se implemetaron las variables const y let

//aqui se da el hoisting en las variables
//donde la variable es usada antes de ser declarada
//
console.log(miNombre);
var miNombre = "Francisco";

hey();

function hey() {
  console.log("hola " + miNombre);
}

var miNombre = "Francisco";

//Lo ideal es que se declaren la funcines al inicio
