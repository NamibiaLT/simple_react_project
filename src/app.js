// import React, { Component } from 'react'

const obj = {
  name:'Holly',
  getName() {
    return this.name;
  }
}

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Subtitle here';
    const options = ['thing 1', 'thing 2', 'thing 4', 'thing 5']
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2> {this.props.subtitle} </h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handle pick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}> You go tthis!</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {

  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}></button>
          {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
     </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.optionText
        }
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type= "text" name="option">Add Option</input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
