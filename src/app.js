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
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appInfo.options.length);
  const option = appInfo.options[randomNum];
  alert(option);
  console.log(randomNum);
};


const appRoot = document.getElementById('app'); // This refers to the id we gave our div tag in the indx.html file

const numbers = [10, 100, 110];

const renderApp = () => {
  const template = (
    <div>
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <p> {appInfo.subtitle} </p>}
      <p>{appInfo.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={appInfo.options.length === 0} onClick={onMakeDecision}> What should I do? </button>
      <button onClick={onRemoveAll}> Reset </button>
      <ol>
        {
          appInfo.options.map((option) => {
            return <li key={option}> Option: {option}</li>;
          })
        }
      </ol>
      <form onSubmit= {onFormSubmit}>
        <input type="text" name="option" />
        <button> Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();


