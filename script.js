class Vehicle {
    manufacturer;
    model;
    year;
    avgSpeed;
    constructor({ manufacturer, model, year, avgSpeed }) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.year = year;
      this.avgSpeed = avgSpeed;
    }

    render(to = document.getElementById("result")) {
      to.innerHTML = `
        <p><b>Manufacturer</b>: ${this.manufacturer}</p>
        <p><b>Model</b>: ${this.model}</p>
        <p><b>Year</b>: ${this.year}</p>
        <p><b>Average Speed</b>: ${this.avgSpeed}</p>
      `;
    }

    timeToTravelDistance(distance) {
      if (typeof distance !== "number") {
        throw new TypeError("distance is not a number");
      }
      const hours = distance / this.avgSpeed;
      if (hours % 4 === 0) {
        return hours + Math.floor((hours - 1) / 4);
      }
      return hours + Math.floor(hours / 4);
    }
  }
  const v1 = new Vehicle({
    manufacturer: "Skoda",
    model: "Octavia",
    year: 2012,
    avgSpeed: 1
  });
  v1.render();
  console.log('time to travel 10 units with avg. speed 1:', v1.timeToTravelDistance(10));
