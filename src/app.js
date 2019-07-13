console.log('App.js is running!');

// JSX
const appInfo = {
  title: 'Indecision App',
  subtitle: 'Hey, you are awesome and you got this',
  options: []
};

const template = (
  <div>
    <h1>{appInfo.title}</h1>
    {appInfo.subtitle && <p> {appInfo.subtitle} </p>}
    {appInfo.options.length > 0 ? "Here are your options" : "No options"}
  </div>
);

const user = {
  name: 'Torri',
  age: 1000,
  location: 'San Francisco'
};

const dreamJob = {
  title: ' Software Engineer',
  start: 'July 31st,2019',
  location: 'San Fran'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } // else: it implicitly returns undefined
}

function getTitle(title) {
  if (title) {
    return <p> Job title:{title}</p>;
  } else {
    return 'Unknown';
  }
}

const templateThree = (
  <div>
    <h1>Dream Job details:</h1>
    <p>{getTitle(dreamJob.title)}</p>
    <p>My dream job starts on: {dreamJob.start}</p>
    <p>My dream job is located in: {dreamJob.location}</p>
  </div>
);

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div> // user.age logical && operator first checks if there is an age, then if that age is greater than 18, then if it is prints out the age
);

const appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file
// ReactDom takes 2 args: 1) your jsx var 2)where you want to render the jsx
ReactDOM.render(templateThree, appRoot);
