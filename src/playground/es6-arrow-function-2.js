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
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

user.printPlacesLived();
