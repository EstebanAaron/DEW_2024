var count=0;
function persistence1(n) {

    
    let aux1= n.toString();
    console.log(aux1);
    console.log(count);
    if (parseInt(n)<10) {
        return count;
    }
    else{
        let aux=1;
        for (let i = 0; i < aux1.length; i++) {
            aux*=  parseInt(aux1.charAt(i));
            
        }
        console.log("sumatoria  "+aux);
        count++;
         return persistence1(aux);
        
    }
}
console.log(persistence1(999));
