console.log('App.js is running!');

// JSX
var template = <p> This is JSX from app.js!</p>;
var appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file
// ReactDom takes 2 args: 1) your jsx var 2)where you want to render the jsx
ReactDOM.render(template, appRoot);
