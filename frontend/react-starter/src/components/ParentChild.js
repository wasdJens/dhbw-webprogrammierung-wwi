import React from "react";

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(userInput) {
    this.setState({ userInput });
  }

  render() {
    const value = this.state.userInput;

    return (
      <div>
        <h1>Parent Component</h1>
        <p>Value is {value}</p>
        <Child value={value} onInputChange={this.handleUserInput} />
      </div>
    );
  }
}

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    const value = this.props.value;

    return (
      <div>
        <h2>Child Component</h2>
        <input value={value} onChange={this.handleChange} />
      </div>
    );
  }
}
