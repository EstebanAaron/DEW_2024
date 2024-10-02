function random(min,max,numbers) {
    if (min<max&&(max-min)>=numbers) {
        const array = new Set()
        while (array.size<numbers) {
            array.add(Math.floor(Math.random()*(max-min+1)+min));
        }
        return [...array]
    }
    return null
}
console.log(random(12,14,2));
