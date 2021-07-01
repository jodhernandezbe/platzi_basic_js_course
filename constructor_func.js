function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var newCar1 = new car("Tesla", "Model 3", 2020);

var newCar2 = new car("Tesla", "Model X", 2018);

var newCar3 = new car("Toyota", "Corolla X", 2020);