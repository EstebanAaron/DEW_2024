function squareDigits(n) {
    let aux= n.toString();
    let aux2="";

    for (let i = 0; i < aux.length; i++) {
       aux2+= parseInt(aux.charAt(i))**2;
        
    }
    return aux2;
}
console.log(squareDigits(213));