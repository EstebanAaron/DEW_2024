var integrado = [
    [0, 1],
    [2, 3],
    [4,[1,2,3,4,[9,8,7,6]], 5],
  ].reduce(function (a, b) {
    return a.concat(b);
  });
  console.log(integrado);




  
//SHIFT QUITA EL PRIMERO DEL ARRAY Y POP() EL ULTIMO
var miPescado = ["ángel", "payaso", "mandarín", "cirujano"];

console.log("miPescado antes: " + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift();

console.log("miPescado después: " + miPescado);
// "miPescado after: payaso,mandarín,cirujano"

console.log("Elemento eliminado: " + eliminado);
// "Elemento eliminado: ángel"






//slice corta el array
var nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']








var miHonda = {
    color: "red",
    ruedas: 4,
    motor: { cilindros: 4, cantidad: 2.2 },
  };
  var miCoche = [miHonda, 2, "Buen estado", "comprado 1997"];
  var nuevoCoche = miCoche.slice(0, 2);
  
  //  Muestra los valores de myCar, newCar y el color de myHonda.////////////////////////////////////////
  console.log("miCoche = " + JSON.stringify(miCoche));
  console.log("nuevoCoche = " + JSON.stringify(nuevoCoche));
  console.log("miCoche[0].color = " + miCoche[0].color);
  console.log("nuevoCoche[0].color = " + nuevoCoche[0].color);
  
  // Cambia el color de miHonda.////////////////////////////////////////////////
  miHonda.color = "azul";
  console.log("El nuevo color de mi Honda es " + miHonda.color);
  
  // Muestra el color de myHonda referenciado desde ambos arrays.////////////////////////////////////////////////////////
  console.log("miCoche[0].color = " + miCoche[0].color);
  
  console.log("nuevoCoche[0].color = " + nuevoCoche[0].color);
  





  //ORDENAR ////////////////////////////////////////////
  const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  items.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  

  //ELIMIAR ELEMENTOS DENTRO DEL ARRAY//////////////////
  var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]

var myFish = ["angel", "clown", "trumpet", "sturgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]



///APLANAR UN ARRAY FLAT()///////////
// array.flat
//para permitir el aplanamiento a nivel profundo use recursión con reduce y concat
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
//arr1.flat(Infinity)

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    [],
  );
}
flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]


////   fill  //////////////////////////////////////

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]




/////// FILTRO///////////////////////////////////////////////////////

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
