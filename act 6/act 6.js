//Ejercicio 1 Metodos de arreglos
var animals = ["tiburon", "gaviota", "araña", "dragon de comodo", "leon"];
var comingSoonAnimals = ["pantera", "dragon", "guacamayo"];
//concatenar los arreglos
var newAnimals = animals.concat(comingSoonAnimals);
console.log("se imprime el arreglo de animales concatenados");
console.log(newAnimals);

//acomodar de menor a mayor
var arr = [4, 6, 1, 0, 8, 2, 45, 11, 5, 33, 50, 101];
arr.sort(function (a, b) {
  return a - b;
});
console.log("se imprime el arreglo ordenado");
console.log(arr);

//agregar nuevo animal murcielego
animals.push("murcielego");
console.log("se agrego murcielego");
console.log(animals);

//retirar el animal tiburon
animals.shift("tiburon");
console.log("se retira tiburon");
console.log(animals);

//se imprime el index de gaviota
console.log("se muestra el index del gaviota");
console.log(animals.indexOf("gaviota"));