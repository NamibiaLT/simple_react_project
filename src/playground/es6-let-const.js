var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = "Jet";
console.log('nameLet', nameLet)

const nameConst = 'Fran';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hugo';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping:

var fullName = 'Jerry Garcia'
if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
