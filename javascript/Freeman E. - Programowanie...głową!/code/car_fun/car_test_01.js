const carLib = require(`./car_lib`);

function showValues(obj) {
    for (const key in obj) {
        console.log(obj[key].make);
    }
};

function refuel(car, amount) {
    carLib[car].fuel += amount;
};

//showValues(carLib);

function checkFuel(car) {
    console.log(`${carLib[car].make} ${carLib[car].model} has ${carLib[car].fuel} litres of fuel`);
};

checkFuel("fiat");
carLib.fiat.drive();
refuel("fiat", 15);
checkFuel("fiat");
carLib.fiat.drive();
carLib.fiat.start();
checkFuel("fiat");
carLib.fiat.drive();
checkFuel("fiat");

