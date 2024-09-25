let saludo = "Hola";
let mundo = "mundo";
let texto = "Hola, mundo!";
console.log(saludo.concat(", ", mundo, "!")); // 'Hola, mundo!'
console.log(texto.includes("mundo")); // true
console.log(texto.indexOf("mundo")); // 6
console.log(texto.toUpperCase()); // 'HOLA, MUNDO!'
console.log(texto.slice(0, 5)); // 'Hola,'
console.log(texto.split(", ")); // ['Hola', 'mundo!']
console.log(texto.replace("mundo", "JavaScript")); // 'Hola, JavaScript!'
let textoConEspacios = "   Hola,   mundo!         ";
console.log(textoConEspacios.trim()); // 'Hola, mundo!'



let cadena = "Hola, cómo estás? Espero que bien.";
// Dividir por varios caracteres (espacios, comas, signos de interrogación)
let partes = cadena.split(/[ ;¿,?]+/); // (/\W+/); Es una expresión regular que coincide con uno o más caracteres no alfanuméricos (es decir, cualquier cosa que no sea una letra, un número o un guion bajo).
// var expresionRegular = /\s*;\s*/; Para separar por ; y espacios 
// Eliminar elementos vacíos
partes = partes.filter(part => part.trim() !== '');

console.log(partes); // ["Hola", "cómo", "estás", "Espero", "que", "bien"]


function letraMasRepetida(texto) {
    // Convertir el texto a minúsculas para evitar diferencias entre mayúsculas y minúsculas
    texto = texto.toLowerCase();

    // Crear un objeto para contar las apariciones de cada letra
    let contador = {};

    // Recorrer cada letra del texto
    for (let letra of texto) {
        if (letra.match(/[a-z]/)) { // Solo contar letras (a-z)
            if (contador[letra]) {
                contador[letra]++;
            } else {
                contador[letra] = 1;
            }
        }
    }

    // Encontrar la letra con más apariciones
    let maxLetra = '';
    let maxContador = 0;

    for (let letra in contador) {
        if (contador[letra] > maxContador) {
            maxContador = contador[letra];
            maxLetra = letra;
        }
    }

    return maxLetra;
}

// Ejemplo de uso
let texto1 = "Este es un ejemplo de texto para probar el código.";
console.log("La letra que más se repite es: " + letraMasRepetida(texto1));
