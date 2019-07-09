"use strict";
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.run = function (meter) {
        throw new Error("Method not implemented.");
    };
    return Car;
}());
var car = {
    run: function (meters) { return console.log("Car runs " + meters); }
};
car.run(12);
