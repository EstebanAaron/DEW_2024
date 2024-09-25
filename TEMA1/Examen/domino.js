function posibles(...n) {
    
const fichas= [[3,1],[4,4],[2,5],[5,1],[2,0],[6,3]];
const posibles=[];

for (let i = 0; i < fichas.length; i++) {
    let a = fichas[i];
    for (let j = 0; j < a.length; j++) {
        if (a[j]==n[0]||a[j]==n[1]) {
           if (posibles.indexOf(a)==-1) {
            posibles.push(a);
           }

        }
        
    }
}
return posibles;
}



console.log(posibles(2,5));