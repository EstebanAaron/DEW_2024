function ruleta() {
    const rojo= [1, 3, 5, 7, 9, 12, 14, 16, 18, 21, 23, 25, 27, 30,32,34,36];
    let aux=new Array(4);
    
     aux[0] = Math.floor(Math.random()*37);
     aux[0]=0;
     if (aux[0]==0) {
        return [0];
     }
    aux[0]%2==0?aux[1]=true:aux[1]=false;
    rojo.indexOf(aux[0])>1?aux[2]=true:aux[2]=false;
    aux[0]>18?aux[3]=true:aux[3]=false;
    return aux;
    
}
console.log(ruleta());
