console.log('visibility-toggle.js is running!');

const app = {
  title: 'Visibility Toggle',
}

let content = false;

const toggleVisibility = () => {
  content = !content;
  renderApp();
};

const onDeleteContent = () => {
  if (content.length > 0) {
    return content = false;
  }
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1> {app.title} </h1>
      <div>
        <button onClick={toggleVisibility}>{content ? 'Hide details' : 'Show details'}</button>
        {content && (
          <div>
            <p>Now you see me!</p>
          </div>
        )}
      </div>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
