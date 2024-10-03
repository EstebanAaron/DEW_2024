class Animal {
    name
    speed = 0
    #alive = true

    constructor(name) {
        this.name =name;
    }

    isAlive(){
        return this.#alive;
    }
    toString(){
        return this.name+" esta "+ (this.#alive?"vivo":"muerto");
    }
    move(){
        return "No se como";
        
    }
    cutNeck(){
        return this.#alive=false;
    }
}

pepe = new Animal('Pepe');
console.log(pepe);
console.log(pepe.isAlive());
console.log(pepe.toString());

class Terrestrial extends Animal{
    constructor(name) {
        super(name);
    }
    run(){
       return "Esta corriendo"
        
    }
    move(){
        return this.run();
    }
    
}

class Marine extends Animal {
    constructor(name) {
        super(name);
    }
    swim(){
        console.log("Esta nadando");
        
    }
    move(){
        return "Esta buceando"
    }
    
}

let chicken = new Terrestrial("Paco");
chicken.speed=14;

let shark = new Marine("Manuela");
shark.speed=19;

console.log(shark.toString());
console.log(chicken.toString());

let jungle =[shark, pepe, chicken];

jungle.forEach(element => {
    console.log(element.name+" "+ element.move());
    
});
console.log("----------------FiltroClaseHija----------------------------");

jungle.filter(animal => animal instanceof Marine).forEach(animal=> console.log(animal.name+" "+animal.move()));

console.log("---------------------------------------");

chicken.cutNeck();

jungle.filter(animal => animal.isAlive()).forEach(animal => console.log(animal.name+" "+animal.move()));

console.log("---------------------------------------");

pepe.cutNeck();

jungle.filter(animal => !animal.isAlive()).forEach(animal => console.log("Hiciste sopa de "+animal.name));