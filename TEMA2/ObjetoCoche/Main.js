let car={
    registration:"3678KRY",
    make: "Ford",
    model: "Focus",
    year: 2018
};

function getMakeModel(object) {
    return (object.make+" "+object.model);
}
console.log(getMakeModel(car));

function thisYearHasITV(object,year) {
    let yearlife=(new Date()).getFullYear() -this.year;
    if (year-object.year>10) {
        return true;
    } 
    if (year-object.year<4){
        return false;
    }
    return (year-object.year)%2==0 ;
}
function toString() {
    return `(${this.registration}-${this.make}-${this.model}-${this.year})`
    
}
console.log(thisYearHasITV(car,2029));
console.log(thisYearHasITV(car,2024));
console.log(thisYearHasITV(car,2028));

let

