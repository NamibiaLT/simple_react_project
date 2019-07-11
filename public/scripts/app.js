'use strict';

console.log('App.js is running!');

// JSX
var appInfo = {
  title: 'Indecision App',
  subtitle: 'Hey, you are awesome and you got this'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appInfo.title
  ),
  React.createElement(
    'p',
    null,
    ' ',
    appInfo.subtitle,
    ' '
  )
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
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  } // else: it implicitly returns undefined
}

function getTitle(title) {
  if (title) {
    return React.createElement(
      'p',
      null,
      ' Job title:',
      title
    );
  } else {
    return 'Unknown';
  }
}

var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Dream Job details:'
  ),
  React.createElement(
    'p',
    null,
    'Job Title: ',
    getTitle(dreamJob.title)
  ),
  React.createElement(
    'p',
    null,
    'My dream job starts on: ',
    dreamJob.start
  ),
  React.createElement(
    'p',
    null,
    'My dream job is located in: ',
    dreamJob.location
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file
// ReactDom takes 2 args: 1) your jsx var 2)where you want to render the jsx
ReactDOM.render(templateThree, appRoot);
