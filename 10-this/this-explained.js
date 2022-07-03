color = "red";

var myCar = {
  color: "Blue",
  logColor: function () {
    var self = this;
    console.log("In logColor - this.color: " + this.color);
    console.log("In logColor - self.color: " + self.color);
    (function () {
      console.log("In IIFE - this.color: " + this.color);
      console.log("In IIFE - self.color: " + self.color);
    })();
  },
};
myCar.logColor();

const color1 = "yellow";
// This in Arrow Syntax
var myCar1 = {
  color: "Blue",
  logColor: () => {
    var self = this;
    console.log("In logColor - this.color: " + this.color1);
    console.log("In logColor - self.color: " + self.color);
    console.log("In logColor - global.color1: " + color1);
    console.log("In logColor - object.color: " + myCar1.color);

    (function () {
      console.log("In IIFE - this.color: " + this.color); // Global Reference
      console.log("In IIFE - self.color: " + self.color);
    })();
  },
};
myCar1.logColor();
