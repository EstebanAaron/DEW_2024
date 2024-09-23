function sumCube(numero){
let aux=0;

for (let i = 0; i <= numero ;i++) {
    aux+= (i*i*i);
    
}
return aux;

}
function sumCube1(n) {
    return Array(n).fill(0).map((n,i)=>i+1).reduce((a,n)=> a+=n**3);
}
console.log(sumCube(2));
console.log(sumCube1(2));