'use strict';

// arguments object - no longer bound w/ arrow functions
var add = function add(a, b) {
  return a + b;
  console.log(arguments); // if you need the arguments object, to return all arguments passed in to function, then you need to struction your body like this, an ES5 function
};

// this keyword - no longer bound with arrow functions

var user = {
  name: 'Tina',
  cities: ['Phili', 'NY', 'SF'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
    return cityMessages;

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());

// Practice multiplying variable:
var multiplier = {
  numbers: [1, 2, 3],
  multiply: function multiply(multiplyBy) {
    return this.numbers.map(function (number) {
      return number * multiplyBy;
    });
  }
};

console.log(multiplier.multiply(10));
