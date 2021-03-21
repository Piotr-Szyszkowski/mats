const fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function() {
      this.started = true;
    },
    stop: function() {
      this.started = false;
    },
    drive: function() {
      if (this.started) {
        console.log("Zoom zoom!");
      } else {
        console.log("You need to start the engine first.");
      }
    }
  };

  const mercedes = {
    make: "Mercedes",
    model: "Gebels",
    year: 1986,
    color: "Medium BlueSilver",
    passengers: 5,
    convertible: true,
    mileage: 999999,
    started: false,
    start: function() {
      this.started = true;
    },
    stop: function() {
      this.started = false;
    },
    drive: function() {
      if (this.started) {
        console.log("Achtung!! Zoom zoom!");
      } else {
        console.log("You need to start das engine first.");
      }
    }
  };
  

  module.exports = {fiat, mercedes};