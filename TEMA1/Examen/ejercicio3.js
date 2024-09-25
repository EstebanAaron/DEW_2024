function palabrasLongitud(text , n) {
    let result= [];
    
    
    let aux= text.split(" ");
    for (let i = 0; i < aux.length; i++) {
        if (aux[i].length==n) {
            result.push(aux[i]);
        }
        
        
    }
    return result.join(" ");
}
console.log(palabrasLongitud(('Siempre escribe tu código como si la persona que lo fuera a mantener fuera un peligroso psicópata que sabe quien eres y donde vives'), 9));


