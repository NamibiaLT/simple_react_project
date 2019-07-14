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
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file
// ReactDom takes 2 args: 1) your jsx var 2)where you want to render the jsx


var renderCounterApp = function renderCounterApp() {
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
      { onClick: addOne },
      ' + 1 '
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      ' - 1 '
    ),
    React.createElement(
      'button',
      { onClick: reset },
      ' reset '
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
