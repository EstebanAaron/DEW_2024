function temperaturaNegativa(...n){
    for (let i = 0; i < n.length; i++) {
        if (n[i]<0) {
            return true;
        }
        
    }
    return false;
}
console.log(temperaturaNegativa(15, 3, 4, 8, 2, 10, 14, 16));
