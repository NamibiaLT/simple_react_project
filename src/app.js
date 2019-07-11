console.log('App.js is running!');

// JSX
var appInfo = {
  title: 'Indecision App',
  subtitle: 'Hey, you are awesome and you got this'
};

var template = (
  <div>
    <h1>{appInfo.title}</h1>
    <p> {appInfo.subtitle} </p>
  </div>
);

var user = {
  name: 'Torri',
  age: 1000,
  location: 'San Francisco'
};

var dreamJob = {
  title: 'Software Engineer',
  start: 'July 31st',
  location: 'San Fran'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } // else: it implicitly returns undefined
}

var template = (
  <div>
    <h1>Dream Job details:</h1>
    <p>Job Title: {dreamJob.title}</p>
    <p>My dream job starts on: {dreamJob.start}</p>
    <p>My dream job is located in: {dreamJob.location}</p>
  </div>
);
var templateTwo = (
  <div>
    <h1>{user.name? user.name : 'Anonymous'}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file
// ReactDom takes 2 args: 1) your jsx var 2)where you want to render the jsx
ReactDOM.render(template, appRoot);
