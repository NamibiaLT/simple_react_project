'use strict';

var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = "Jet";
console.log('nameLet', nameLet);

var nameConst = 'Fran';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hugo';
  return petName;
}

var petName = getPetName();
console.log(petName);
