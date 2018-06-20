function produceDrivingRange(range) {
  return function(street1, street2) {
    const distance = Math.abs(parseInt(street2) - parseInt(street1));
    if ((range - distance) >= 0) {
      return `within range by ${range-distance}`;
    } else {
      return `${distance-range} blocks out of range`;
    }
  };
}

function produceTipCalculator(tipRate) {
  return function (fare) {
    return fare * tipRate;
  };
}

function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.id = ++DriverId;
      this.name = name;
    }
  }
}
