const carLib = require(`./car_lib`);

function showValues(obj) {
    for (const key in obj) {
        console.log(obj[key].make);
    }
};

showValues(carLib);