function cuentanumeros(...n) {
    const aux=[0,1,2,3,4,5,6,7,8,9];
    const result=new Array(aux.length).fill(0);
    for (let i = 0; i < aux.length; i++) {
        
        for (let j = 0; j < n.length; j++) {
            if (aux[i]==n[j]) {
                result[i]++;
            }
            
        }
        
        
        
    }
    return result;
}
console.log(cuentanumeros(9,8,7,6,5,4,3,2,1,0));
