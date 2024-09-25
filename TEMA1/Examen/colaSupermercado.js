function queueTime(p,n) {
    const cajas=new Array(n).fill(0);

    for (let i = 0; i < p.length; i++) {
        cajas[0]+=p[i];
        cajas.sort(function (a,b) {
            if (a>b) {
                return 1;
            }
            if (b>a) {
                return -1;
            }
            return 0;
            
        });
        console.log(cajas);
        
    }
    return cajas[cajas.length-1];
    
    // El tiempo de la cola mas rapida sin contar cajas vacias
   /* for (let i = 0; i < cajas.length; i++) {
        if (cajas[i]!=0) {
            return ("La cola mas rapida sera :"+cajas[i]);
        }
        
    }*/

}
console.log(queueTime([2,3,10,4,3],2));