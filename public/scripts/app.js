'use strict';

console.log('App.js is running!');

// JSX
var appInfo = {
  title: 'Indecision App',
  subtitle: 'Hey, you are awesome and you got this',
  options: []
};

var onRemoveAll = function onRemoveAll() {
  appInfo.options = [];
  renderApp();
};

var onFormSubmit = function onFormSubmit(e) {
  // e stands for "event"
  e.preventDefault(); // stops the full page refresh

  var option = e.target.elements.option.value;

  if (option) {
    appInfo.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * appInfo.options.length);
  var option = appInfo.options[randomNum];
  alert(option);
  console.log(randomNum);
};

var appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file

var numbers = [10, 100, 110];

var renderApp = function renderApp() {
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
    React.createElement(
      'p',
      null,
      appInfo.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      'button',
      { disabled: appInfo.options.length === 0, onClick: onMakeDecision },
      ' What should I do? '
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      ' Reset '
    ),
    React.createElement(
      'ol',
      null,
      appInfo.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          ' Option: ',
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        ' Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
