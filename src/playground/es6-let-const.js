var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = "Jet";
console.log('nameLet', nameLet)

const nameConst = 'Fran';
console.log('nameConst', nameConst);

function getPetName() {
  const petName = 'Hugo';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping:

const fullName = 'Jerry Garcia'
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
