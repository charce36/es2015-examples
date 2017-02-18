// for in
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...in
for (variable in objeto) sentencia

function mostrar_propiedades(objeto, nombreObjeto) {
   var resultado = "";
   for (var i in objeto) {
      resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
   }
   return resultado;
}

// for of
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...of
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}