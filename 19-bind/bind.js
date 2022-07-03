// NECCESSITY OF "bind"
distance = 10000;
const roadTrip1 = {
  distance: 3000,
  getDistance: function () {
    return this.distance;
  },
};
const getTripDistance = roadTrip1.getDistance;
console.log(getTripDistance());
const getTripDistance1 = roadTrip1.getDistance.bind(roadTrip1);
console.log(getTripDistance1());

const roadTrip2 = {
  distance: 5000,
};
const getTripDistance2 = roadTrip1.getDistance.bind(roadTrip2);
console.log(getTripDistance2());

const roadTrip3 = {
  distance: 3000,
  getDistance: function (unit, caption) {
    return this.distance + unit + caption;
  },
};
const getTripDistance4 = roadTrip3.getDistance.bind(roadTrip2, "km");
console.log(getTripDistance4(" left to go"));
