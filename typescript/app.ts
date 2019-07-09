interface Movable {
    run(meter : number) : void;
}

class Car implements Movable {
    run(meter: number): void {
        throw new Error("Method not implemented.");
    }
}

let car : Movable = {
    run : (meters : number) => console.log(`Car runs ${meters}`)
};

car.run(12);