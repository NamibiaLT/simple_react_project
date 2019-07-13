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
  printPlavesLived: function printPlavesLived() {
    var _this = this;

    this.cities.forEach(function (city) {
      console.log(_this.name + ' has lived in ' + city);
    });
  }
};

user.printPlacesLived();
