// arguments object - no longer bound w/ arrow functions
const add = function (a, b) {
  return a + b;
  console.log(arguments) // if you need the arguments object, to return all arguments passed in to function, then you need to struction your body like this, an ES5 function
};

// this keyword - no longer bound with arrow functions

const user = {
  name: 'Tina',
  cities: ['Phili', 'NY', 'SF'],
  printPlacesLived() {
    return this.cities.map((city) => {
      return this.name + ' has lived in ' + city;
    });
    return cityMessages;

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());


// Practice multiplying variable:
const multiplier = {
  numbers: [1, 2, 3],
  multiply(multiplyBy) {
    return this.numbers.map((number) => {
      return number * multiplyBy
    });
  }
};

console.log(multiplier.multiply(10));
