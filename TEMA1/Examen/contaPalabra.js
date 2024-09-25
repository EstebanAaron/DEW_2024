function contadorPalabras(a,b) {
    console.log(a);
    console.log(b);
    const aux = new Array(b.length).fill(0);
    let text = a.split(/[ ;¿,?.]+/);
    console.log(text);
    for (let index = 0; index < b.length; index++) {
        
        for (let i = 0; i < text.length; i++) {
            if (text[i].substring(0,b[index].length)==b[index]) {
                aux[index]++;
            }
            
        }
    }
     console.log(aux);
     


}
console.log(contadorPalabras("De las palabras de la lista, la palabra está en la lista.", ['lista', 'en', 'berenjena', 'palabra']));