class Car {
    public name : string;
    public acceleration : number = 0;

    constructor(name: string) {
        this.name = name;
    }

    public honk() : void{
        console.log('tooot');
    }

    public accelerate(speed) {
        this.acceleration = this.acceleration + speed
    }
}

const car = new  Car("BMW")
car.honk()
console.log(car.acceleration)
car.accelerate(10)
console.log(car.acceleration)

