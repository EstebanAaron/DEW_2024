class Person {
    #dni = "No definido"
    name;
    constructor(dni, name) {
        this.setDni(dni);
        this.name;
    }
    setDni(dni=""){
        if (dni.length == 8) {this.#dni=dni;}
    }
    getDni(){
        return this.#dni;
    }
}
const  a = new Person("2342342","Pepe");
console.log(a.getDni());
