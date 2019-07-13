'use strict';

console.log('App.js is running!');

// JSX
var appInfo = {
  title: 'Indecision App',
  subtitle: 'Hey, you are awesome and you got this',
  options: []
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appInfo.title
  ),
  appInfo.subtitle && React.createElement(
    'p',
    null,
    ' ',
    appInfo.subtitle,
    ' '
  ),
  appInfo.options.length > 0 ? "Here are your options" : "No options"
);

//Counter App:
var count = 0;
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' Count: ',
    count
  ),
  React.createElement(
    'button',
    { id: 'my-id', className: 'button' },
    ' add 1 '
  )
);

var appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file
// ReactDom takes 2 args: 1) your jsx var 2)where you want to render the jsx
ReactDOM.render(templateTwo, appRoot);
