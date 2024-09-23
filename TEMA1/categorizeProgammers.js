function categorizeProgrammers(...n) {
    let aux=[];
    console.log(n);
    let a;
    for (let i = 0; i < n.length; i++) {
        a =n[i];
       if (a[0]>=24&&a[1]>=2) {
         aux.push("Senior");
       }
       else{
        aux.push("Junior");        
       }
    }
    return aux;
}
console.log(categorizeProgrammers([10,1],[21,4],[42,3],[24,4],[30,2],[24,3]));