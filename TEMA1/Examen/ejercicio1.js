function conversorGrados(n) {
    
    for (let i = 0; i < n.length; i++) {
        
        n[i] = (parseInt(n[i])-32)*5/9;
        
    }
    return n;
}
console.log(conversorGrados([68, 50, 46.4, 39, 90]));
