console.log('App.js is running!');

// JSX
const appInfo = {
  title: 'Indecision App',
  subtitle: 'Hey, you are awesome and you got this',
  options: []
};

const onRemoveAll = () => {
  appInfo.options = [];
  renderApp();
}

const onFormSubmit = (e) => { // e stands for "event"
  e.preventDefault(); // stops the full page refresh

  const option = e.target.elements.option.value;

  if (option) {
    appInfo.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
}


const appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file

const renderApp = () => {
  const template = (
    <div>
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <p> {appInfo.subtitle} </p>}
      <p>{appInfo.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{appInfo.options.length}</p>
      <button onClick={onRemoveAll}> Reset </button>
      <form onSubmit= {onFormSubmit}>
        <input type="text" name="option" />
        <button> Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();


