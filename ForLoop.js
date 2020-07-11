var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;

console.log(cars.length);
for (i = 0; i < cars.length; i++) {	
    console.log(cars[i]);
	text += cars[i];
}
console.log(text);
