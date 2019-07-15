'use strict';

console.log('visibility-toggle.js is running!');

var app = {
  title: 'Visibility Toggle'
};

var content = false;

var toggleVisibility = function toggleVisibility() {
  content = !content;
  renderApp();
};

var onDeleteContent = function onDeleteContent() {
  if (content.length > 0) {
    return content = false;
  }
  renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      ' ',
      app.title,
      ' '
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: toggleVisibility },
        content ? 'Hide details' : 'Show details'
      ),
      content && React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'Now you see me!'
        )
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
