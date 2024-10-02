class Car {
    registration;
    make;
    model;
    #year;
    owner = null;
    constructor(registration, make, model="Ford", year=2018) {
        this.registration=registration;
        this.make = make;
        this.model= model;
        this.#year= year;
    }
    getMakeModel(){
        return this.make+" "+this.model;
    }
    getYear(){
        return this.#year;
    }
    setYear(year){
        if (year<this.#year) {this.#year= year;
            
        }
    }
}
const car1 = new Car("12345ABC","Ford","Focus");
const car2 = new Car("54321CBA","FIAT","Panda",2000);

let array = new Array();
array.push(car1);
array.push(car2);
array.push(new Car("5678fgh","Ferrari","Tocho",2024));

array.forEach(element => {
    console.log(element.getMakeModel());
    console.log(element);
    element.setYear(2022);
    
    console.log(element.getYear());
    
});
console.log(car1);



class Person {
    #dni = "No definido"
    name;
    constructor(dni, name) {
        this.setDni(dni);
        this.name = name;
    }
    setDni(dni=""){
        if (dni.length == 8) {this.#dni=dni;}
    }
    getDni(){
        return this.#dni;
    }
}
const  a = new Person("23423423","Pepe");
console.log(a.getDni());





array[0].owner= a;  
console.log(array[0].owner.name);
