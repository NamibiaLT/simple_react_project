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


//Counter App:
let count = 0;
const templateTwo = (
  <div>
    <h1> Count: {count}</h1>
    <button id="my-id" className="button"> add 1 </button>
  </div>
);

const appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file
// ReactDom takes 2 args: 1) your jsx var 2)where you want to render the jsx
ReactDOM.render(templateTwo, appRoot);
