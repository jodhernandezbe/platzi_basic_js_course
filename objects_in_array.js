var items = [
    {name: "Bike", cost: 3000},
    {name: "TV", cost: 2500},
    {name: "Book", cost: 320},
    {name: "Cell Phone", cost: 10000},
    {name: "Laptop", cost: 20000},
    {name: "Keyboard", cost: 500},
    {name: "Headphones", cost: 1700},
]

var itemFilter = items.filter(function(item){
    return item.cost <= 500
});

var itemName = items.map(function(item){
    return item.name
});

var itemFind = items.find(function(item){
    return item.name === "Laptop"
});

items.forEach(function(item){
    console.log(item.name);
});

var itemCheap = items.some(function(item){
    return item.cost <= 700
});