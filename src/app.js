console.log('App.js is running!');

// JSX
var template = (
  <div>
    <h1>Indecision App</h1>
    <p> Some information </p>
  </div>
);

var templateTwo = (
  <div>
    <h1>Namibia</h1>
    <p>Age: 1000</p>
    <p>Location: SF</p>
  </div>
);
var appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file
// ReactDom takes 2 args: 1) your jsx var 2)where you want to render the jsx
ReactDOM.render(templateTwo, appRoot);
