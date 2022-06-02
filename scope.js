// Scope global
var miNombre = "Julio";

function nombre() {
  // Scope local
  var miApellido = "Hernandez";
  // Desde aca puedo acceder al scope global
  console.log(`${miNombre} ${miApellido}`);
}

nombre();

// Pero desde aqui (scope global), no puedo acceder al scope local de la funcion
console.log(miApellido); // miApellido is not defined
