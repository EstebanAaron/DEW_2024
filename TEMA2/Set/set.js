let a = new Set([1,2,3,4,5]);
console.log(a.has(3));
a.delete(4);
console.log(a);
let a_array =[...a];
console.log(a_array);
let b = new Set([4,5,6,7]);
let c = new Set([...a,...b]);
console.log(c);
let d = new Set([...a].filter(element => b.has(element)));
console.log(d);
let f = new Set([...a].filter(element => (!b.has(element))));
console.log(f);

