var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    carDetail: function(){
        console.log(`Car ${this.model} ${this.year}`)
    }
}

myCar.brand;
myCar.year;
myCar.carDetail();