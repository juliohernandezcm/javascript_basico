/* TIPOS DE FUNCIONES */

// Declarativas
function miFuncion() {
  return 3;
}

// Expresión
var miFuncion = function (a, b) {
  return a + b;
};

miFuncion(5, 5);

// La principal diferencia es que podemos llamar a una función declarativa antes de ser declarada

// Ejemplo de funciones
function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("julio");

// Función sumar
function sumar(a, b) {
  var resultado = a + b;
  return resultado;
}

sumar(1, 2);
